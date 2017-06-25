/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .controller('DeckController', DeckController);

    DeckController.$inject = ["MAX_DECK_CARDS", "MIN_DECK_CARDS"];

    /* @ngInject */
    function DeckController(MAX_DECK_CARDS, MIN_DECK_CARDS) {
        var vm = this;
        vm.maxCards = MAX_DECK_CARDS;
        vm.minCards = MIN_DECK_CARDS;

        vm.removeCard = removeCard;
        ////////////////

        function removeCard(card) {
            vm.deck.removeCard(card.id);
            for(var i = 0; i < vm.cards.length; i++) {
                if(vm.cards[i].id == card.id) {
                    if(vm.cards[i].amount > 1) {
                        vm.cards[i].amount--;
                    } else {
                        vm.cards.splice(i, 1);
                    }
                    break;

                }
            }
        }
    }



})();

