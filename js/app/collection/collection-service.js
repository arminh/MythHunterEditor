/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log", "CardService", "DeckService", "Collection"];

    /* @ngInject */
    function CollectionService($log, CardService, DeckService, Collection) {
        $log = $log.getInstance("CollectionService", debugging);

        var user = null;
        var originalDeck = null;
        var deckCount = 0;

        var service = {
            createCollection: createCollection,
            loadCollection: loadCollection,
            createCard: createCard,
            createDeck: createDeck,
            addCardToDeck: addCardToDeck,
            addDroppedCard: addDroppedCard,
            openDeck: openDeck,
            saveDeck: saveDeck,
            removeDeck: removeDeck

        };
        return service;

        ////////////////

        function createCollection(cards, createdCards, decks) {
            for(var i = 0; i < decks.length; i++) {
                decks[i].setId(deckCount++);
            }
            return new Collection(cards, createdCards, decks)
        }


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
            deck.setId(deckCount++);
            collection.addDeck(deck);
            return deck;
        }

        function addCardToDeck(card, deck) {
            if (deck && card.getLoaded()) {
                deck.addCard(card);
            }
        }

        function addDroppedCard(cardId, deck, collection) {
            var card = collection.getCard(cardId);
            addCardToDeck(card, deck);
        }

        function openDeck(deck) {
            originalDeck = deck;
            return angular.copy(deck);
        }

        function saveDeck(currentDeck) {
            originalDeck.setName(currentDeck.getName());
            originalDeck.setCards(currentDeck.getCards());
            originalDeck.change();
            return originalDeck.upload();
        }

        function removeDeck(collection, deck) {
            return deck.remove().then(function () {
                collection.removeDeck(deck.getId());
                return deck.getId();
            });
        }
    }

})();

