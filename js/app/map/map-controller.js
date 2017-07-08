/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapController', MapController);

    MapController.$inject = ["$scope", "$state", "$stateParams", "$q", "$mdDialog", "$translate", "MapInteractionService", "MapService", "user"];

    /* @ngInject */
    function MapController($scope, $state, $stateParams, $q, $mdDialog, $translate, MapInteraction, MapService, user) {
        var vm = this;

        vm.quest = null;
        vm.showQuestline = true;
        vm.saveQuestPromise = null;
        vm.interactionDisabled = false;
        vm.tutorialAutoStart = false;

        vm.addTreePart = addTreePart;
        vm.drawing = MapService.getDrawing;

        vm.toggleQuestline = toggleQuestline;
        vm.searchLocation = searchLocation;
        vm.gotoLocation = gotoLocation;
        vm.searchAndGotoLocation = searchAndGotoLocation;
        vm.editQuest = editQuest;
        vm.saveQuest = saveQuest;
        vm.cancelQuest = cancelQuest;
        vm.editQuestTree = editQuestTree;
        vm.addQuestReward = addQuestReward;
        vm.showInstructions = showCreateQuestDialog;
        vm.showTutorial = showTutorial;

        vm.introStep = introStep;
        vm.exitIntro = exitIntro;

        $scope.$on('markerChanged', MapService.markerChanged);

        vm.sortableOptions = {
            axis: 'y',
            cancel: ".fixed, input",
            disabled: false,
            start: function (e, ui) {
                ui.placeholder.height(ui.item.height());
                var draggedMarkerId = ui.item.sortable.model.task.markerId;
                MapInteraction.flashMarker(draggedMarkerId);
            },
            update: function (e, ui) {
                vm.quest.change();
            },
            stop: function (e, ui) {
                vm.quest.rewireTree(vm.quest.treePartRoot, vm.quest.treeParts);
            },
            sort: function (e, ui) {


            }
            //containment: "#map-quests"
        };

        vm.introOptions = {
            steps:[
                {
                    intro: "This tutorial gives you an overview of the most important interface elements."
                },
                {
                    element: document.querySelector('#add-task'),
                    intro: "Add additional task to your quest."
                },
                {
                    element: document.querySelector('#map-task'),
                    intro: "Open the menu on the right to show additional options for a task. Drag a task up or down to change its position in the quest."
                },
                {
                    element: document.querySelector('#edit-quest'),
                    intro: "Edit the contents (name, description, reward) of your quest."
                },
                {
                    element: document.querySelector('#edit-storyline'),
                    intro: "Use the graphical interface to build complex quests."
                },
                {
                    element: document.querySelector('#show-instructions'),
                    intro: "Show the instructions for creating a quest."
                },
                {
                    element: document.querySelector('#cancel-quest'),
                    intro: "Cancel editing and dismiss all changes you made to your quest."
                },
                {
                    element: document.querySelector('#save-quest'),
                    intro: "Save the changes you made to your quest."
                }
            ],
            showStepNumbers: false,
            showBullets: true,
            exitOnOverlayClick: true,
            exitOnEsc:true,
            hidePrev: true
        };

        activate();

        ////////////////

        function activate() {
            MapInteraction.init("mapView");
            loadQuest();

        }

        function loadQuest() {
            vm.quest = user.getCurrentQuest();
            vm.tutorialAutoStart = $stateParams.tutorial && vm.quest != null;
            if (vm.quest) {
                MapService.addMarkers(vm.quest);
                var startMarker = vm.quest.getTreePartRoot().getTask();
                MapInteraction.setCenter(startMarker.getLon(), startMarker.getLat(), 17);
            } else {
                if($stateParams.tutorial) {
                    MapService.showMarkerTutorial("start").then(function() {
                        MapService.createQuest(user, $stateParams.tutorial);
                    });
                } else {
                    MapService.createQuest(user, $stateParams.tutorial);
                }
            }
        }

        function addTreePart(quest, evt) {
            MapService.addTreePart(user, quest, $stateParams.tutorial, evt);
        }

        function toggleQuestline() {
            vm.showQuestline = !vm.showQuestline;
        }

        function searchLocation(query) {
            return MapService.searchLocation(query);
        }

        function gotoLocation(location) {
            if (location) {
                MapInteraction.setCenter(parseFloat(location.lon), parseFloat(location.lat), 17);
            }
        }

        function searchAndGotoLocation(query) {
            gotoLocation(searchLocation(query)[0]);
        }

        function showCreateQuestDialog() {
            return $mdDialog.show({
                templateUrl: 'js/app/profile/create-quest-dialog/create-quest-dialog.tpl.html',
                controller: 'CreateQuestDialogController',
                controllerAs: "createQuest",
                bindToController: true,
                locals: {
                    chooseTutorial: false
                }
            });
        }

        function showTutorial() {
            vm.startIntro();
        }

        function editQuest() {
            MapService.editQuest(vm.quest, false);
        }

        function saveQuest() {
            vm.showQuestline = false;
            vm.interactionDisabled = true;
            vm.saveQuestPromise = MapService.saveQuest(user, vm.quest).then(success, error);

            function success() {

            }

            function error() {
                vm.showQuestline = true;
                vm.interactionDisabled = false;
            }
        }

        function cancelQuest() {
            user.clearCurrentQuest();
            $state.go("app.profile");
        }

        function editQuestTree() {
            $state.go("app.storyline", {quest: vm.quest});
            // MapService.editQuestTree();
        }

        function addQuestReward() {
            MapService.addQuestReward(user);
        }

        function introStep(nextStep) {
            console.log("Intro step");
            return false;

        }

        function exitIntro() {
            vm.tutorial = false;
        }
    }

})();

