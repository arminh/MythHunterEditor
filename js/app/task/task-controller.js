/**
 * Created by armin on 19.01.16.
 */

map.controller("TaskController", function($scope, $modalInstance, MarkerType, HtmlTools, task) {
    $scope.types = MarkerType;

    $scope.name = task.name;
    $scope.description = task.description;
    $scope.content = HtmlTools.retrieveContent(task.html.content);
    console.log($scope.content);
    $scope.activeType = task.type;

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
        } else {
            HtmlTools.encloseContent($scope.content).then(function(result) {
                console.log(result);
                $modalInstance.close({
                    type: $scope.activeType,
                    name: $scope.name,
                    description: $scope.description,
                    content: result
                });
            });
        }
    };

    $scope.close = function() {
        $modalInstance.dismiss('cancel')
    };
});