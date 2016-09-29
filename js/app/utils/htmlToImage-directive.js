/**
 * Created by armin on 02.07.16.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('htmlToImage', htmlToImage);

        htmlToImage.$inject = [];

    /* @ngInject */
    function htmlToImage() {
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();

