/**
 * Created by armin on 08.12.15.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .controller('QuestTreeController', QuestTreeController);

    QuestTreeController.$inject = ["$scope", 'QuestTreeService', "$mdDialog", "$timeout"];

    /* @ngInject */
    function QuestTreeController($scope, QuestTreeService, $mdDialog, $timeout) {
        var vm = this;
        vm.drawing = false;

        vm.confirm = confirm;
        vm.cancel = cancel;

        $scope.$on("keypress:27", QuestTreeService.escapeKeyPressed);
        $scope.$on("keypress:46", QuestTreeService.deleteKeyPressed);

        $timeout(init);

        ////////////////

        function init() {
            QuestTreeService.init(vm.treeRoot);
        }

        function confirm() {
            QuestTreeService.saveTree();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();