/**
 * Created by armin on 08.12.15.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .controller('QuestTreeController', QuestTreeController);

    QuestTreeController.$inject = ['QuestTreeService', "treeRoot", "$modalInstance"];

    /* @ngInject */
    function QuestTreeController(QuestTreeService, treeRoot, $modalInstance) {
        var vm = this;
        vm.drawing = false;

        vm.init = init;
        vm.toggleDrawing = toggleDrawing;
        vm.close = close;

        ////////////////

        function init() {
            QuestTreeService.init(treeRoot);

        }

        function toggleDrawing() {
            console.log(vm.drawing);
            if(vm.drawing) {
                QuestTreeService.activateDraw();

            } else {
                QuestTreeService.deactivateDraw();
            }
        }

        function close() {
            $modalInstance.close();
        }
    }

})();