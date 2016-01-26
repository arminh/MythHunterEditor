/**
 * Created by armin on 19.01.16.
 */

map.controller("createTaskController", ["$scope", "$modalInstance", "MARKERS", "task", function($scope, $modalInstance, MARKERS, task) {
    $scope.tasks = MARKERS;

    $scope.name = task.name;
    $scope.description = task.description;
    $scope.content = task.content;
    $scope.type = task.type;

    $scope.error = false;

    $scope.markerBtnStyle = {
        "width": (100 / Object.keys($scope.tasks).length / 2) + '%',
        "display": "inline-block",
        "vertical-align": "top"
    };

    $scope.markerSelected = function(type, index) {
        $scope.type = type;
        $scope.selectedIndex = index;
    };

    $scope.ok = function() {

        $modalInstance.close({
            type: $scope.type,
            name: $scope.name,
            description: $scope.description,
            content: $scope.content
        });
    }

    $scope.close = function() {
        $modalInstance.dismiss('cancel')
    };
}]);