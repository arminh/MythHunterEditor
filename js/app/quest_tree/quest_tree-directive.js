/**
 * Created by armin on 10.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .directive('questTree', questTree);

    questTree.$inject = [];

    /* @ngInject */
    function questTree() {
        var directive = {
            bindToController: {
                treeroot: "="
            },
            controller: ControllerName,
            controllerAs: 'questTree',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            
        }
    }

    ControllerName.$inject = [''];

    /* @ngInject */
    function ControllerName() {

    }

})();

