/**
 * Created by Hannah on 26.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .controller('EditStorylineDialogController', EditStorylineDialogController);

    EditStorylineDialogController.$inject = ["$mdDialog"];

    /* @ngInject */
    function EditStorylineDialogController($mdDialog) {
        var vm = this;

        vm.confirm = confirm;
        ////////////////

        function confirm() {
            $mdDialog.hide(vm.tutorial);
        }
    }

})();

