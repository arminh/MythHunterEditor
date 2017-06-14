/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .controller('DeckController', DeckController);

    DeckController.$inject = [];

    /* @ngInject */
    function DeckController() {
        var vm = this;

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

