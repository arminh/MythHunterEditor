/**
 * Created by Hannah on 18.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('ChooseTypeController', ChooseTypeController);

    ChooseTypeController.$inject = ["$mdDialog", "TaskService", "MarkerType"];

    /* @ngInject */
    function ChooseTypeController($mdDialog, TaskService, MarkerType) {
        var vm = this;
        vm.types = MarkerType;

        vm.getMarkerIconSrc = getMarkerIconSrc;
        vm.typeChosen = typeChosen;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {

        }

        function getMarkerIconSrc(type) {
            return TaskService.getMarkerSrc(type);
        }

        function typeChosen(type) {
            $mdDialog.hide({
                type: type
            })
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

