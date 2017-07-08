/**
 * Created by Hannah on 19.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .controller('TreePartController', TreePartController);

    TreePartController.$inject = ["$log", "$state", "$stateParams", "$timeout", "$translate", "CreationTutorialFlags", "TreePartService", "MarkerType", "user"];

    /* @ngInject */
    function TreePartController($log, $state, $stateParams, $timeout, $translate, CreationTutorialFlags, TreePartService, MarkerType, user) {
        var vm = this;
        vm.types = MarkerType;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo']]";
        vm.quizToolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo'],['input','radio','checkbox']]"
        vm.enemyDeckPromise = null;

        vm.editEnemyDeck = editEnemyDeck;
        vm.keyPressed = keyPressed;
        vm.contentChanged = contentChanged;
        vm.showTutorial = showTutorial,
        vm.confirm = confirm;
        vm.cancel = cancel;

       // $scope.$watch("treePartCtrl.content", contentChanged);

        activate();

        ////////////////

        function activate() {
            if($stateParams.treePart) {
                vm.originalTreePart = $stateParams.originalTreePart;
                vm.treePart = $stateParams.treePart;
                vm.task = vm.treePart.getTask();

                vm.content = TreePartService.getContent(vm.task);
                vm.targetContent = TreePartService.getTargetContent(vm.task);

                if(vm.task.getType() == MarkerType.FIGHT) {
                    var enemy = vm.task.getEnemy();
                    vm.enemyDeckPromise = enemy.loadStandardDeck(user, user.getCollection());
                }

            } else {
                if(user.getCurrentQuest()) {
                    $state.go("app.map");
                } else {
                    $state.go("app.profile");
                }
                return;
            }

            if((vm.task.getType() == MarkerType.QUIZ && !user.getCreationTutorialFlag(CreationTutorialFlags.QUIZ))
                || (vm.task.getType() == MarkerType.FIGHT && !user.getCreationTutorialFlag(CreationTutorialFlags.FIGHT))) {
                $timeout(function () {
                    var introOptions = {
                        steps: [
                            {
                                element: document.querySelector('#task-name'),
                                intro: $translate.instant("TUT_TASK_NAME")
                            }

                        ],
                        showStepNumbers: false,
                        showBullets: true,
                        exitOnOverlayClick: true,
                        exitOnEsc: true,
                        hidePrev: true
                    };

                    if(vm.task.getType() == MarkerType.QUIZ) {
                        var quizSteps =  [
                            {
                                element: document.querySelector('.task-input'),
                                intro: $translate.instant("TUT_TASK_INPUT")
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
                                intro: $translate.instant("TUT_TASK_QUIZ_CONTENT")
                            },
                            {
                                element: document.querySelector('#task-complete-content'),
                                intro: $translate.instant("TUT_TASK_QUIZ_COMPLETE_CONTENT")
                            }
                        ];
                        introOptions.steps = introOptions.steps.concat(quizSteps);
                    } else if(vm.task.getType() == MarkerType.FIGHT) {
                        var fightSteps =  [
                            {
                                element: document.querySelector('#task-content'),
                                intro: $translate.instant("TUT_TASK_FIGHT_CONTENT")
                            },
                            {
                                element: document.querySelector('#task-complete-content'),
                                intro: $translate.instant("TUT_TASK_FIGHT_COMPLETE_CONTENT")
                            },
                            {
                                element: document.querySelector('#enemy-name'),
                                intro: $translate.instant("TUT_TASK_ENEMY_NAME")
                            },
                            {
                                element: document.querySelector('#enemy-description'),
                                intro: $translate.instant("TUT_TASK_ENEMY_DESC")
                            },
                            {
                                element: document.querySelector('#enemy-deck'),
                                intro: $translate.instant("TUT_TASK_ENEMY_DECK")
                            }
                        ];
                        introOptions.steps =introOptions.steps.concat(fightSteps);
                    }

                    introOptions.steps.push(
                        {
                            element: document.querySelector('#task-confirm'),
                            intro: $translate.instant("TUT_TASK_FINISHED")
                        }
                    );

                    vm.introOptions = introOptions;
                    $timeout(function() {
                        vm.startIntro();
                    });

                });
            }
        }

        function editEnemyDeck() {

            TreePartService.saveHtmls(vm.content, vm.targetContent, vm.task);
            vm.enemyDeckPromise.then(function () {
                $state.go("app.collection", {enemy: vm.task.getEnemy(), originalTreePart: vm.originalTreePart, treePart: vm.treePart});
            });
        }

        function contentChanged() {
            vm.content = TreePartService.contentChanged(vm.task, vm.content);
        }

        function showTutorial() {
            vm.startIntro();
        }

        function keyPressed(evt) {
            TreePartService.keyPressed(evt);
        }

        function confirm() {
            TreePartService.finishEditing(vm.treePart, vm.originalTreePart, vm.content, vm.targetContent).then(function() {
                if(vm.task.getType() == MarkerType.QUIZ) {
                    user.setCreationTutorialFlag(CreationTutorialFlags.QUIZ);
                } else if(vm.task.getType() == MarkerType.FIGHT) {
                    user.setCreationTutorialFlag(CreationTutorialFlags.FIGHT);
                }
                user.backup();
                $state.go("app.map");
            });
        }

        function cancel() {
            $state.go("app.map");
        }
    }

})();

