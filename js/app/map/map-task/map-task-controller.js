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
        vm.task = null;

        vm.flashMarker = flashMarker;
        vm.focusMarker = focusMarker;
        vm.editTask = editTask;
        vm.deleteTask = deleteTask;
        vm.previewHtml = previewHtml;

        $scope.$watch("mapTask.task.name", taskNameChanged);

        activate();

        ////////////////

        function activate() {
            vm.task = vm.treepart.getTask();
        }

        function flashMarker() {
            MapInteraction.flashMarker(vm.task.markerId);
        }

        function focusMarker() {
            MapInteraction.setCenter(parseFloat(vm.task.lon), parseFloat(vm.task.lat), 17);
            flashMarker();
        }

        function taskNameChanged(newValue, oldValue) {
            if(newValue != oldValue) {
                vm.task.getHtml().setTaskTitle(newValue);
                vm.task.change();
            }
        }

        function editTask() {
            vm.task.edit(vm.quest);
        }

        function deleteTask() {
            vm.quest.deleteTreePart(vm.treepart);
            MapInteraction.removeMarker(vm.task.getMarkerId());
            if(vm.task.getTargetMarkerId() > -1) {
                MapInteraction.removeMarker(vm.task.getTargetMarkerId());
            }
        }

        function previewHtml() {
            vm.task.preview();
        }
    }

})();