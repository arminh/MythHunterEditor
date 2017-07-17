/**
 * Created by Hannah on 26.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('CreateQuestDialogController', CreateQuestDialogController);

    CreateQuestDialogController.$inject = ["$mdDialog"];

    /* @ngInject */
    function CreateQuestDialogController($mdDialog) {
        var vm = this;

        vm.confirm = confirm;
        ////////////////

        function confirm() {
            $mdDialog.hide(vm.tutorial);
        }
    }

})();

