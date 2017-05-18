/**
 * Created by Hannah on 18.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('ChooseTypeController', ChooseTypeController);

    ChooseTypeController.$inject = ["$mdDialog", "MarkerType"];

    /* @ngInject */
    function ChooseTypeController($mdDialog, MarkerType) {
        var vm = this;
        vm.types = MarkerType;

        activate();

        ////////////////

        function activate() {

        }
    }

})();

