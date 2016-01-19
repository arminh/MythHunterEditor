/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", ["$scope", "mapService", "ngDialog", function($scope, mapService, ngDialog) {

    $scope.mapSearchQuery = "";

    $scope.markers = [];

    $scope.showQuestline = false;

    $scope.sortableOptions = {
        axis: 'y',
        cancel: ".unsortable",
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
        mapService.toggleMarker(type, getMarkerSrc(type));
    };

    $scope.toggleRemove = function() {
        mapService.toggleRemove();
    };


    $scope.search = function(query) {
        return mapService.search(query);
    };

    $scope.goto = function () {
        console.log($scope.selectedItem);
        mapService.setCenter(parseFloat($scope.selectedItem.lon), parseFloat($scope.selectedItem.lat), 17)
    };

    $scope.newQuest = function() {
        console.log("New Quest");
        ngDialog.open({ template: 'js/app/map/create-marker.tpl.html' });
    };

    var getMarkerSrc = function(type) {
        switch(type) {
            case "fight":
                return "media/fight_marker.png";
            case "quiz":
                return "media/quiz_marker.png";
            case "info":
                return "media/info_marker.png";
            default:
                return "";
        }
    };

    function fightTpl(lon, lat) {
        return "<div><p>lon: " + lon + "</p><p>lat: " + lat + "</p></div>";
    }

    $scope.$on('markerAdded', function(evt, args) {

        var marker = args.marker;
        console.log(marker.getId());

        var coord = marker.getGeometry().getCoordinates();
        var coordinates = ol.proj.transform([coord[0], coord[1]], 'EPSG:3857', 'EPSG:4326');

        $scope.markers.push({
            id: marker.getId(),
            type: marker.type,
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