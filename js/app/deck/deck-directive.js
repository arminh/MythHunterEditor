/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .directive('deck', deck);

    deck.$inject = ["DeckService"];

    /* @ngInject */
    function deck(DeckService) {
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

            vm.loadCardsPromise = vm.deck.getLoadCardsPromise().then(function(result) {
                vm.cards = result;
                vm.control.addCard = addCard;
                vm.control.clearDeck = clearDeck;
            });

            function addCard(card) {
                console.log("AddCard");
                DeckService.addCardToDeck(card, vm.cards);
                vm.deck.addCard(card.getRemoteId());
            }

            function clearDeck() {
                vm.cards.length = 0;
                vm.deck.clearCards();
            }
        }
    }

})();

