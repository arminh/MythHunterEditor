/**
 * Created by Hannah on 25.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('SubmitErrorController', SubmitErrorController);

    SubmitErrorController.$inject = ["$state", "$mdDialog"];

    /* @ngInject */
    function SubmitErrorController($state, $mdDialog) {
        var vm = this;
        vm.editQuest = editQuest;
        vm.editTask = editTask;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
        }

        function editQuest(quest) {
            $mdDialog.hide();
            $state.go("app.quest", {
                quest: quest,
                editStartMarker: false
            });
        }

        function editTask(treePart) {
            $mdDialog.hide();
            $state.go("app.task", {
                originalTreePart: treePart,
                treePart: angular.copy(treePart)
            });
        }

        function close() {
            $mdDialog.hide();
        }
    }

})();

