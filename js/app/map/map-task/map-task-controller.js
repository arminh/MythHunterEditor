/**
 * Created by armin on 28.01.16.
 */

angular.module("map").controller("mapTaskController", ["$scope", "MapInteractionService", function($scope, MapInteraction) {

    $scope.focus = function(task) {
        MapInteraction.setCenter(parseFloat(task.lon), parseFloat(task.lat), 17);
    };

    $scope.$watch("task.name", function(newValue, oldValue) {
        if(newValue != oldValue) {
            $scope.task.change();
        }
    });
}]);