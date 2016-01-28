/**
 * Created by armin on 28.01.16.
 */

map.controller("mapTaskController", ["$scope", "mapService", function($scope, mapService) {

    $scope.focus = function(task) {
        mapService.setCenter(parseFloat(task.lon), parseFloat(task.lat), 17);
    };

    $scope.preview = function(task) {

    };
}]);