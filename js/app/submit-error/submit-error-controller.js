/**
 * Created by Hannah on 25.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('SubmitErrorController', SubmitErrorController);

    SubmitErrorController.$inject = ["$mdDialog"];

    /* @ngInject */
    function SubmitErrorController($mdDialog) {
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
            quest.edit();
        }

        function editTask(task) {
            $mdDialog.hide();
            task.edit();
        }

        function close() {
            $mdDialog.hide();
        }
    }

})();

