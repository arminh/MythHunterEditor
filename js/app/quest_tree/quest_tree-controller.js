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
        vm.close = close;

        ////////////////

        function init() {
            QuestTreeService.init(treeRoot);

        }

        function close() {
            $modalInstance.close();
        }
    }

})();