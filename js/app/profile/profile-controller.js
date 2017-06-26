/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$log", "$q", "$state", "$mdDialog", "QuestService", "user"];

    /* @ngInject */
    function ProfileController($log, $q, $state, $mdDialog, QuestService, user) {
        var vm = this;
        vm.user = user;
        vm.currentQuest = null;

        vm.newQuest = newQuest;
        vm.editQuest = editQuest;
        vm.editCurrentQuest = editCurrentQuest;
        vm.saveCurrentQuest = saveCurrentQuest;
        vm.clearCurrentQuest = clearCurrentQuest;
        vm.deleteQuest = deleteQuest;
        vm.deleteCurrentQuest = deleteCurrentQuest;
        vm.showCollection = showCollection;

        activate();

        ////////////////

        function activate() {
            vm.currentQuest = user.getCurrentQuest();
        }

        function showCollection() {
            $state.go("app.collection");
        }

        function newQuest() {
            user.clearCurrentQuest();
            $state.go("app.map");
        }

        function editQuest(quest) {
            if(vm.currentQuest) {
                editDifferentQuest().then(function() {
                    loadMap(quest);
                })
            } else {
                loadMap(quest);
            }

        }

        function loadMap(quest) {
            $q.when(loadQuest(quest)).then(function() {
                user.setCurrentQuest(quest);
                quest.setEditing(true);
                $state.go("app.map");
            });
        }

        function editCurrentQuest() {
            $state.go("app.map");
        }

        function saveCurrentQuest() {
            vm.saveQuestPromise = QuestService.saveQuest(user, vm.currentQuest);
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
            QuestService.setTreePartId(1);
            vm.currentQuest = null;
        }

        function deleteQuest(evt, quest) {

            var confirm = $mdDialog.confirm()
                .title('Delete quest')
                .htmlContent('Are you sure you want to delete Quest <b>' + quest.getName() + '</b> ?')
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok('Confirm')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                user.deleteQuest(quest);
            });
        }

        function deleteCurrentQuest(evt) {
            var confirm = $mdDialog.confirm()
                .title('Delete quest in development')
                .htmlContent('Are you sure you want to the quest you are editing? All changes will be lost.')
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok('Confirm')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                clearCurrentQuest();
            });
        }

        function editDifferentQuest(evt) {
            var confirm = $mdDialog.confirm()
                .title('Edit different quest')
                .htmlContent('Are you sure you want to edit a different quest? All changes to your current quest will be lost.')
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok('Confirm')
                .cancel('Cancel');

            return $mdDialog.show(confirm);
        }
    }

})();