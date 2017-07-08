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
                                intro: "Enter a name for your task."
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
                                intro: "Add input boxes for players to fill in"
                            },
                            {
                                element: document.querySelector('.task-radio'),
                                intro: "Add single choice exercises with only one correct answer"
                            },
                            {
                                element: document.querySelector('.task-checkbox'),
                                intro: "Add multiple choice exercises with multiple or no correct answer"
                            },
                            {
                                element: document.querySelector('#task-content'),
                                intro: "Click in the textbox to focus it and add some quiz exercises for the player to solve"
                            },
                            {
                                element: document.querySelector('#task-complete-content'),
                                intro: "Congratulate the user for finishing your quiz and lead them to the next task"
                            }
                        ];
                        introOptions.steps = introOptions.steps.concat(quizSteps);
                    } else if(vm.task.getType() == MarkerType.FIGHT) {
                        var fightSteps =  [
                            {
                                element: document.querySelector('#task-content'),
                                intro: "Enter an introduction for your fight."
                            },
                            {
                                element: document.querySelector('#task-complete-content'),
                                intro: "Enter a description that is shown after the fight"
                            },
                            {
                                element: document.querySelector('#enemy-name'),
                                intro: "Enter a name for the enemy"
                            },
                            {
                                element: document.querySelector('#enemy-description'),
                                intro: "Enter a description for the enemy"
                            },
                            {
                                element: document.querySelector('#enemy-deck'),
                                intro: "Click for editing the enemy deck"
                            }
                        ];
                        introOptions.steps =introOptions.steps.concat(fightSteps);
                    }

                    introOptions.steps.push(
                        {
                            element: document.querySelector('#task-confirm'),
                            intro: "If you are finished editing the quest and the first marker press this button."
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

