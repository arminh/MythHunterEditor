 /**
 * Created by armin on 04.02.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('Task', TaskFactory);

    TaskFactory.$inject = ["$log", "$q", "TaskService", "AuthenticationService", "BackendService", "MarkerType", "HtmlText", "Enemy"];

    /* @ngInject */
    function TaskFactory($log, $q, TaskService, AuthenticationService, BackendService, MarkerType, HtmlText, Enemy) {
        $log = $log.getInstance("Task", debugging);

        function Task(questName) {
            this.remoteId = 0;
            this.name = "";
            this.type = null;
            this.version = 0;
            this.html = null;
            this.targetHtml = null;
            this.enemy = null;
            this.lon = 0;
            this.lat = 0;
            this.targetLon = 0;
            this.targetLat = 0;

            this.markerId = -1;
            this.targetMarkerId = -1;
            this.questName = questName;
            this.popupTpl = "";
            this.changed = false;
            this.fixed = false;
        }

        Task.prototype = {
            constructor: Task,
            init: init,
            initFromObject: initFromObject,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            initFromMarker: initFromMarker,
            initFromTargetMarker: initFromTargetMarker,
            updateMarker: updateMarker,
            updateTargetMarker: updateTargetMarker,
            getMarkerSrc: getMarkerSrc,
            change: change,
            preview: preview,
            check: check,
            upload: upload,
            remove: remove,

            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getVersion: getVersion,
            getName: getName,
            setName: setName,
            getType: getType,
            setType: setType,
            getHtml: getHtml,
            setHtml: setHtml,
            getTargetHtml: getTargetHtml,
            setTargetHtml: setTargetHtml,
            getDescription: getDescription,
            getMarkerId: getMarkerId,
            setMarkerId: setMarkerId,
            getLat: getLat,
            getLon: getLon,
            getTargetMarkerId: getTargetMarkerId,
            setTargetMarkerId: setTargetMarkerId,
            getTargetLat: getTargetLat,
            setTargetLat: setTargetLat,
            getTargetLon: getTargetLon,
            setTargetLon: setTargetLon,
            getQuestName: getQuestName,
            setQuestName: setQuestName,
            setFixed: setFixed,
            getEnemy: getEnemy,
            setEnemy: setEnemy
        };

        return (Task);

        ////////////////

        function init(type) {
            this.html = new HtmlText(this.questName, this.name);
            if(type == MarkerType.FIGHT || type == MarkerType.INVISIBLE || type == MarkerType.QUIZ) {
                this.targetHtml = new HtmlText(this.questName, this.name);
            }
            if(type == MarkerType.FIGHT) {
                this.enemy = new Enemy();
            }
            this.type = type;
        }

        function initFromObject(taskObject) {
            $log.info("initFromObject", taskObject);
            this.remoteId = taskObject.remoteId;
            this.name = taskObject.name;
            this.type = taskObject.type;
            this.version = taskObject.version;

            this.markerId = taskObject.markerId;
            this.lon = taskObject.lon;
            this.lat = taskObject.lat;
            this.html = new HtmlText(taskObject.questName, taskObject.name);
            this.html.initFromObject(taskObject.html);

            if(taskObject.targetHtml) {
                this.targetMarkerId = taskObject.targetMarkerId;
                this.targetLon = taskObject.targetLon;
                this.targetLat = taskObject.targetLat;
                this.targetHtml = new HtmlText(taskObject.questName, taskObject.name);
                this.targetHtml.initFromObject(taskObject.targetHtml);
            }

            if(taskObject.enemy) {
                this.enemy = new Enemy();
                this.enemy.initFromObject(taskObject.enemy);
            }

            this.questName = taskObject.questName;
            this.popupTpl = taskObject.popupTpl;
            this.changed = taskObject.changed;
            this.fixed = taskObject.fixed;


            $log.info("initFromObject_success", this);
        }

        function getFromRemote() {
            $log.info("getFromRemote: ", this.remoteId);
            return BackendService.getTask(this.remoteId).then(success.bind(this), fail.bind(this));

            function success(remoteTask) {
                if (remoteTask) {
                    return this.initFromRemote(remoteTask).then(function (result) {
                        this.loaded = true;
                        $log.info("getFromRemote_success: ", this.remoteId);
                        return result;
                    }.bind(this));
                } else {
                    $log.info("getFromRemote_fail: ", this.remoteId);
                    return $q.reject();
                }
            }

            function fail(error) {
                $log.info("getFromRemote_fail: ", this.remoteId);
                return $q.reject(error);
            }
        }

        function initFromRemote(remoteTask) {
            $log.info("initFromRemote", remoteTask);

            this.remoteId = remoteTask.getId();
            this.version = remoteTask.getVersion();
            this.name = remoteTask.getName();
            this.type = MarkerType[remoteTask.getType()];

            var position = remoteTask.getPosition();
            this.lon = position.getLongitude();
            this.lat = position.getLatitude();

            var targetPos = remoteTask.getTargetPosition();
            if(targetPos) {
                this.targetLon = targetPos.getLongitude();
                this.targetLat = targetPos.getLatitude();
            }

            var promises = [];

            this.html = new HtmlText(this.questName, this.name);
            this.html.setRemoteId(remoteTask.getHtmlId());
            promises.push(this.html.getFromRemote());

            if(remoteTask.getFinishedHtmlId() > 0) {
                this.targetHtml = new HtmlText(this.questName, this.name);
                this.targetHtml.setRemoteId(remoteTask.getFinishedHtmlId());
                promises.push(this.targetHtml.getFromRemote());
            }

            if(remoteTask.getEnemyId() > 0) {
                this.enemy = new Enemy();
                this.enemy.setRemoteId(remoteTask.getEnemyId());
                promises.push(this.enemy.getFromRemote());
            }

            return $q.all(promises).then(function(result) {
                this.html.setQuestTitle(this.questName);
                this.html.setTaskTitle(this.name);
                if(this.targetHtml) {
                    this.targetHtml.setQuestTitle(this.questName);
                    this.targetHtml.setTaskTitle(this.name);
                }
                $log.info("initFromRemote_success", this);
                return result;
            }.bind(this));
        }

        function initFromMarker(marker) {
            $log.info("initFromMarker", marker);
            var coordinates = getMarkerCoords(marker);

            this.lon = coordinates[0];
            this.lat = coordinates[1];
            this.popupTpl = TaskService.getFightTpl(coordinates[0], coordinates[1]);
            $log.info("initFromMarker_success", this);
        }

        function initFromTargetMarker(marker) {
            $log.info("initFromTargetMarker", marker);
            var coordinates = getMarkerCoords(marker);

            this.targetLon = coordinates[0];
            this.targetLat = coordinates[1];
            $log.info("initFromTargetMarker_success", this);
        }


        function getMarkerCoords(marker) {
            var coord = marker.getGeometry().getCoordinates();
            return ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');
        }

        function updateMarker(marker) {
            this.initFromMarker(marker);
            this.change();
        }

        function updateTargetMarker(marker) {
            this.initFromTargetMarker(marker);
            this.change();
        }

        function change() {
            AuthenticationService.getUser().backup();
            this.changed = true;
        }

        function preview(evt) {
            TaskService.showPreview(this.html, evt);
        }

        function check(treePart, errors) {
            var nameMissing = (this.name == "");
            var enemyMissing = (this.type == MarkerType.FIGHT && this.enemy == null);
            var exerciseMissing = (this.type == MarkerType.QUIZ && $.isEmptyObject(this.html.getAnswers()));

            if(nameMissing || enemyMissing || exerciseMissing) {
                errors.addTaskError(treePart, nameMissing, enemyMissing, exerciseMissing);
            }
        }

        function upload() {
            // $log.info("upload", this);

            this.remoteTask = BackendService.createRemoteTask(this);

            var promises = [];

            promises.push($q.when(this.html.upload()));
            if (this.targetHtml) {
                promises.push($q.when(this.targetHtml.upload()));
            }
            if(this.enemy){
                promises.push($q.when(this.enemy.upload()));
            }

            if (this.remoteId < 1 || this.changed) {
                return $q.all(promises).then(uploadTask.bind(this));
            } else {
                return $q.all(promises).then(returnTask.bind(this))
            }

            function uploadTask(results) {
                this.remoteTask.setHtmlId(results[0]);
                if (results[1]) {
                    this.remoteTask.setFinishedHtmlId(results[1]);
                    if(this.type == MarkerType.FIGHT) {
                        this.remoteTask.setEnemyId(results[2]);
                    }
                }

                if (this.remoteId > 0 && this.changed) {
                    $log.info("upload - Updating: ", this.remoteTask);
                    return BackendService.updateTask(this.remoteTask).then(function (result) {
                        this.version = result.getVersion();
                        $log.info("upload_success: ", this);
                        return result;
                    }.bind(this), function (error) {
                        alert(error);
                        return $q.reject();
                    });

                } else {
                    $log.info("upload - Adding: ", this.remoteTask);
                    return BackendService.addTask(this.remoteTask).then(function (result) {
                        this.remoteId = result.getId();
                        this.version = result.getVersion();
                        $log.info("upload_success: ", this);
                        return result;
                    }.bind(this));
                }
            }

            function returnTask() {
                $log.info("upload_success: ", this);
                return this.remoteTask;
            }
        }

        function remove() {
            $log.info("remove: ", this);
            return BackendService.deleteTask(this.remoteId).then(function() {
                $log.info("remove_success: ", this);
                var promises = [];
                promises.push(this.html.remove());
                if(this.targetHtml) {
                    promises.push(this.targetHtml.remove());
                }

                return $q.all(promises);
            }.bind(this));
        }

        function getMarkerSrc() {
            return TaskService.getMarkerSrc(this.type);
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function setRemoteId(value) {
            this.remoteId = value;
        }

        function getVersion() {
            return this.version;
        }

        function getName() {
            return this.name;
        }

        function setName(value) {
            this.name = value;
        }

        function getType() {
            return this.type;
        }

        function setType(value) {
            this.type = value;
        }

        function getHtml() {
            return this.html;
        }

        function setHtml(value) {
            this.html = value;
        }

        function getTargetHtml() {
            return this.targetHtml;
        }

        function setTargetHtml(value) {
            this.targetHtml = value;
        }

        function getDescription() {
            return this.description;
        }

        function getMarkerId() {
            return this.markerId;
        }

        function setMarkerId(value) {
            this.markerId = value;
        }

        function getLat() {
            return this.lat;
        }

        function getLon() {
           return this.lon;
        }

        function getTargetMarkerId() {
            return this.targetMarkerId;
        }

        function setTargetMarkerId(value) {
            this.targetMarkerId = value;
        }

        function getTargetLat() {
            return this.targetLat;
        }

        function setTargetLat(value) {
            this.targetLat = value;
        }

        function getTargetLon() {
            return this.targetLon;
        }

        function setTargetLon(value) {
            this.targetLon = value;
        }

        function getQuestName() {
            return this.questName;
        }

        function setQuestName(value) {
            this.questName = value;
        }

        function setFixed(value) {
            this.fixed = value;
        }

        function getEnemy() {
            return this.enemy;
        }

        function setEnemy(value) {
            this.enemy = value;
        }
    }

})();