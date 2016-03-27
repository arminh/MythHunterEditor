/**
 * Created by armin on 10.03.16.
 */

(function () {
    'use strict';

    angular
        .module('html')
        .controller('HtmlTextPreviewController', HtmlTextPreviewController);

    HtmlTextPreviewController.$inject = ["$sce", "htmlContent", "$modalInstance"];

    /* @ngInject */
    function HtmlTextPreviewController($sce, htmlContent, $modalInstance) {
        var vm = this;
        vm.content = $sce.trustAsHtml(htmlContent);
        vm.close = close;


        ////////////////

        function close() {
            $modalInstance.close();
        }
    }

})();

