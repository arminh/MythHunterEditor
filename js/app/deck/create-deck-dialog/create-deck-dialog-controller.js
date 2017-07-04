/**
 * Created by Hannah on 26.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .controller('CreateDeckDialogController', CreateDeckDialogController);

    CreateDeckDialogController.$inject = ["$mdDialog"];

    /* @ngInject */
    function CreateDeckDialogController($mdDialog) {
        var vm = this;

        vm.confirm = confirm;
        ////////////////

        function confirm() {
            $mdDialog.hide(vm.tutorial);
        }
    }

})();

