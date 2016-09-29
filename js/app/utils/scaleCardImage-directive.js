/**
 * Created by armin on 02.07.16.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('scaleCardImage', scaleCardImage);

    scaleCardImage.$inject = [];

    /* @ngInject */
    function scaleCardImage() {
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
            element.on("load", function(evt) {
                var el = $(evt.currentTarget);
                if(el.width() > el.height()) {
                    el.addClass("landscape");
                } else {
                    el.addClass("portrait");
                }
            });

        }
    }

})();

