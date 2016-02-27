/**
 * Created by armin on 13.11.15.
 */

profile.controller("profileController", function($scope, $state, ngDialog, BackendService, AuthenticationService, user) {

    $scope.currentQuest = user.getCurrentQuest();

    $scope.newQuest = function() {
        user.currentQuest = null;
        $state.go("app.map");
    };

    $scope.editQuest = function(quest) {
        user.setCurrentQuest(quest);
        $state.go("app.map");
    };

    $scope.clearCurrentQuest =  function() {
        user.clearCurrentQuest();
        $scope.currentQuest = null;
    };

    $scope.deleteQuest = function(quest) {
        $scope.deleteQuestId = quest;
        ngDialog.openConfirm({
            scope: $scope,
            template: "js/app/dialogues/delete-quest-dialogue.tpl.html"

        }).then(function (confirm) {
            user.deleteQuest(quest.remoteId);
        }, function(reject) {

        });
    }
});