/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", ["$scope", "$modal", "$q", "mapService", "backendService", "MARKERS", "MainService", "Task", function($scope, $modal, $q, mapService, backendService, MARKERS, MainService, Task) {

    var user = MainService.getUser();
    var quest = null;
    $scope.startTask = null;

    $q.when(user.getCurrentQuest()).then(function(result) {
        quest = result;
        this.tasks = quest.tasks;
        this.startTask = quest.startTask;
    }.bind($scope));

    $scope.drawing = false;

    var activeMarker = "";
    var currentTask = null;

    $scope.continueDrawing = false;
    $scope.showQuestline = false;


    $scope.sortableOptions = {
        axis: 'y',
        cancel: ".fixed, input",
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
            drawMarker();

        }
    };

    function drawMarker() {
        var task = new Task();
        task.type = activeMarker;
        task.drawMarker().then(function() {
            quest.addTask(task);
            if(this.continueDrawing) {
                drawMarker();
            }
        }.bind($scope));
    }

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

    $scope.newTask = function() {
        var task = new Task();
        task.create().then(function() {
            task.drawMarker().then(function()
            {
                quest.addTask(task);
            });
        });
    };

    $scope.editTask = function(task) {
        task.edit();
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

/*    $scope.$on('markerAdded', function(evt, args) {

        var markerId = args.markerId;
        var marker = mapService.getMarkerById(markerId);

        var coord = marker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

        var task = new Task();

        task.init({
            lon: coordinates[0],
            lat: coordinates[1],
            popupTpl: fightTpl(coordinates[0], coordinates[1]),
            markerId: markerId
        });
        quest.addTask(task);
        $scope.$apply();


        if($scope.continueDrawing) {
            mapService.drawMarker(getMarkerSrc(activeMarker));
        } else {
            $scope.drawing = false;
            $scope.$apply();
        }

    });*/

    $scope.$on('markerChanged', function(evt, args) {

        var changedMarker = args.marker;
        var changedMarkerId = changedMarker.getId();

        var coord = changedMarker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

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
        user.uploadQuest();
    }

}]);