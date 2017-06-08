/**
 * Created by Hannah on 08.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('QuizInputController', QuizInputController);

    QuizInputController.$inject = ["$mdDialog"];

    /* @ngInject */
    function QuizInputController($mdDialog) {
        var vm = this;
        vm.text = "Solution";

        vm.confirm = confirm;
        vm.cancel = cancel;

        ////////////////

        function confirm(evt) {
            $mdDialog.hide(vm.text);
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

