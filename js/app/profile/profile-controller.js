/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$log", "$q", "$state", "$translate", "$mdDialog", "QuestService", "user", "CreationTutorialFlags"];

    /* @ngInject */
    function ProfileController($log, $q, $state, $translate, $mdDialog, QuestService, user, CreationTutorialFlags) {
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
            if(vm.currentQuest) {
                var currentQuestId = vm.currentQuest.getRemoteId();
                if(currentQuestId > 0) {
                    user.setEditing(currentQuestId);
                }
            }

        }

        function showCollection() {
            $state.go("app.collection");
        }

        function newQuest(evt) {
            if(vm.currentQuest) {
                editDifferentQuest(evt).then(function() {
                    showCreateQuestDialog().then(createQuest);
                });
            } else {
                showCreateQuestDialog().then(createQuest);
            }
        }

        function createQuest(withTutorial) {
            user.clearCurrentQuest();
            var quest = user.createQuest();
            quest.init("New Quest");
            quest.setLoaded(true);
            $state.go("app.quest", {
                quest: quest,
                edit: false,
                tutorial: withTutorial
            });
        }

        function editQuest(quest) {
            if(vm.currentQuest) {

                editDifferentQuest().then(function() {
                    var currentQuestId = vm.currentQuest.getRemoteId();
                    if(currentQuestId > 0) {
                        user.clearEditing(currentQuestId)
                    }
                    loadMap(quest);
                })
            } else {
                loadMap(quest);
            }

        }

        function loadMap(quest) {
            $q.when(loadQuest(quest)).then(function() {
                quest.setEditing(true);
                user.setCurrentQuest(angular.copy(quest));
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
                templateUrl: 'js/app/quest/create-quest-dialog/create-quest-dialog.tpl.html',
                controller: 'CreateQuestDialogController',
                controllerAs: "createQuest",
                bindToController: true,
                locals: {
                    chooseTutorial: true,
                    tutorial: !user.getCreationTutorialFlag(CreationTutorialFlags.QUEST)
                }
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
                .title($translate.instant('TITLE_DELETE_QUEST_DEV'))
                .htmlContent($translate.instant('TEXT_DELETE_QUEST_DEV'))
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
                .title($translate.instant("TITLE_EDIT_DIFFERENT_QUEST"))
                .htmlContent($translate.instant("TEXT_EDIT_DIFFERENT_QUEST"))
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok($translate.instant("BUTTON_CONFIRM"))
                .cancel($translate.instant("BUTTON_CANCEL"));

            return $mdDialog.show(confirm);
        }
    }

})();