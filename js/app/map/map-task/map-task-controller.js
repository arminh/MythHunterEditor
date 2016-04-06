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

        vm.focusMarker = focusMarker;
        vm.editTask = editTask;
        vm.deleteTask = deleteTask;
        vm.previewHtml = previewHtml;

        $scope.$watch("mapTask.task.name", taskNameChanged);

        ////////////////

        function focusMarker() {
            MapInteraction.setCenter(parseFloat(vm.task.lon), parseFloat(vm.task.lat), 17);
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
        }

        function previewHtml() {
            vm.task.html.preview();
        }
    }

})();