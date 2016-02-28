/**
 * Created by armin on 19.01.16.
 */

map.controller("TaskController", function($scope, $modalInstance, MarkerType, task) {
    $scope.types = MarkerType;

    $scope.name = task.name;
    $scope.description = task.description;
    $scope.content = task.html.content;
    $scope.type = task.type;

    $scope.error = false;

    $scope.markerBtnStyle = {
        "width": (100 / Object.keys($scope.types).length / 2) + '%',
        "display": "inline-block",
        "vertical-align": "top"
    };

    $scope.markerSelected = function(type, index) {
        $scope.activeType = type;
        $scope.selectedIndex = index;
        console.log($scope.content);
    };

    $scope.getMarkerIconSrc = function(type) {
        return task.getMarkerSrc(type)
    };

    $scope.ok = function() {
        if(!$scope.activeType) {
            $scope.error = true;
            return;
        }

        $modalInstance.close({
            type: $scope.activeType,
            name: $scope.name,
            description: $scope.description,
            content: $scope.content
        });
    };

    $scope.close = function() {
        $modalInstance.dismiss('cancel')
    };
});