/**
 * Created by armin on 04.02.16.
 */

task.factory('Task', function($q, HTMLText) {

    function Task() {
        this.id = -1;
        this.remoteId = -1;
        this.name = "";
        this.description = "";
        this.html = null;
        this.type = null;
        this.lon = null;
        this.lat = null;
        this.popupTpl = "";
        this.markerId = -1;
        this.changed = false;
    }

    Task.prototype = {
        constructor: Task
    };

    Task.prototype.init = function(config) {
        if(config.id != undefined) this.id = config.id;
        if(config.name != undefined) this.name = config.name;
        if(config.description != undefined) this.description = config.description;
        if(config.content != undefined) this.html = new HTMLText(config.content);
        if(config.type != undefined) this.type = config.type;
        if(config.lon != undefined) this.lon = config.lon;
        if(config.lat != undefined) this.lat = config.lat;
        if(config.popupTpl != undefined) this.popupTpl = config.popupTpl;
        if(config.markerId != undefined) this.markerId = config.markerId;
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
        switch(this.type) {
            case "fight":
                backend.addFightMarker(function(result) {
                        this.remoteId = result.getReturn().getId();
                        promise.resolve(this.remoteId);
                }.bind(this),
                    function(error) { promise.reject(error) }, this.remoteTask);
                break;
            case "quiz":
                backend.addQuizMarker(function(result) {
                        this.remoteId = result.getReturn().getId();
                        promise.resolve(this.remoteId);
                    }.bind(this),
                    function(error) { promise.reject(error) }, this.remoteTask);
                break;
            case "info":
                backend.addInfoMarker(function(result) {
                        this.remoteId = result.getReturn().getId();
                        promise.resolve(this.remoteId);
                    }.bind(this),
                    function(error) { promise.reject(error) }, this.remoteTask);
                break;
        }
    };

    var mapPosition = function(lon, lat) {
        var pos = new backend_com_wsdl_mapPosition();
        pos.setLongitude(lon);
        pos.setLatitude(lat);
        return pos;
    };

    return (Task);
});