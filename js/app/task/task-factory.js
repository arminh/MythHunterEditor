/**
 * Created by armin on 04.02.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('Task', TaskFactory);

    TaskFactory.$inject = ["$log", "$q", "TaskService", "AuthenticationService", "BackendService", "MapInteractionService", "MarkerType", "HtmlText"];

    /* @ngInject */
    function TaskFactory($log, $q, TaskService, AuthenticationService, BackendService, MapInteraction, MarkerType, HtmlText) {
        $log = $log.getInstance("Task", debugging);

        function Task(questName) {
            this.id = 0;
            this.remoteId = 0;
            this.name = "";
            this.html = new HtmlText(this);
            this.type = null;
            this.lon = null;
            this.lat = null;
            this.popupTpl = "";
            this.markerId = -1;
            this.changed = false;
            this.fixed = false;
            this.version = null;

            this.questName = questName;
        }

        Task.prototype = {
            constructor: Task,
            create: create,
            edit: edit,
            drawMarker: drawMarker,
            addMarker: addMarker,
            initFromObject: initFromObject,
            initFromRemote: initFromRemote,
            initFromMarker: initFromMarker,
            updateMarker: updateMarker,
            getMarkerSrc: getMarkerSrc,
            change: change,
            upload: upload,
            remove: remove
        };

        return (Task);

        ////////////////

        function create() {
            $log.info("create");
            return TaskService.openTaskDialog(this).then(function (result) {
                this.name = result.name;
                this.type = result.type;
                this.html.content = result.content;
                this.html.answers = result.answers;
                $log.info("create_success", this);
            }.bind(this));
        }

        function edit() {
            $log.info("edit", this);
            return TaskService.openTaskDialog(this).then(updateTask.bind(this));

            function updateTask(result) {
                if(this.name != result.name) {
                    this.name = result.name;
                    this.change();
                }
                if(this.type != result.type) {
                    this.type = result.type;
                    var marker = MapInteraction.getMarkerById(this.markerId);
                    marker.iconSrc = this.getMarkerSrc();
                    this.change();
                }
                if(this.html.content != result.content) {
                    this.html.content = result.content;
                    this.html.change();
                }
                if(this.html.answers != result.answers) {
                    this.html.answers = result.answers;
                    this.html.change();
                }
                $log.info("edit_success", this);
            }
        }

        function initFromObject(taskObject) {
            $log.info("initFromObject", taskObject);
            this.id = taskObject.id;
            this.changed = taskObject.changed;
            this.fixed = taskObject.fixed;
            this.name = taskObject.name;
            this.lon = taskObject.lon;
            this.lat = taskObject.lat;
            this.popupTpl = taskObject.popupTpl;
            this.remoteId = taskObject.remoteId;
            this.type = taskObject.type;
            this.markerId = taskObject.markerId;
            this.version = taskObject.version;

            var html = new HtmlText();
            html.initFromObject(taskObject.html);
            this.html = html;
            $log.info("initFromObject_success", this);
        }

        function initFromRemote(remoteTask) {
            $log.info("initFromRemote", remoteTask);
            var deffered = $q.defer();

            this.remoteId = remoteTask.getId();
            this.version = remoteTask.getVersion();
            this.name = remoteTask.getName();
            this.type = MarkerType[remoteTask.getType()];

            var position = remoteTask.getPosition();
            this.lon = position.getLongitude();
            this.lat = position.getLatitude();

            getHtmlFromRemote(remoteTask.getHtmlId()).then(finishInit.bind(this));

            function finishInit(result) {
                this.html = result;
                $log.info("initFromRemote_success", this);
                deffered.resolve(this);
            }

            return deffered.promise;
        }

        function getHtmlFromRemote(htmlId) {

            $log.info("getHtmlFromRemote", htmlId);
            return BackendService.getHtml(htmlId).then(initHtml);

            function initHtml(remoteHtml) {
                var html = new HtmlText();
                html.initFromRemote(remoteHtml);
                return html;
            }
        }

        function initFromMarker(marker) {
            $log.info("initFromMarker", marker);
            var coord = marker.getGeometry().getCoordinates();
            var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

            this.lon = coordinates[0];
            this.lat = coordinates[1];
            this.popupTpl = TaskService.getFightTpl(coordinates[0], coordinates[1]);
            $log.info("initFromMarker_success", this);
        }

        function drawMarker() {
            return MapInteraction.drawMarker(this.getMarkerSrc()).then(initMarker.bind(this));

            function initMarker(markerId) {
                var marker = MapInteraction.getMarkerById(markerId);
                this.markerId = markerId;
                this.initFromMarker(marker);
            }
        }

        function addMarker() {
            return MapInteraction.addMarker(this.lon, this.lat, this.getMarkerSrc());
        }

        function updateMarker(marker) {

            this.initFromMarker(marker);
            this.change();
        }

        function change() {
            AuthenticationService.getUser().backup();
            this.changed = true;
        }

        function upload() {
            $log.info("upload", this);

            var deffered = $q.defer();
            this.remoteTask = BackendService.createRemoteTask(this);

            if(this.remoteId < 1 || this.changed) {
                $q.when(this.html.upload(), uploadTask.bind(this));
            } else {
                $q.when(this.html.upload(), returnTask.bind(this))
            }

            function uploadTask(id) {
                this.remoteTask.setHtmlId(id);
                if(this.remoteId != -1 && this.changed) {
                    $log.info("upload - Updating: ", this.remoteTask);
                    return BackendService.updateTask(this.remoteTask).then(function(result) {
                        this.version = result.getVersion();
                        $log.info("upload_success: ", this);
                        deffered.resolve(this.remoteId);
                    }.bind(this), function(error) {
                        alert(error);
                        deffered.reject(error);
                    });

                } else {
                    $log.info("upload - Adding: ", this.remoteTask);
                    return BackendService.addTask(this.remoteTask).then(function(result) {
                        this.remoteId = result.getId();
                        this.version = result.getVersion();
                        $log.info("upload_success: ", this);
                        deffered.resolve(result.getId());
                    }.bind(this));
                }
            }

            function returnTask() {
                $log.info("upload_success: ", this);
                deffered.resolve(this.remoteId);
            }

            return deffered.promise;
        }

        function remove() {
            $log.info("remove: ", this);
            return BackendService.deleteTask(this.remoteId);
        }

        function getMarkerSrc() {
            return TaskService.getMarkerSrc(this.type);
        }


    }

})();