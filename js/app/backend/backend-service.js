/**
 * Created by armin on 02.02.16.
 */

app.factory('backendService', ["$q", function($q) {

    var backendService = {};

    var backend = new backend_com_wsdl_IBackend();
    backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

    var mapService = {};

    backendService.addTask = function(task) {
        var deferred = $q.defer();

        var remoteTask = null;

        switch(task.type) {
            case "fight":
                remoteTask = new backend_com_wsdl_fightMarker();
                break;
            case "quiz":
                remoteTask = new backend_com_wsdl_quizMarker();
                break;
            case "info":
                remoteTask = new backend_com_wsdl_infoMarker();
                break;
        }

        remoteTask.setName(task.name);
        remoteTask.setPosition(mapPosition(task.lon, task.lat));

        if(task.html.id == -1 || task.html.changed == true) {
            backendService.addHtml(task.html).then(function(result) {
                console.log(result);
                remoteTask.setHtmlId(result.getReturn().getId());
                task.html.id = result.getReturn().getId();

                switch(task.type) {
                    case "fight":
                        backend.addFightMarker(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, remoteTask);
                        break;
                    case "quiz":
                        backend.addQuizMarker(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, remoteTask);
                        break;
                    case "info":
                        backend.addInfoMarker(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, remoteTask);
                        break;
                }
            });
        }

        return deferred.promise;
    };

    var mapPosition = function(lon, lat) {
        var pos = new backend_com_wsdl_mapPosition();
        pos.setLongitude(lon);
        pos.setLatitude(lat);
        return pos;
    };

    backendService.addHtml = function(html) {
        var deferred = $q.defer();

        var remoteHtml = new backend_com_wsdl_htmlObject();
        remoteHtml.setHtml(html.content);

        if(html.id == -1) {
            backend.addHtml(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, remoteHtml);
        } else {
            //backend.updateHtml(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, remoteHtml);
        }

        return deferred.promise;
    };

    backendService.getHTMLText = function(id) {
        var deferred = $q.defer();

        backend.getHtml(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, id);

        return deferred.promise;
    };

    backendService.addPlayer = function() {
        var deferred = $q.defer();

        var player = new backend_com_wsdl_player();

        backend.addPlayer(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, player);

        return deferred.promise;
    };


    return backendService;
}]);
