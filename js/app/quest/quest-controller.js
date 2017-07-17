/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .controller('QuestController', QuestController);

    QuestController.$inject = ["$timeout", "$state", "$stateParams", "$translate", "QuestService", "user", "REWARD_MAX_CARDS", "CreationTutorialFlags"];

    /* @ngInject */
    function QuestController($timeout, $state, $stateParams, $translate, QuestService, user, REWARD_MAX_CARDS, CreationTutorialFlags) {

        var vm = this;
        vm.user = user;
        vm.editStartMarker = false;
        vm.questContent = "";
        vm.taskContent = "";
        vm.sameDescription = false;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo']]";
        vm.maxCards = REWARD_MAX_CARDS;

        vm.tutorialAutoStart = $stateParams.tutorial;
        $timeout(function () {
            vm.introOptions = {
                steps: [
                    {
                        element: document.querySelector('#quest-name'),
                        intro: $translate.instant("TUT_QUEST_NAME")
                    },
                    {
                        element: document.querySelector('#quest-description'),
                        intro: $translate.instant("TOOLTIP_QUEST_DESCRIPTION_1") + $translate.instant("TOOLTIP_QUEST_DESCRIPTION_2")
                    },
                    {
                        element: document.querySelector('#task-name'),
                        intro: $translate.instant("TUT_QUEST_TASK_NAME")
                    },
                    {
                        element: document.querySelector('#same-description'),
                        intro: $translate.instant("TUT_QUEST_SAME_DESC")
                    },
                    {
                        element: document.querySelector('#task-description'),
                        intro: $translate.instant("TOOLTIP_START_TASK_DESCRIPTION_1") + " "
                        + $translate.instant("TOOLTIP_START_TASK_DESCRIPTION_2")
                        + $translate.instant("TOOLTIP_START_TASK_DESCRIPTION_3")
                    },
                    {
                        element: document.querySelector('#quest-reward'),
                        intro: $translate.instant("TOOLTIP_QUEST_REWARD_1") + $translate.instant("TOOLTIP_QUEST_REWARD_2")
                    },
                    {
                        element: document.querySelector('#quest-confirm'),
                        intro: $translate.instant("TUT_QUEST_FINISHED")
                    }
                ],
                showStepNumbers: false,
                showBullets: true,
                exitOnOverlayClick: false,
                exitOnEsc: true,
                hidePrev: true,
                nextLabel: $translate.instant("BUTTON_NEXT"),
                prevLabel: $translate.instant("BUTTON_PREV"),
                skipLabel: $translate.instant("BUTTON_SKIP"),
                doneLabel: $translate.instant("BUTTON_DONE")
            };
        });

        vm.showQuestDescriptionTooltip = showQuestDescriptionTooltip;
        vm.showTutorial = showTutorial;
        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            if ($stateParams.quest) {
                vm.originalQuest = $stateParams.quest;
                vm.quest = angular.copy($stateParams.quest);
            } else {
                if (user.getCurrentQuest()) {
                    $state.go("app.map");
                } else {
                    $state.go("app.profile");
                }
            }

            if ($stateParams.editStartMarker) {
                vm.editStartMarker = $stateParams.editStartMarker;
            }
        }

        function showQuestDescriptionTooltip() {
            vm.questDescriptionTooltipVisible = true;
        }

        function showTutorial() {
            vm.startIntro();
        }

        function confirm() {
            QuestService.finishEditing(vm.quest, vm.originalQuest, vm.sameDescription, vm.editStartMarker);
            user.setCreationTutorialFlag(CreationTutorialFlags.QUEST);
            user.backup();
            $state.go("app.map", {tutorial: $stateParams.tutorial});
        }

        function cancel() {
            $state.go("app.map", {tutorial: $stateParams.tutorial});
        }
    }

})();