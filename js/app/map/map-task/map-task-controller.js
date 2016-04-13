/**
 * Created by armin on 28.01.16.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapTaskController', MapTaskController);

    MapTaskController.$inject = ["$scope", "MapInteractionService"];

    /* @ngInject */
    function MapTaskController($scope, MapInteraction) {

        var vm = this;

        vm.task = vm.treepart.task;

        vm.flashMarker = flashMarker;
        vm.focusMarker = focusMarker;
        vm.editTask = editTask;
        vm.deleteTask = deleteTask;
        vm.previewHtml = previewHtml;

        $scope.$watch("mapTask.task.name", taskNameChanged);

        ////////////////

        function flashMarker() {
            MapInteraction.flashMarker(vm.task.markerId);
        }

        function focusMarker() {
            MapInteraction.setCenter(parseFloat(vm.task.lon), parseFloat(vm.task.lat), 17);
            flashMarker();
        }

        function taskNameChanged(newValue, oldValue) {
            if(newValue != oldValue) {
                vm.task.change();
            }
        }

        function editTask() {
            vm.task.edit(vm.quest);
        }

        function deleteTask() {
            vm.quest.deleteTreePart(vm.treepart);
            MapInteraction.removeMarker(vm.task.markerId);
            if(vm.task.targetMarkerId > -1) {
                MapInteraction.removeMarker(vm.task.targetMarkerId);
            }
        }

        function previewHtml() {
            vm.task.html.preview();
        }
    }

})();