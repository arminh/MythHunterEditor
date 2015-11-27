/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", ["$scope", "mapService", function($scope, mapService) {

    mapService.init("mapView");

    $scope.activeCursor = "default";

    $scope.toggleMarker = function(type) {
        mapService.toggleMarker(type);
    };

    $scope.goto = function(query) {
        mapService.search(query, searchSuccess, searchFail);
    }


    function searchSuccess(response) {
        mapService.setCenter(parseFloat(response[0].lon), parseFloat(response[0].lat), 17)
    }

    function searchFail(response) {

    }

}]);