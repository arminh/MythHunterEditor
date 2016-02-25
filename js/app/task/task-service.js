/**
 * Created by armin on 04.02.16.
 */

task.factory('Task', function($modal, $q, AuthenticationService, BackendService, mapService, MARKERS, HTMLText) {

    function Task() {
        this.remoteId = -1;
        this.name = "";
        this.html = new HTMLText(this);
        this.type = null;
        this.lon = null;
        this.lat = null;
        this.popupTpl = "";
        this.markerId = -1;
        this.changed = false;
        this.fixed = false;
    }

    Task.prototype = {
        constructor: Task
    };

    Task.prototype.create = function() {
        return openTaskDialog(this).then(function (result) {
            this.name = result.name;
            this.type = result.type;
            this.html.content = result.content;
        }.bind(this));
    };

    Task.prototype.edit = function() {
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

        }.bind(this));
    };

    Task.prototype.drawMarker = function() {
        return mapService.drawMarker(getMarkerSrc(this.type)).then(function(markerId) {
            var marker = mapService.getMarkerById(markerId);
            this.markerId = markerId;
            this.initFromMarker(marker);
        }.bind(this));
    };

    Task.prototype.addMarker = function() {
        return mapService.addMarker(this.lon, this.lat, getMarkerSrc(this.type));
    };

    Task.prototype.change = function() {
        console.log("Task changed");
        AuthenticationService.getUser().backup();
        this.changed = true;
        //this.quest.change();
    };

    Task.prototype.initFromObject = function(taskObject) {
        this.changed = taskObject.changed;
        this.fixed = taskObject.fixed;
        this.name = taskObject.name;
        this.lon = taskObject.lon;
        this.lat = taskObject.lat;
        this.popupTpl = taskObject.popupTpl;
        this.remoteId = taskObject.remoteId;
        this.type = taskObject.type;
        this.markerId = taskObject.markerId;

        var html = new HTMLText();
        html.initFromObject(taskObject.html);
        this.html = html;
    };

    Task.prototype.initFromRemote = function(remoteTask) {
        console.log(remoteTask);
        var deffered = $q.defer();

        this.remoteId = remoteTask.getId();
        this.name = remoteTask.getName();

        //this.type = remoteTask.getType();

        var position = remoteTask.getPosition();
        this.lon = position.getLongitude();
        this.lat = position.getLatitude();

        getHtmlFromRemote(remoteTask.getHtmlId()).then(function(result) {
            this.html = result;
            deffered.resolve(this);
        }.bind(this));

        return deffered.promise;
    };

    function getHtmlFromRemote(htmlId) {
        var deffered = $q.defer();

        BackendService.getHtml(htmlId).then(function(remoteHtml) {
            var html = new HTMLText();
            html.initFromRemote(remoteHtml);
            deffered.resolve(html);
        });

        return deffered.promise;
    }

    Task.prototype.initFromMarker = function(marker) {
        var coord = marker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

        this.lon = coordinates[0];
        this.lat = coordinates[1];
        this.popupTpl = fightTpl(coordinates[0], coordinates[1]);
    };

    Task.prototype.updateMarker = function(marker) {

        this.initFromMarker(marker);
        this.change();
    };

    Task.prototype.change = function() {
        console.log("Task changed");
        AuthenticationService.getUser().backup();
        this.changed = true;
    };

    Task.prototype.upload = function() {
        var deferred = $q.defer();

        if(this.remoteId != -1 && this.changed == false) {
            deferred.resolve(this);
        } else {
            this.remoteTask = BackendService.createRemoteTask(this);

            this.html.upload().then(function(id) {
                this.remoteTask.setHtmlId(id);
                BackendService.addTask(this.remoteTask).then(function(result) {
                    this.remoteId = result.getId();
                    deferred.resolve(result);
                }.bind(this));
            }.bind(this));
        }

        return deferred.promise;
    };

    var openTaskDialog = function(task) {
        var modalInstance = $modal.open({
            animation: true,
            backdrop: 'static',
            size: "lg",
            templateUrl: 'js/app/task/task.tpl.html',
            controller: 'TaskController',
            resolve: {
                task: function () {
                    console.log(task);
                    return task;
                }
            }
        });

        return modalInstance.result;
    };

    var getMarkerSrc = function(type) {
        switch(type) {
            case "fight":
                return MARKERS.fight.path;
            case "quiz":
                return MARKERS.quiz.path;
            case "info":
                return MARKERS.info.path;
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