/**
 * Created by Hannah on 25.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapErrorController', MapErrorController);

    MapErrorController.$inject = ["$scope"];

    /* @ngInject */
    function MapErrorController($scope) {
        var vm = this;
        vm.editQuest = editQuest;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
            console.log($scope.ngDialogData);
            vm.errors = $scope.ngDialogData.errors;
        }

        function editQuest(quest) {
            $scope.closeThisDialog();
            quest.edit();
        }

        function close() {
            $scope.closeThisDialog();
        }
    }

})();

