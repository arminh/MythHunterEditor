/**
 * Created by armin on 04.02.16.
 */

task.factory('Task', function($modal, $q, AuthenticationService, mapService, MARKERS, HTMLText) {

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

    Task.prototype.init = function(config) {
        if(config.id != undefined) this.id = config.id;
        if(config.name != undefined) this.name = config.name;
        if(config.description != undefined) this.description = config.description;
        if(config.content != undefined) this.html.content = config.content;
        if(config.type != undefined) this.type = config.type;
        if(config.lon != undefined) this.lon = config.lon;
        if(config.lat != undefined) this.lat = config.lat;
        if(config.popupTpl != undefined) this.popupTpl = config.popupTpl;
        if(config.markerId != undefined) this.markerId = config.markerId;
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

    Task.prototype.updateMarker = function(marker) {

        this.initFromMarker(marker);
        this.change();
    };

    Task.prototype.initFromMarker = function(marker) {
        var coord = marker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

        this.lon = coordinates[0];
        this.lat = coordinates[1];
        this.popupTpl = fightTpl(coordinates[0], coordinates[1]);
    };

    Task.prototype.change = function() {
        console.log("Task changed");
        AuthenticationService.getUser().backup();
        this.changed = true;
    };

    Task.prototype.upload = function() {
        var deferred = $q.defer();

        this.remoteTask = null;

        switch(this.type) {
            case "fight":
                this.remoteTask = new backend_com_wsdl_fightMarker();
                break;
            case "quiz":
                this.remoteTask = new backend_com_wsdl_quizMarker();
                break;
            case "info":
            case "start":
                this.remoteTask = new backend_com_wsdl_infoMarker();
                break;
        }

        this.remoteTask.setName(this.name);
        this.remoteTask.setPosition(mapPosition(this.lon, this.lat));

        if(this.html.id == -1 || this.html.changed == true) {
            this.html.upload().then(function(id) {
                this.remoteTask.setHtmlId(id);
                this.finishUpload(deferred);
            }.bind(this));
        } else {
            this.finishUpload(deferred);
        }

        return deferred.promise;
    };

    Task.prototype.finishUpload = function(promise) {
        console.log(this.remoteTask);
        switch(this.type) {
            case "fight":
                backend.addFightMarker(function(result) {
                        this.remoteId = result.getReturn().getId();
                        promise.resolve(result.getReturn());
                }.bind(this),
                    function(error) { promise.reject(error) }, this.remoteTask);
                break;
            case "quiz":
                backend.addQuizMarker(function(result) {
                        this.remoteId = result.getReturn().getId();
                        promise.resolve(result.getReturn());
                    }.bind(this),
                    function(error) { promise.reject(error) }, this.remoteTask);
                break;
            case "start":
            case "info":
                backend.addInfoMarker(function(result) {
                        this.remoteId = result.getReturn().getId();
                        promise.resolve(result.getReturn());
                    }.bind(this),
                    function(error) { promise.reject(error) }, this.remoteTask);
                break;
        }
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

    var mapPosition = function(lon, lat) {
        var pos = new backend_com_wsdl_mapPosition();
        pos.setLongitude(lon);
        pos.setLatitude(lat);
        return pos;
    };

    function fightTpl(lon, lat) {
        return "<div><p>lon: " + lon + "</p><p>lat: " + lat + "</p></div>";
    }

    return (Task);
});