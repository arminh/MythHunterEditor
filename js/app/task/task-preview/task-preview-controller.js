/**
 * Created by armin on 10.03.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('TaskPreviewController', TaskPreviewController);

    TaskPreviewController.$inject = ["$sce", "htmlContent", "targetContent", "$modalInstance"];

    /* @ngInject */
    function TaskPreviewController($sce, htmlContent, targetContent, $modalInstance) {
        var vm = this;
        vm.showTarget = false;
        vm.html = null;
        vm.targetHtml = null;

        vm.showTargetHtml = showTargetHtml;
        vm.hideTargetHtml = hideTargetHtml;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
            vm.html = $sce.trustAsHtml(htmlContent);
            if(targetContent) {
                vm.targetHtml = $sce.trustAsHtml(targetContent);
            }
        }

        function showTargetHtml() {
            vm.showTarget = true;
        }

        function hideTargetHtml() {
            vm.showTarget = false;
        }

        function close() {
            $modalInstance.close();
        }
    }

})();

