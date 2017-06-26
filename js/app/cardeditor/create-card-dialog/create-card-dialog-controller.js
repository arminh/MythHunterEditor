/**
 * Created by Hannah on 26.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('cardeditor')
        .controller('CreateCardDialogController', CreateCardDialogController);

    CreateCardDialogController.$inject = ["$mdDialog"];

    /* @ngInject */
    function CreateCardDialogController($mdDialog) {
        var vm = this;

        vm.confirm = confirm;
        ////////////////

        function confirm() {
            $mdDialog.hide();
        }
    }

})();

