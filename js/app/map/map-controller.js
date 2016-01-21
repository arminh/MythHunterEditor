/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", ["$scope", "$modal", "mapService", "MARKERS", function($scope, $modal, mapService, MARKERS) {

    $scope.mapSearchQuery = "";

    $scope.markers = [];

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

    $scope.toggleMarker = function(type, name) {
        mapService.toggleMarker(type, name, getMarkerSrc(type));
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

    $scope.newQuest = function() {
        console.log("New Quest");
        var modalInstance = $modal.open({
            animation: true,
            size: "lg",
            templateUrl: 'js/app/map/create-marker.tpl.html',
            controller: 'createMarkerController'
        });

        modalInstance.result.then(function (task) {
            mapService.drawMarker(task.type, task.name, getMarkerSrc(task.type));
        });
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

        var marker = args.marker;
        console.log(marker);

        var coord = marker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

        $scope.markers.push({
            id: marker.getId(),
            type: marker.type,
            name: marker.name,
            lon: coordinates[0],
            lat: coordinates[1],
            popupTpl: fightTpl(coordinates[0], coordinates[1]),
            marker: marker
        });
        $scope.$apply();
    });

    $scope.$on('markerChanged', function(evt, args) {


        var changedMarker = args.marker;
        var changedMarkerId = changedMarker.getId();

        var coord = changedMarker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');
        console.log(coordinates);

        for(var i = 0; i < $scope.markers.length; i++) {
            if($scope.markers[i].id == changedMarkerId) {
                $scope.markers[i].lon = coordinates[0];
                $scope.markers[i].lat = coordinates[1];
                $scope.markers[i].popupTpl = fightTpl(coordinates[0], coordinates[1]);
                $scope.$apply();
            }
        }
    });

    $scope.$on('markerRemoved', function(evt, args) {
        var delMarker = args.marker;
        var delMarkerId = delMarker.getId();

        for(var i = 0; i < $scope.markers.length; i++) {
            if($scope.markers[i].id == delMarkerId) {
                $scope.markers.splice(i, 1);
                $scope.$apply();
            }
        }
    });

    $scope.$on('markerClicked', function(evt, args) {
        var clickedMarker = args.marker;
        var clickedMarkerId = clickedMarker.getId();

        for(var i = 0; i < $scope.markers.length; i++) {
            if ($scope.markers[i].id == clickedMarkerId) {
                popupContent.html($scope.markers[i].popupTpl);
                mapService.showOverlay(clickedMarker.getGeometry().getCoordinates());
                //mapService.hideOverlay();
            }
        }


    });

}]);