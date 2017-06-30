/**
 * Created by armin on 28.01.16.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapTaskController', MapTaskController);

    MapTaskController.$inject = ["$scope", "$mdDialog", "$state", "$translate", "MapInteractionService"];

    /* @ngInject */
    function MapTaskController($scope, $mdDialog, $state, $translate, MapInteraction) {

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
            $state.go("app.task", { originalTreePart: vm.treepart, treePart: angular.copy(vm.treepart) });
        }

        function deleteTask(evt) {
            var confirm = $mdDialog.confirm()
                .title($translate.instant("TITLE_DELETE_TASK"))
                .htmlContent($translate.instant("TEXT_DELETE_TASK"))
                .ariaLabel('Delete task')
                .targetEvent(evt)
                .ok($translate.instant("BUTTON_CONFIRM"))
                .cancel($translate.instant("BUTTON_CANCEL"));

            $mdDialog.show(confirm).then(function() {
                vm.quest.deleteTreePart(vm.treepart);
                MapInteraction.removeMarker(vm.task.getMarkerId());
                if(vm.task.getTargetMarkerId() > -1) {
                    MapInteraction.removeMarker(vm.task.getTargetMarkerId());
                }
            });

        }

        function previewHtml(evt) {
            vm.task.preview(evt);
        }
    }

})();