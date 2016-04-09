/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapController', MapController);

    MapController.$inject = ["$scope", "$state", "$q", "MapInteractionService", "MapService", "user"];

    /* @ngInject */
    function MapController($scope, $state, $q, MapInteraction, MapService, user) {
        var vm = this;

        vm.quest = null;
        vm.showQuestline = false;

        vm.toggleMarker = MapService.toggleMarker;
        vm.createTask = MapService.createTask;
        vm.saveQuest = MapService.saveQuest;
        vm.drawing = MapService.getDrawing;
        vm.continueDrawing = MapService.getContinueDrawing;

        vm.toggleQuestline = toggleQuestline;
        vm.searchLocation = searchLocation;
        vm.gotoLocation = gotoLocation;
        vm.searchAndGotoLocation = searchAndGotoLocation;
        vm.editQuest = editQuest;
        vm.cancelQuest = cancelQuest;

        $scope.$on('markerChanged', MapService.markerChanged);

        vm.sortableOptions = {
            axis: 'y',
            cancel: ".fixed, input",
            start: function(e, ui){
                ui.placeholder.height(ui.item.height());
                var draggedMarkerId = ui.item.sortable.model.task.markerId;
                MapInteraction.flashMarker(draggedMarkerId);

            },
            update: function(e, ui) {
                vm.quest.change();
            },
            stop: function(e, ui) {
                vm.quest.rewireTree(vm.quest.treePartRoot, vm.quest.treeParts);
            },
            sort: function(e, ui) {


            }
            //containment: "#map-quests"
        };

        activate();

        ////////////////

        function activate() {
            MapInteraction.init("mapView");
            $q.when(MapService.getQuest(user), function(result) {
                this.quest = result;
            }.bind(vm));
        }

        function toggleQuestline() {
            return !vm.showQuestline;
        }

        function searchLocation(query) {
            return MapService.searchLocation(query);
        }

        function gotoLocation(location) {
            if(location) {
                MapInteraction.setCenter(parseFloat(location.lon), parseFloat(location.lat), 17);
            }
        }

        function searchAndGotoLocation(query) {
            gotoLocation(searchLocation(query)[0]);
        }

        function editQuest() {
            vm.quest.edit();
        }

        function cancelQuest() {
            $state.go("app.profile");
        }
    }

})();

