/**
 * Created by armin on 19.01.16.
 */

map.controller("QuestController", function($scope, $state, $modalInstance, HtmlTools) {

    $scope.name = "";
    $scope.quest_content = "";
    $scope.task_content = "";

    $scope.separateDescription = false;

    $scope.ok = function() {

        HtmlTools.encloseContent($scope.quest_content).then(function(quest_content) {
            if(!$scope.separateDescription) {
                closeModal(quest_content, quest_content);
            } else {
                HtmlTools.encloseContent($scope.task_content).then(function(task_content) {
                    closeModal(quest_content, task_content);
                });
            }
        });


    };

    function closeModal(quest_content, task_content) {
        console.log(quest_content);
        console.log(task_content);
        $modalInstance.close({
            name: $scope.name,
            quest_content: quest_content,
            task_content: task_content
        });
    }

    $scope.close = function() {
        $modalInstance.dismiss('cancel');
    };
});