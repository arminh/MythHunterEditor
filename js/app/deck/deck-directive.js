/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .directive('deck', deck);

    deck.$inject = [];

    /* @ngInject */
    function deck() {
        var directive = {
            templateUrl: "js/app/deck/deck.tpl.html",
            bindToController: {
                deck: "=",
                user: "=",
                control: "="
            },
            controller: "DeckController",
            controllerAs: 'deckCtrl',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, vm) {
            vm.control.showCardList = showCardList;
            vm.control.hideCardList = hideCardList;

            function showCardList() {
                vm.showCardList = true;
            }

            function hideCardList() {
                vm.showCardList = false;
            }
        }
    }

})();

