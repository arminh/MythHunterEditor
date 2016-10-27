/**
 * Created by Hannah on 20.06.2016.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('restrictInput', restrictInput);

    restrictInput.$inject = [];

    /* @ngInject */
    function restrictInput() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind("keypress", onKeyPress);

            function onKeyPress(evt) {
                var pattern = attrs["restrictInput"];
                var char = String.fromCharCode(evt.which);

                if(!char.match(pattern)) {
                    evt.preventDefault();
                }
            }
        }
    }

})();

