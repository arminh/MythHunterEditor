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
        vm.close = close;

        $scope.$on("keypress:27", QuestTreeService.escapeKeyPressed);
        $scope.$on("keypress:46", QuestTreeService.deleteKeyPressed);

        ////////////////

        function init() {
            QuestTreeService.init(treeRoot);

        }

        function close() {
            $modalInstance.close();
        }
    }

})();