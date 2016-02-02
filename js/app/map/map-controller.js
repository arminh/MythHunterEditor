/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", ["$scope", "$modal", "mapService", "backendService", "MARKERS", "Task", "HTMLText", function($scope, $modal, mapService, backendService, MARKERS, Task, HTMLText) {

    $scope.mapSearchQuery = "";
    $scope.drawing = false;

    var activeMarker = "";
    var currentTask = null;

    $scope.continueDrawing = false;

    $scope.tasks = [];
    var taskId = 0;

    $scope.showQuestline = false;

    $scope.sortableOptions = {
        axis: 'y',
        cancel: ".unsortable, input",
        start: function(e, ui){
            ui.placeholder.height(ui.item.height());
        }
        //containment: "#map-quests"
    };

    $scope.toggleQuestline = function() {
        if($scope.showQuestline) {
            $scope.showQuestline = false;
        } else {
            $scope.showQuestline = true;
        }
    };


    var popupContainer = document.getElementById('popup');
    var popupContent = $("#popupContent");
    var popupCloser = $("#popupCloser");

    mapService.init("mapView");
    mapService.addPopupOverlay(popupContainer);

    popupCloser.on("click", function() {
        mapService.hideOverlay();
        popupCloser.blur();
        return false;
    });

    var newTask = function() {
        var task = new Task();
        task.html = new HTMLText();
        task.id = taskId;
        return task;
    };

    var addTask = function(task) {
        $scope.tasks[task.id] = task;
        taskId++;
    };

    $scope.toggleMarker = function(type) {
        if(activeMarker == type) {
            activeMarker = "";
            $scope.continueDrawing = false;
            $scope.drawing = false;

            mapService.stopDrawing();
        } else {
            mapService.stopDrawing();
            activeMarker = type;
            $scope.continueDrawing = true;
            $scope.drawing = true;

            currentTask = newTask();
            currentTask.type = activeMarker;
            mapService.drawMarker(currentTask.id, getMarkerSrc(activeMarker));
        }
    };

    $scope.toggleRemove = function() {
        mapService.toggleRemove();
    };


    $scope.search = function(query) {
        return mapService.search(query);
    };

    $scope.goto = function (location) {
        if(location) {
            mapService.setCenter(parseFloat(location.lon), parseFloat(location.lat), 17);
        }
    };

    $scope.searchAndGo = function(query) {
        mapService.search(query).then(function(location) {
            if(location[0]) {
                mapService.setCenter(parseFloat(location[0].lon), parseFloat(location[0].lat), 17);
            }
        });
    };

    $scope.newTask = function() {
        currentTask = newTask();

        var modal = openTaskDialog(currentTask);

        modal.then(function (result) {
            currentTask.name = result.name;
            currentTask.description = result.description;
            currentTask.html = new HTMLText(result.content);
            currentTask.type = result.type;

            mapService.drawMarker(currentTask.id, getMarkerSrc(currentTask.type));
            $scope.drawing = true;
        });
    };

    $scope.editTask = function(task) {
        var modal = openTaskDialog(task);

        modal.then(function (result) {
            task.name = result.name;
            task.description = result.description;
            task.html = new HTMLText(result.content);
            task.type = result.type;

            var marker = mapService.getMarkerById(task.markerId);
            marker.iconSrc = getMarkerSrc(task.type);
            mapService.refreshMap();
        });
    };

    var openTaskDialog = function(task) {
        var modalInstance = $modal.open({
            animation: true,
            backdrop: 'static',
            size: "lg",
            templateUrl: 'js/app/task/task.tpl.html',
            controller: 'createTaskController',
            resolve: {
                task: function () {
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
            default:
                return "";
        }
    };

    function fightTpl(lon, lat) {
        return "<div><p>lon: " + lon + "</p><p>lat: " + lat + "</p></div>";
    }

    $scope.$on('markerAdded', function(evt, args) {

        var markerId = args.markerId;
        var marker = mapService.getMarkerById(markerId);

        var coord = marker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

        currentTask.init({
            lon: coordinates[0],
            lat: coordinates[1],
            popupTpl: fightTpl(coordinates[0], coordinates[1]),
            markerId: markerId
        });
        addTask(currentTask);
        $scope.$apply();


        if($scope.continueDrawing) {
            currentTask = newTask();
            currentTask.type = activeMarker;
            mapService.drawMarker(currentTask.id, getMarkerSrc(activeMarker));
        } else {
            $scope.drawing = false;
            $scope.$apply();
        }

    });

    $scope.$on('markerChanged', function(evt, args) {


        var changedMarker = args.marker;
        var changedMarkerId = changedMarker.getId();

        var coord = changedMarker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');
        console.log(coordinates);

        for(var i = 0; i < $scope.tasks.length; i++) {
            if($scope.tasks[i].id == changedMarkerId) {
                $scope.tasks[i].lon = coordinates[0];
                $scope.tasks[i].lat = coordinates[1];
                $scope.tasks[i].popupTpl = fightTpl(coordinates[0], coordinates[1]);
                $scope.$apply();
            }
        }
    });

    $scope.$on('markerRemoved', function(evt, args) {
        var delMarker = args.marker;
        var delMarkerId = delMarker.getId();

        for(var i = 0; i < $scope.tasks.length; i++) {
            if($scope.tasks[i].id == delMarkerId) {
                $scope.tasks.splice(i, 1);
                $scope.$apply();
            }
        }
    });

    $scope.$on('markerClicked', function(evt, args) {
        console.log("Marker clicked");
        var clickedMarker = args.marker;
        var clickedMarkerId = clickedMarker.getId();


        for(var i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].id == clickedMarkerId) {
                popupContent.html($scope.tasks[i].popupTpl);
                mapService.showOverlay(clickedMarker.getGeometry().getCoordinates());
                //mapService.hideOverlay();
            }
        }


    });

    $scope.save = function() {

        for(var i=0; i<$scope.tasks.length; i++) {
            backendService.addTask($scope.tasks[i]).then(function(result) {
            });
        }
        console.log($scope.tasks);
    }

}]);