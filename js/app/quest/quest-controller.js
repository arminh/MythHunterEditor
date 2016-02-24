/**
 * Created by armin on 19.01.16.
 */

map.controller("QuestController", ["$scope", "$state", "$modalInstance", function($scope, $state, $modalInstance) {

    $scope.name = "";
    $scope.quest_content = "";
    $scope.task_content = "";

    $scope.separateDescription = false;

    $scope.ok = function() {

        if(!$scope.separateDescription) {
            $scope.task_content = $scope.quest_content;
        }

        $modalInstance.close({
            name: $scope.name,
            quest_content: $scope.quest_content,
            task_content: $scope.task_content
        });
    };

    $scope.close = function() {
        $modalInstance.dismiss('cancel');
    };
}]);