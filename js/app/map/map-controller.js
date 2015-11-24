/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", ["$scope", "mapService", function($scope, mapService) {

    mapService.init("map");


    $scope.goto = function(query) {
        mapService.search(query, searchSuccess, searchFail);
    }


    function searchSuccess(response) {
        mapService.setCenter(response[0].lon, response[0].lat)
    }

    function searchFail(response) {

    }

}]);