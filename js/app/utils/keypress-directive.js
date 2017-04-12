/**
 * Created by Hannah on 02.03.2016.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('keypressEvents', keypressEvents);

    keypressEvents.$inject = ['$document', "$rootScope"];

    /* @ngInject */
    function keypressEvents($document, $rootScope) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            $document.bind('keydown', function (e) {
                $rootScope.$broadcast('keypress', e);
                $rootScope.$broadcast('keypress:' + e.which, e);
            });
        }
    }

})();