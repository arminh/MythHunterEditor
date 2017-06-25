/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapController', MapController);

    MapController.$inject = ["$scope", "$state", "$q", "$mdDialog", "MapInteractionService", "MapService", "user"];

    /* @ngInject */
    function MapController($scope, $state, $q, $mdDialog, MapInteraction, MapService, user) {
        var vm = this;

        vm.quest = null;
        vm.showQuestline = true;
        vm.saveQuestPromise = null;
        vm.interactionDisabled = false;

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

        activate();

        ////////////////

        function activate() {
            MapInteraction.init("mapView");
            $q.when(MapService.getQuest(user), function (quest) {
                vm.quest = quest;
                var startMarker = quest.getTreePartRoot().getTask();
                MapInteraction.setCenter(startMarker.getLon(), startMarker.getLat(), 17);
            });
        }

        function addTreePart(quest, evt) {
            MapService.addTreePart(user, quest, evt);
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
            $state.go("app.profile");
        }

        function editQuestTree() {
            $state.go("app.storyline", {quest: vm.quest});
            // MapService.editQuestTree();
        }

        function addQuestReward() {
            MapService.addQuestReward(user);
        }
    }

})();

