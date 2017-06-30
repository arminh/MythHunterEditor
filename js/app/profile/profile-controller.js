/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$log", "$q", "$state", "$translate", "$mdDialog", "QuestService", "user"];

    /* @ngInject */
    function ProfileController($log, $q, $state, $translate, $mdDialog, QuestService, user) {
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

        function newQuest(evt) {
            if(vm.currentQuest) {
                editDifferentQuest(evt).then(function() {
                    showCreateQuestDialog().then(gotoMap);
                });
            } else {
                showCreateQuestDialog().then(gotoMap);
            }
        }

        function gotoMap() {
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

        function showCreateQuestDialog() {
            return $mdDialog.show({
                templateUrl: 'js/app/profile/create-quest-dialog/create-quest-dialog.tpl.html',
                controller: 'CreateQuestDialogController',
                controllerAs: "createQuest"
            });
        }

        function deleteQuest(evt, quest) {

            var confirm = $mdDialog.confirm()
                .title($translate.instant("TITLE_DELETE_QUEST"))
                .htmlContent($translate.instant("TEXT_DELETE_QUEST"))
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok($translate.instant("BUTTON_CONFIRM"))
                .cancel($translate.instant("BUTTON_CANCEL"));

            $mdDialog.show(confirm).then(function() {
                user.deleteQuest(quest);
            });
        }

        function deleteCurrentQuest(evt) {
            var confirm = $mdDialog.confirm()
                .title('TITLE_DELETE_QUEST_DEV')
                .htmlContent('TEXT_DELETE_QUEST_DEV')
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok($translate.instant("BUTTON_CONFIRM"))
                .cancel($translate.instant("BUTTON_CANCEL"));

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