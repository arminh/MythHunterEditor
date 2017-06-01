/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log", "$q", "$mdDialog", "CardService", "DeckService", "Collection", "MIN_DECK_CARDS"];

    /* @ngInject */
    function CollectionService($log, $q, $mdDialog, CardService, DeckService, Collection, MIN_DECK_CARDS) {
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

        function saveDeck(currentDeck, collection, evt) {

            if(!currentDeck.getComplete()) {

                if(otherCompleteDeckExists(collection, currentDeck)) {
                    var confirm = $mdDialog.confirm()
                        .title('Saving incomplete deck')
                        .htmlContent('Your deck does not contain the minimum number of cards (' + MIN_DECK_CARDS + ').<br>Are you sure you want to save?')
                        .ariaLabel('Save deck')
                        .targetEvent(evt)
                        .ok('Confirm')
                        .cancel('Cancel');

                    return $mdDialog.show(confirm).then(function() {
                        return finishEditing(currentDeck);
                    });
                } else {
                    var alert = $mdDialog.alert()
                        .title('Saving deck failed')
                        .htmlContent('Your deck does not contain the minimum number of cards (' + MIN_DECK_CARDS + ').<br>You must have at least one complete deck.')
                        .ariaLabel('Save deck')
                        .targetEvent(evt)
                        .ok('Close');

                    return $mdDialog.show(alert).then(function() {
                        return $q.reject();
                    });
                }

            } else {
                return finishEditing(currentDeck);
            }

        }

        function otherCompleteDeckExists(collection, deck) {
            var completeDeckExists = false;
            var decks = collection.getDecks();
            for(var i = 0; i < decks.length; i++) {
                if(decks[i].getComplete() && decks[i].getRemoteId() != deck.getRemoteId()) {
                    completeDeckExists = true;
                }
            }

            return completeDeckExists;
        }

        function finishEditing(currentDeck) {
            originalDeck.setName(currentDeck.getName());
            originalDeck.setCards(currentDeck.getCards());
            originalDeck.change();
            return originalDeck.upload();
        }

        function removeDeck(collection, deck, evt) {
            if(otherCompleteDeckExists(collection, deck)) {
                var confirm = $mdDialog.confirm()
                    .title('Delete deck')
                    .htmlContent('Are you sure you want to delete your Deck <b>' + deck.getName() + '</b> ?')
                    .ariaLabel('Delete deck')
                    .targetEvent(evt)
                    .ok('Confirm')
                    .cancel('Cancel');

                return $mdDialog.show(confirm).then(function() {
                    return deck.remove().then(function () {
                        collection.removeDeck(deck.getId());
                        return deck.getId();
                    });
                });
            } else {
                var alert = $mdDialog.alert()
                    .title('Deleting deck failed')
                    .htmlContent('You must have at least one complete deck.')
                    .ariaLabel('Delete deck')
                    .targetEvent(evt)
                    .ok('Close');

                return $mdDialog.show(alert).then(function() {
                    return $q.reject();
                });
            }
        }
    }

})();

