/**
 * Created by armin on 28.01.16.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapTaskController', MapTaskController);

    MapTaskController.$inject = ["$scope", "$state", "MapInteractionService"];

    /* @ngInject */
    function MapTaskController($scope, $state, MapInteraction) {

        var vm = this;
        vm.task = null;

        vm.flashMarker = flashMarker;
        vm.focusMarker = focusMarker;
        vm.editTask = editTask;
        vm.deleteTask = deleteTask;
        vm.previewHtml = previewHtml;

        $scope.$watch("mapTask.task.name", taskNameChanged);

        ////////////////

        function flashMarker() {
            MapInteraction.flashMarker(vm.task.getMarkerId());
        }

        function focusMarker() {
            MapInteraction.setCenter(parseFloat(vm.task.getLon()), parseFloat(vm.task.lat), 17);
            flashMarker();
        }

        function taskNameChanged(newValue, oldValue) {
            if(newValue != oldValue) {
                vm.task.getHtml().setTaskTitle(newValue);
                vm.task.change();
            }
        }

        function editTask() {
            $state.go("app.task", { treePart: vm.treepart });
        }

        function deleteTask() {
            vm.quest.deleteTreePart(vm.treepart);
            MapInteraction.removeMarker(vm.task.getMarkerId());
            if(vm.task.getTargetMarkerId() > -1) {
                MapInteraction.removeMarker(vm.task.getTargetMarkerId());
            }
        }

        function previewHtml(evt) {
            vm.task.preview(evt);
        }
    }

})();