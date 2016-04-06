/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$log", "$scope", "$state", "ngDialog", "user"];

    /* @ngInject */
    function ProfileController($log, $scope, $state, ngDialog, user) {
        var vm = this;
        vm.user = user;
        vm.currentQuest = null;

        vm.newQuest = newQuest;
        vm.editQuest = editQuest;
        vm.clearCurrentQuest = clearCurrentQuest;
        vm.deleteQuest = deleteQuest;

        activate();

        ////////////////

        function activate() {
            vm.currentQuest = user.getCurrentQuest();
        }

        function newQuest() {
            user.clearCurrentQuest();
            $state.go("app.map");
        }

        function editQuest(quest) {
            user.setCurrentQuest(quest);
            $state.go("app.map");
        }

        function clearCurrentQuest() {
            user.clearCurrentQuest();
            $scope.currentQuest = null;
        }

        function deleteQuest(quest) {
            $scope.deleteQuestId = quest;
            ngDialog.openConfirm({
                scope: $scope,
                template: "js/app/dialogues/delete-quest-dialogue.tpl.html"
            }).then(
                function (confirm) {
                    user.deleteQuest(quest.remoteId);
                }, function (reject) {

                }
            );
        }
    }

})();