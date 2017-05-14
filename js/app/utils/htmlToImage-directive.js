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
            scope: {
                control: "=",
                callback: "&"
            }
        };
        return directive;

        function link(scope, element, attrs) {
            console.log("Conversion");
            scope.internalControl = scope.control || {};
            scope.internalControl.convert = function() {
                html2canvas(element, {
                    onrendered: function(canvas) {
                        console.log(canvas);
                        $("#card-editor-container").append(canvas);
                        scope.$apply(function() {
                            scope.callback(canvas);
                        });
                    }
                });
            }
        }
    }

})();

