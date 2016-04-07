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
        vm.drawing = false;
        vm.showQuestline = false;

        vm.toggleMarker = MapService.toggleMarker;
        vm.createTask = MapService.createTask;
        vm.saveQuest = MapService.saveQuest;

        vm.toggleQuestline = toggleQuestline;
        vm.searchLocation = searchLocation;
        vm.gotoLocation = gotoLocation;
        vm.searchAndGotoLocation = searchAndGotoLocation;
        vm.cancelQuest = cancelQuest;

        $scope.$on('markerChanged', MapService.markerChanged);
        $scope.$watch("Mapservice.getDrawing()", drawingChanged);

        vm.sortableOptions = {
            axis: 'y',
            cancel: ".fixed, input",
            start: function(e, ui){
                ui.placeholder.height(ui.item.height());

            },
            update: function(e, ui) {
                vm.quest.change();
            },
            stop: function(e, ui) {
                vm.quest.rewireTree(vm.quest.treePartRoot, vm.quest.treeParts);
            },
            sort: function(e, ui) {
                var draggedMarkerId = ui.item.sortable.model.task.markerId;
                MapInteraction.animateMarker(draggedMarkerId);
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
            //gotoLocation(MapInteraction.search(query)[0]);
        }

        function drawingChanged(value) {
            vm.drawing = value;
        }

        function cancelQuest() {
            $state.go("app.profile");
        }
    }

})();

