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
            scope: {
                dimensions: "=",
                callback: "&"
            }
        };
        return directive;

        function link(scope, element, attrs) {
            element.on("load", function(evt) {
                var el = $(evt.currentTarget);
                el.height("auto");
                el.width("auto");
                if(el.width() > el.height()) {
                    el.height("183px");
                } else {
                    el.width("214px");
                }
                scope.dimensions.width = el.width();
                scope.dimensions.height = el.height();
                scope.$apply(function() {
                    scope.callback();
                });
            });

        }
    }

})();

