/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log", "CardService", "DeckService"];

    /* @ngInject */
    function CollectionService($log, CardService, DeckService) {
        $log = $log.getInstance("CollectionService", debugging);

        var user = null;

        var service = {
            loadCollection: loadCollection,
            createCard: createCard,
            createDeck: createDeck
        };
        return service;

        ////////////////

        function loadCollection(user) {

            var collection = user.getCollection();
            collection.load();
            return collection;
        }

        function createCard() {
            return CardService.createCard(user);
        }

        function createDeck(collection) {
            var deck = DeckService.createDeck();
            collection.addDeck(deck);
            return deck;
        }
    }

})();

