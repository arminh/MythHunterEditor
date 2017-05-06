/**
 * Created by Hannah on 26.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('UploadConfirmationController', UploadConfirmationController);

    UploadConfirmationController.$inject = ["$mdDialog"];

    /* @ngInject */
    function UploadConfirmationController($mdDialog) {
        var vm = this;

        vm.submit = false;

        vm.confirm = confirm;
        vm.cancel = cancel;

        ////////////////

        function confirm() {
            $mdDialog.hide(vm.submit);
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

