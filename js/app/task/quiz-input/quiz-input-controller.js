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
        vm.parts = [];

        vm.addGap = addGap;
        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function Text(text) {
            this.type = "text";
            this.text = "";

        }

        function Gap() {
            this.type = "gap";
            this.text = "";
        }

        function activate() {
            vm.parts.push(new Text());
            vm.parts.push(new Gap());
            vm.parts.push(new Text());
        }


        function addGap() {
            vm.parts.push(new Gap());
            vm.parts.push(new Text());
        }

        function confirm(evt) {
            $mdDialog.hide(vm.parts);
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

