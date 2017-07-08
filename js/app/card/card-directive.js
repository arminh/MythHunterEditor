/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .directive('card', card);

    card.$inject = ["$q"];

    /* @ngInject */
    function card($q) {
        var directive = {
            templateUrl: "js/app/card/card.tpl.html",
            bindToController: {
                card: "=",
                selected: "=?",
                edit: "=",
                menu: "="
            },
            controller: "CardController",
            controllerAs: 'cardCtrl',
            link: link,
            restrict: 'E',
            scope: {

            }
        };
        return directive;

        function link(scope, element, attrs, vm) {
        }
    }

})();

