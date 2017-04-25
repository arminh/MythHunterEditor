/**
 * Created by armin on 08.12.15.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .controller('QuestTreeController', QuestTreeController);

    QuestTreeController.$inject = ["$scope", 'QuestTreeService', "treeRoot", "$modalInstance"];

    /* @ngInject */
    function QuestTreeController($scope, QuestTreeService, treeRoot, $modalInstance) {
        var vm = this;
        vm.drawing = false;

        vm.init = init;
        vm.okClicked = okClicked;
        vm.close = close;

        $scope.$on("keypress:27", QuestTreeService.escapeKeyPressed);
        $scope.$on("keypress:46", QuestTreeService.deleteKeyPressed);

        ////////////////

        function init() {
            QuestTreeService.init(treeRoot);
        }

        function okClicked() {
            QuestTreeService.saveTree($modalInstance);
        }

        function close() {
            $modalInstance.close();
        }
    }

})();