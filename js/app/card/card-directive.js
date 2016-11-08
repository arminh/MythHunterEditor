/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .directive('cardPreview', cardPreview);

    cardPreview.$inject = ["$q"];

    /* @ngInject */
    function cardPreview($q) {
        var directive = {
            templateUrl: "js/app/card/card.tpl.html",
            bindToController: {
                card: "=",
                editable: "="
            },
            controller: "CardController",
            controllerAs: 'cardPreview',
            link: link,
            restrict: 'E',
            scope: {

            }
        };
        return directive;

        function link(scope, element, attrs, vm) {
            console.log(vm.card.image);
        }
    }

    // ControllerName.$inject = ['Card'];
    //
    // /* @ngInject */
    // function ControllerName(Card) {
    //
    // }

})();

