/**
 * Created by armin on 19.01.16.
 */

map.controller("createTaskController", ["$scope", "$modalInstance", "MARKERS", function($scope, $modalInstance, MARKERS) {
    $scope.markers = MARKERS;

    $scope.name = "";
    $scope.description = "";
    $scope.content = "";
    $scope.type;


    $scope.error = false;

    $scope.markerBtnStyle = {
        "width": (100 / Object.keys($scope.markers).length / 2) + '%',
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