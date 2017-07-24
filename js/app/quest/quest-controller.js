/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .controller('QuestController', QuestController);

    QuestController.$inject = ["$timeout", "$state", "$stateParams", "$translate", "QuestService", "user", "REWARD_MAX_CARDS", "CreationTutorialFlags", "textAngularManager"];

    /* @ngInject */
    function QuestController($timeout, $state, $stateParams, $translate, QuestService, user, REWARD_MAX_CARDS, CreationTutorialFlags, textAngularManager) {

        var vm = this;

        vm.user = user;
        vm.questContent = "";
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo']]";
        vm.maxCards = REWARD_MAX_CARDS;

        $timeout(function () {
            vm.introOptions = {
                steps: [
                    {
                        element: document.querySelector('#quest-name'),
                        intro: $translate.instant("TUT_QUEST_NAME")
                    },
                    {
                        element: document.querySelector('#quest-description'),
                        intro: $translate.instant("TOOLTIP_QUEST_DESCRIPTION_1") + $translate.instant("TOOLTIP_QUEST_DESCRIPTION_2"),
                        position: "top"
                    },
                    {
                        element: document.querySelector('#quest-reward'),
                        intro: $translate.instant("TOOLTIP_QUEST_REWARD_1") + $translate.instant("TOOLTIP_QUEST_REWARD_2"),
                        position: "top"
                    },
                    {
                        element: document.querySelector('#quest-confirm'),
                        intro: $translate.instant("TUT_QUEST_FINISHED"),
                        position: "top"
                    }
                ],
                keyboardNavigation: false,
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
        }).then(function () {
            $timeout(function () {
                if ($stateParams.tutorial) {
                    vm.startIntro();
                }
            })
        });

        vm.showQuestDescriptionTooltip = showQuestDescriptionTooltip;
        vm.showTutorial = showTutorial;
        vm.focusContent = focusContent;
        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            vm.edit = $stateParams.edit;
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
        }

        function showQuestDescriptionTooltip() {
            vm.questDescriptionTooltipVisible = true;
        }

        function showTutorial() {
            vm.startIntro();
        }

        function focusContent() {
            var editorScope = textAngularManager.retrieveEditor('quest-content').scope;

            $timeout(function () {
                editorScope.displayElements.text.trigger('focus');
            });
        }

        function confirm() {
            QuestService.finishEditing(vm.quest, vm.originalQuest);
            user.setCreationTutorialFlag(CreationTutorialFlags.QUEST);

            if (!vm.edit) {
                user.setCurrentQuest(vm.quest);
                user.backup();
                var treePartRoot = vm.originalQuest.createTreePartMarker("start");
                $state.go("app.task", {originalTreePart: treePartRoot, treePart: angular.copy(treePartRoot), tutorial: $stateParams.tutorial});
            } else {
                user.backup();
                $state.go("app.map", {tutorial: $stateParams.tutorial});
            }


        }

        function cancel() {
            if (vm.edit) {
                $state.go("app.map", {tutorial: $stateParams.tutorial});
            } else {
                $state.go("app.profile");
            }

        }
    }

})();