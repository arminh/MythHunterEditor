/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapController', MapController);

    MapController.$inject = ["$scope", "$state", "$stateParams", "$timeout", "$mdDialog", "$translate", "MapInteractionService", "MapService", "CreationTutorialFlags", "user", "ngIntroService"];

    /* @ngInject */
    function MapController($scope, $state, $stateParams, $timeout, $mdDialog, $translate, MapInteraction, MapService, CreationTutorialFlags, user, ngIntroService) {
        var vm = this;

        vm.quest = null;
        vm.showQuestline = true;
        vm.saveQuestPromise = null;
        vm.interactionDisabled = false;
        vm.tutorialAutoStart = false;

        vm.addTreePart = addTreePart;
        vm.drawing = MapService.getDrawing;
        vm.searchFocused = true;

        vm.toggleQuestline = toggleQuestline;
        vm.searchLocation = searchLocation;
        vm.gotoLocation = gotoLocation;
        vm.searchAndGotoLocation = searchAndGotoLocation;
        vm.editQuest = editQuest;
        vm.saveQuest = saveQuest;
        vm.cancelQuest = cancelQuest;
        vm.editQuestTree = editQuestTree;
        vm.addQuestReward = addQuestReward;
        vm.showInstructions = showInstructions;
        vm.showTutorial = showTutorial;
        vm.showPlaceMarkerInfo = showPlaceMarkerInfo;
        vm.mouseDown = mouseDown;

        vm.exitIntro = exitIntro;

        $scope.$on('markerChanged', MapService.markerChanged);
        $scope.$on("keypress:27", escapeKeyPressed);

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

        activate();

        ////////////////

        function activate() {
            MapInteraction.init("mapView");
            focusSearchInput();
            loadQuest();
            if($stateParams.treePart) {
                if ($stateParams.tutorial && $stateParams.treePart.getTask().getType() == "start") {
                    MapService.showMarkerTutorial("start").then(function () {
                        MapService.placeTreePartMarker($stateParams.treePart, user, vm.quest);
                    });
                } else {
                    MapService.placeTreePartMarker($stateParams.treePart, user, vm.quest);
                }
            } else if(!vm.quest.getTreePartRoot()) {
                var treePartRoot = vm.quest.createTreePartMarker("start");
                $state.go("app.task", {originalTreePart: treePartRoot, treePart: angular.copy(treePartRoot), tutorial: $stateParams.tutorial});
            }
        }

        function initIntro() {
            return $timeout(function() {
                vm.introOptions = {
                    steps: [
                        {
                            element: document.querySelector('#show-instructions'),
                            intro: $translate.instant("TUT_MAP_INSTRUCTIONS")
                        },
                        {
                            element: document.querySelector('#show-tutorial'),
                            intro: $translate.instant("TUT_MAP_TUTORIAL")
                        },
                        {
                            element: document.querySelector('#edit-storyline'),
                            intro: $translate.instant("TUT_MAP_COMPLEX")
                        },
                        {
                            element: document.querySelector('#edit-quest'),
                            intro: $translate.instant("TUT_MAP_EDIT_QUEST")
                        },
                        {
                            element: document.querySelector('#cancel-quest'),
                            intro: $translate.instant("TUT_MAP_CANCEL_QUEST")
                        },
                        {
                            element: document.querySelector('#save-quest'),
                            intro: $translate.instant("TUT_MAP_SAVE_QUEST")
                        },
                        {
                            element: document.querySelector('#map-task'),
                            intro: $translate.instant("TUT_MAP_TASK"),
                            position: 'right'
                        },
                        {
                            element: document.querySelector('#add-task'),
                            intro: $translate.instant("TUT_MAP_ADD_TASK"),
                            position: 'right'

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
            });
        }

        function focusSearchInput() {
            $timeout(function () {
                if(document.querySelector('#toolbar-search-input')) {
                    document.querySelector('#toolbar-search-input').focus();
                }

            });
        }

        function loadQuest() {
            vm.quest = user.getCurrentQuest();
            MapService.init(vm.quest);
            var treePartRoot = vm.quest.getTreePartRoot();
            if (treePartRoot) {
                MapService.addMarkers(vm.quest);
                var startMarker = treePartRoot.getTask();
                MapInteraction.setCenter(startMarker.getLon(), startMarker.getLat(), 17);
                initIntro().then(function() {
                    $timeout(function() {
                        if($stateParams.tutorial) {
                            vm.startIntro();
                        }
                    })
                });
            } else {
                MapInteraction.centerOnCurrentLocation();
            }
        }

        function addTreePart(quest, evt) {
            ngIntroService.clear();
            MapService.addTreePart(quest, evt);
        }

        function toggleQuestline() {
            vm.showQuestline = !vm.showQuestline;
        }

        function searchLocation(query) {
            return MapService.searchLocation(query);
        }

        function gotoLocation(location) {
            if (location) {
                MapInteraction.setCenter(parseFloat(location.lon), parseFloat(location.lat), 19);
            }
        }

        function searchAndGotoLocation(query) {
            if (query != "") {
                searchLocation(query).then(function (result) {
                    gotoLocation(result[0]);
                });
            } else {
                focusSearchInput();
            }
        }

        function showInstructions() {
            return $mdDialog.show({
                templateUrl: 'js/app/quest/create-quest-dialog/create-quest-dialog.tpl.html',
                controller: 'CreateQuestDialogController',
                controllerAs: "createQuest",
                bindToController: true,
                locals: {
                    chooseTutorial: false
                }
            });
        }

        function showEditStorylineDialog() {
            return $mdDialog.show({
                templateUrl: 'js/app/quest_tree/edit-storyline-dialog/edit-storyline-dialog.tpl.html',
                controller: 'EditStorylineDialogController',
                controllerAs: "editStoryline",
                bindToController: true,
                locals: {
                    chooseTutorial: false
                }
            });
        }

        function showTutorial() {
            vm.startIntro();
        }

        function showPlaceMarkerInfo() {
            if (MapService.getDrawing()) {
                var alert = $mdDialog.alert()
                    .title($translate.instant('TITLE_PLACE_MARKER'))
                    .htmlContent($translate.instant('ERROR_PLACE_MARKER'))
                    .ariaLabel('Save Quiz')
                    .ok($translate.instant('BUTTON_CLOSE'));

                return $mdDialog.show(alert);
            }
        }

        function mouseDown(evt) {
            if(evt.which == 3 && vm.quest) {
                evt.preventDefault();
                MapService.cancelTreePart();
            }
        }

        function escapeKeyPressed() {
            MapService.cancelTreePart();
            $scope.$apply();
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

        function cancelQuest(evt) {
            var confirm = $mdDialog.confirm()
                .title($translate.instant('TITLE_DELETE_QUEST_DEV'))
                .htmlContent($translate.instant('TEXT_DELETE_QUEST_DEV'))
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok($translate.instant("BUTTON_CONFIRM"))
                .cancel($translate.instant("BUTTON_CANCEL"));

            return $mdDialog.show(confirm).then(function () {
                user.clearCurrentQuest();
                $state.go("app.profile");
            });

        }

        function editQuestTree() {

            showEditStorylineDialog().then(function () {
                user.setCreationTutorialFlag(CreationTutorialFlags.STORYLINE);
                user.upload();
                $state.go("app.storyline", {quest: vm.quest});
            });
        }

        function addQuestReward() {
            MapService.addQuestReward(user);
        }

        function exitIntro() {
            vm.tutorial = false;
        }
    }

})();

