/**
 * Created by Hannah on 19.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .controller('TreePartController', TreePartController);

    TreePartController.$inject = ["$log", "$state", "$stateParams", "$timeout", "$translate", "CreationTutorialFlags", "TreePartService", "MarkerType", "textAngularManager", "user"];

    /* @ngInject */
    function TreePartController($log, $state, $stateParams, $timeout, $translate, CreationTutorialFlags, TreePartService, MarkerType, textAngularManager, user) {
        var vm = this;
        vm.types = MarkerType;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo']]";
        vm.quizToolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo'],['input','radio','checkbox']]"
        vm.enemyDeckPromise = null;
        vm.taskTypeText = "";

        vm.editEnemyDeck = editEnemyDeck;
        vm.keyPressed = keyPressed;
        vm.contentChanged = contentChanged;
        vm.showTutorial = showTutorial;
        vm.focusContent = focusContent;
        vm.confirm = confirm;
        vm.cancel = cancel;

        // $scope.$watch("treePartCtrl.content", contentChanged);

        activate();

        ////////////////

        function activate() {
            if ($stateParams.treePart) {
                vm.originalTreePart = $stateParams.originalTreePart;
                vm.treePart = $stateParams.treePart;
                vm.task = vm.treePart.getTask();

                vm.content = TreePartService.getContent(vm.task);
                vm.targetContent = TreePartService.getTargetContent(vm.task);

                switch (vm.task.getType()) {
                    case MarkerType.INFO:
                        vm.taskTypeText = $translate.instant("TITLE_INFO");
                        break;
                    case MarkerType.QUIZ:
                        vm.taskTypeText = $translate.instant("TITLE_QUIZ");
                        break;
                    case MarkerType.SEARCH:
                        vm.taskTypeText = $translate.instant("TITLE_SEARCH");
                        break;
                    case MarkerType.FIGHT:
                        vm.taskTypeText = $translate.instant("TITLE_FIGHT");
                        var enemy = vm.task.getEnemy();
                        var enemyDeck = enemy.getDeck();
                        if(!enemyDeck) {
                            vm.enemyDeckPromise = enemy.loadStandardDeck(user, user.getCollection());
                        }

                        break;
                    default:
                        vm.taskTypeText = $translate.instant("TITLE_FIRST");
                }

            } else {
                if (user.getCurrentQuest()) {
                    $state.go("app.map");
                } else {
                    $state.go("app.profile");
                }
                return;
            }

            if (vm.task.getType() == "start" || vm.task.getType() == MarkerType.QUIZ || vm.task.getType() == MarkerType.FIGHT) {
                $timeout(function () {
                    var introOptions = {
                        steps: [
                            {
                                element: document.querySelector('#task-name'),
                                intro: $translate.instant("TUT_TASK_NAME")
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

                    if (vm.task.getType() == "start") {
                        var startSteps = [
                            {
                                element: document.querySelector('#task-content'),
                                intro: $translate.instant("TOOLTIP_START_TASK_DESCRIPTION_1") + " "
                                + $translate.instant("TOOLTIP_START_TASK_DESCRIPTION_2"),
                                position: "top"
                            }
                        ];
                        introOptions.steps = introOptions.steps.concat(startSteps);
                    }

                    if (vm.task.getType() == MarkerType.QUIZ) {
                        var quizSteps = [
                            {
                                element: document.querySelector('.task-input'),
                                intro: $translate.instant("TUT_TASK_INPUT"),
                            },
                            {
                                element: document.querySelector('.task-radio'),
                                intro: $translate.instant("TUT_TASK_SINGLE_CHOICE")
                            },
                            {
                                element: document.querySelector('.task-checkbox'),
                                intro: $translate.instant("TUT_TASK_MULTIPLE_CHOICE")
                            },
                            {
                                element: document.querySelector('#task-content'),
                                intro: $translate.instant("TUT_TASK_QUIZ_CONTENT"),
                                position: "top"
                            },
                            {
                                element: document.querySelector('#task-complete-content'),
                                intro: $translate.instant("TUT_TASK_QUIZ_COMPLETE_CONTENT"),
                                position: "top"
                            }
                        ];
                        introOptions.steps = introOptions.steps.concat(quizSteps);
                    } else if (vm.task.getType() == MarkerType.FIGHT) {
                        var fightSteps = [
                            {
                                element: document.querySelector('#task-content'),
                                intro: $translate.instant("TUT_TASK_FIGHT_CONTENT"),
                                position: "top"
                            },
                            {
                                element: document.querySelector('#task-complete-content'),
                                intro: $translate.instant("TUT_TASK_FIGHT_COMPLETE_CONTENT"),
                                position: "top"
                            },
                            {
                                element: document.querySelector('#enemy-name'),
                                intro: $translate.instant("TUT_TASK_ENEMY_NAME"),
                                position: "right"
                            },
                            {
                                element: document.querySelector('#enemy-description'),
                                intro: $translate.instant("TUT_TASK_ENEMY_DESC"),
                                position: "right"
                            },
                            {
                                element: document.querySelector('#enemy-deck'),
                                intro: $translate.instant("TUT_TASK_ENEMY_DECK"),
                                position: "right"
                            }
                        ];
                        introOptions.steps = introOptions.steps.concat(fightSteps);
                    }

                    introOptions.steps.push(
                        {
                            element: document.querySelector('#task-confirm'),
                            intro: $translate.instant("TUT_TASK_FINISHED"),
                            position: "right"
                        }
                    );

                    vm.introOptions = introOptions;
                    $timeout(function () {
                        if (vm.task.getType() == "start" && $stateParams.tutorial
                            || (vm.task.getType() == MarkerType.QUIZ && !user.getCreationTutorialFlag(CreationTutorialFlags.QUIZ))
                            || (vm.task.getType() == MarkerType.FIGHT && !user.getCreationTutorialFlag(CreationTutorialFlags.FIGHT))) {
                            vm.startIntro();
                        }
                    });

                });
            }
        }

        function editEnemyDeck() {

            TreePartService.saveHtmls(vm.content, vm.targetContent, vm.task);
            if(vm.enemyDeckPromise) {
                vm.enemyDeckPromise.then(function () {
                    gotoCollection();
                });
            } else {
                gotoCollection();
            }

        }

        function gotoCollection() {
            $state.go("app.collection", {
                enemy: vm.task.getEnemy(),
                originalTreePart: vm.originalTreePart,
                treePart: vm.treePart
            });
        }

        function contentChanged() {
            vm.content = TreePartService.contentChanged(vm.task, vm.content);
        }

        function showTutorial() {
            vm.startIntro();
        }

        function focusContent(target) {
            var editorScope = null;

            if(!target) {
                if(vm.task.getType() == MarkerType.QUIZ) {
                    editorScope = textAngularManager.retrieveEditor('task-editor-quiz').scope;
                } else {
                    editorScope = textAngularManager.retrieveEditor('task-editor').scope;
                }
            } else {
                editorScope = textAngularManager.retrieveEditor('task-target').scope;
            }


            $timeout(function(){
                editorScope.displayElements.text.trigger('focus');
            });

        }

        function keyPressed(evt) {
            TreePartService.keyPressed(evt);
        }

        function confirm() {
            TreePartService.finishEditing(vm.treePart, vm.originalTreePart, vm.content, vm.targetContent).then(function () {
                if (vm.task.getType() == MarkerType.QUIZ) {
                    user.setCreationTutorialFlag(CreationTutorialFlags.QUIZ);
                } else if (vm.task.getType() == MarkerType.FIGHT) {
                    user.setCreationTutorialFlag(CreationTutorialFlags.FIGHT);
                }
                user.backup();
                if(vm.task.getLon() == 0 && vm.task.getLat() == 0) {
                    $state.go("app.map", {tutorial: $stateParams.tutorial, treePart: vm.originalTreePart});
                } else {
                    $state.go("app.map", {tutorial: $stateParams.tutorial});
                }

            });
        }

        function cancel() {
            if(user.getCurrentQuest().getTreePartRoot()) {
                $state.go("app.map");
            } else {
                $state.go("app.profile");
            }

        }
    }

})();

