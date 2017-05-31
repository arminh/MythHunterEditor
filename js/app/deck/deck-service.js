/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .factory('DeckService', DeckService);

    DeckService.$inject = ["$log", "Deck"];

    /* @ngInject */
    function DeckService($log, Deck) {
        $log = $log.getInstance("DeckService", debugging);

        var service = {
            createDeck: createDeck
        };
        return service;

        ////////////////

        function createDeck() {
            var deck = new Deck();
            deck.setName("New deck");
            return deck;
        }
    }

})();

