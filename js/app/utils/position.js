/**
 * Created by armin on 19.11.16.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('ngTop', ngTop);

    ngTop.$inject = [];

    /* @ngInject */
    function ngTop() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                top: "=",
                left: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch("top", function() {
                $(element).css("top", scope.top + "px");
            });
            scope.$watch("left", function() {
                $(element).css("left", scope.left + "px");
            });

            scope.$watch(function() {
                return $(element).position().top;
            }, function() {
                scope.top = $(element).position().top;
            });
            scope.$watch(function() {
                return $(element).position().left;
            }, function() {
                scope.left = $(element).position().left;
            });
        }
    }

})();

