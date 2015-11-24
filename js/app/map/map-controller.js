/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", ["$scope", "mapService", function($scope, mapService) {

    mapService.init("map");
    mapService.search("Jakominiplatz");
}]);