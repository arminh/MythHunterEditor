/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .controller('DeckController', DeckController);

    DeckController.$inject = ["CollectionService"];

    /* @ngInject */
    function DeckController(CollectionService) {
        var vm = this;

        vm.removeCard = removeCard;
        ////////////////

        function removeCard(card) {
            vm.deck.removeCard(card.id);
        }
    }



})();

