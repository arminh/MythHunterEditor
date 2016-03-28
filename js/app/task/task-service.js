/**
 * Created by armin on 04.02.16.
 */

task.factory('Task', function($modal, $q, AuthenticationService, BackendService, mapService, MarkerType, HtmlText) {

    function Task(questName) {
        this.id = 0;
        this.remoteId = -1;
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
        getMarkerSrc: getMarkerSrc,
        change: change,
        upload: upload,
        remove: remove
    };

    function create() {
        return openTaskDialog(this).then(function (result) {
            this.name = result.name;
            this.type = result.type;
            this.html.content = result.content;
            this.html.answers = result.answers;
        }.bind(this));
    }

    function edit() {
        return openTaskDialog(this).then(function (result) {
            if(this.name != result.name) {
                this.name = result.name;
                this.change();
            }
            if(this.type != result.type) {
                this.type = result.type;
                var marker = mapService.getMarkerById(this.markerId);
                marker.iconSrc = getMarkerSrc(this.type);
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

        }.bind(this));
    }

    function drawMarker() {
        return mapService.drawMarker(getMarkerSrc(this.type)).then(function(markerId) {
            var marker = mapService.getMarkerById(markerId);
            this.markerId = markerId;
            this.initFromMarker(marker);
        }.bind(this));
    }

    function addMarker() {
        return mapService.addMarker(this.lon, this.lat, getMarkerSrc(this.type));
    }

    function initFromObject(taskObject) {
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
    }

    function initFromRemote(remoteTask) {
        var deffered = $q.defer();

        this.remoteId = remoteTask.getId();
        this.version = remoteTask.getVersion();
        this.name = remoteTask.getName();
        this.type = MarkerType[remoteTask.getType()];

        var position = remoteTask.getPosition();
        this.lon = position.getLongitude();
        this.lat = position.getLatitude();

        getHtmlFromRemote(remoteTask.getHtmlId()).then(function(result) {
            this.html = result;
            deffered.resolve(this);
        }.bind(this));

        return deffered.promise;
    }

    function getHtmlFromRemote(htmlId) {
        var deffered = $q.defer();

        BackendService.getHtml(htmlId).then(function(remoteHtml) {
            var html = new HtmlText();
            html.initFromRemote(remoteHtml);
            deffered.resolve(html);
        });

        return deffered.promise;
    }

    function initFromMarker(marker) {
        var coord = marker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

        this.lon = coordinates[0];
        this.lat = coordinates[1];
        this.popupTpl = fightTpl(coordinates[0], coordinates[1]);
    }

    Task.prototype.updateMarker = function(marker) {

        this.initFromMarker(marker);
        this.change();
    };

    function change() {
        AuthenticationService.getUser().backup();
        this.changed = true;
        //this.quest.change();
    }

    function upload() {
        var deferred = $q.defer();
        this.remoteTask = BackendService.createRemoteTask(this);

        if(this.remoteId < 1 || this.changed) {
            $q.when(this.html.upload(), function(id) {
                this.remoteTask.setHtmlId(id);
                if(this.remoteId != -1 && this.changed) {
                    BackendService.updateTask(this.remoteTask).then(function(result) {
                        this.version = result.getVersion();
                        deferred.resolve(this.remoteId);
                    }.bind(this), function(error) {
                        alert(error);
                        deferred.reject(error);
                    });

                } else {
                    BackendService.addTask(this.remoteTask).then(function(result) {
                        this.remoteId = result.getId();
                        this.version = result.getVersion();
                        deferred.resolve(result.getId());
                    }.bind(this));
                }

            }.bind(this));
        } else {
            $q.when(this.html.upload(), function() {
                deferred.resolve(this.remoteId);
            }.bind(this))
        }

        return deferred.promise;
    }

    function remove() {
        return BackendService.deleteTask(this.remoteId);
    }

    var openTaskDialog = function(task) {
        var modalInstance = $modal.open({
            animation: true,
            backdrop: 'static',
            size: "lg",
            templateUrl: 'js/app/task/task.tpl.html',
            controller: 'TaskController',
            resolve: {
                task: function () {
                    return task;
                }
            }
        });

        return modalInstance.result;
    };

    function getMarkerSrc(type) {
        switch(type) {
            case MarkerType.FIGHT:
                return "media/fight_marker.png";
            case MarkerType.QUIZ:
                return "media/quiz_marker.png";
            case MarkerType.INFO:
                return "media/info_marker.png";
            case "start":
                return "media/start_marker.png";
            default:
                return "";
        }
    };

    function fightTpl(lon, lat) {
        return "<div><p>lon: " + lon + "</p><p>lat: " + lat + "</p></div>";
    }

    return (Task);
});