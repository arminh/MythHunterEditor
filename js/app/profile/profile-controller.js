/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$log", "$q", "$scope", "$state", "ngDialog", "user"];

    /* @ngInject */
    function ProfileController($log, $q, $scope, $state, ngDialog, user) {
        var vm = this;
        vm.user = user;
        vm.currentQuest = null;

        vm.newQuest = newQuest;
        vm.editQuest = editQuest;
        vm.clearCurrentQuest = clearCurrentQuest;
        vm.deleteQuest = deleteQuest;
        vm.newCard = newCard;

        activate();

        ////////////////

        function activate() {
            vm.currentQuest = user.getCurrentQuest();
        }

        function newCard() {
            $state.go("app.card");
        }

        function newQuest() {
            user.clearCurrentQuest();
            $state.go("app.map");
        }

        function editQuest(quest) {
            $q.when(loadQuest(quest)).then(function() {
                user.setCurrentQuest(quest);
                $state.go("app.map");
            });
        }

        function loadQuest(quest) {
            if(quest.getLoaded()) {
                return quest;
            } else {
                return quest.load();
            }
        }

        function clearCurrentQuest() {
            user.clearCurrentQuest();
            vm.currentQuest = null;
        }

        function deleteQuest(quest) {

            $scope.deleteQuest = quest;
            ngDialog.openConfirm({
                scope: $scope,
                template: "js/app/quest/delete-quest-dialogue.tpl.html"
            }).then(
                function (confirm) {
                    user.deleteQuest(quest);
                }, function (reject) {

                }
            );
        }
    }

})();