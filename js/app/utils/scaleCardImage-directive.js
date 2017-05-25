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
            var originalSize = {
                width: 0,
                height: 0
            };

            var scaledSize = {
                width: 0,
                height: 0
            };

            element.on("load", function(evt) {
                var el = $(evt.currentTarget);
                el.height("auto");
                el.width("auto");

                originalSize.width = el.width();
                originalSize.height = el.height()

                if(el.width() > el.height() * 214 / 183) {
                    el.height("183px");
                } else {
                    el.width("214px");
                }
                scope.dimensions.width = el.width();
                scope.dimensions.height = el.height();

                scaledSize.width = el.width();
                scaledSize.height = el.height();

                scope.$apply(function() {
                    var callback = scope.callback();
                    callback(originalSize, scaledSize);
                });
            });

        }
    }

})();

