/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log", "$q", "$mdDialog", "$translate", "BackendService", "CardService", "DeckService", "Collection", "Deck", "MIN_DECK_CARDS", "MAX_DECK_CARDS", "CreationTutorialFlags"];

    /* @ngInject */
    function CollectionService($log, $q, $mdDialog, $translate, BackendService, CardService, DeckService, Collection, Deck, MIN_DECK_CARDS, MAX_DECK_CARDS, CreationTutorialFlags) {
        $log = $log.getInstance("CollectionService", debugging);

        var originalDeck = null;
        var deckCount = 0;

        var service = {
            createCollection: createCollection,
            loadCollection: loadCollection,
            loadCollectionEnemy: loadCollectionEnemy,
            loadCollectionCreatedCards: loadCollectionCreatedCards,
            createCard: createCard,
            createDeck: createDeck,
            showCreateDeckDialog: showCreateDeckDialog,
            getCardById: getCardById,
            openDeck: openDeck,
            saveDeck: saveDeck,
            removeDeck: removeDeck

        };
        return service;

        ////////////////

        function createCollection(cards, createdCards, decks) {
            for (var i = 0; i < decks.length; i++) {
                decks[i].setId(deckCount++);
            }
            return new Collection(cards, createdCards, decks)
        }

        function loadCollection(user) {

            var collection = user.getCollection();
            collection.load(true, true, true);
            return collection;
        }

        function loadCollectionEnemy(user) {

            var collection = user.getCollection();
            return collection.load(true, true, false);
        }

        function loadCollectionCreatedCards(user) {
            var collection = user.getCollection();
            collection.load(false, true, false);
            return collection;
        }


        function createCard(user) {
            return CardService.createCard(user).then(function(card) {
                if(card) {
                    BackendService.abortCardRequests();
                    return card.getLoadPromise().then(function() {
                        loadCollection(user);
                        return card;
                    })
                } else {
                    return card;
                }
            });
        }

        function createDeck(collection) {
            var deck = DeckService.createDeck();
            deck.setId(deckCount++);
            collection.addDeck(deck);
            return deck;
        }

        function getCardById(cardId, collection, enemy) {
            var card = collection.getCard(cardId);
            if (!card && enemy) {
                card = collection.getCreatedCard(cardId);
            }
            return card;
        }

        function openDeck(deck, ownedCards) {
            originalDeck = deck;
            var editDeck = angular.copy(deck);
            editDeck.setLoadCardsPromise(DeckService.loadCards(deck, ownedCards));
            return editDeck;

        }

        function showCreateDeckDialog(user, chooseTutorial) {
            return $mdDialog.show({
                templateUrl: 'js/app/deck/create-deck-dialog/create-deck-dialog.tpl.html',
                controller: 'CreateDeckDialogController',
                controllerAs: "createDeck",
                bindToController: true,
                locals: {
                    tutorial: !user.getCreationTutorialFlag(CreationTutorialFlags.DECK),
                    chooseTutorial: chooseTutorial
                }
            });
        }

        function saveDeck(currentDeck, collection, evt) {

            if (!currentDeck.getComplete()) {

                if (otherCompleteDeckExists(collection, currentDeck)) {
                    var confirm = $mdDialog.confirm()
                        .title($translate.instant('TITLE_SAVING_INCOMPLETE_DECK'))
                        .htmlContent($translate.instant('TEXT_NOT_ENOUGH_CARDS') + ' (' + MIN_DECK_CARDS + ').<br>' + $translate.instant('TEXT_NOT_ENOUGH_CARDS_SAVE'))
                        .ariaLabel('Save deck')
                        .targetEvent(evt)
                        .ok($translate.instant('BUTTON_OK'))
                        .cancel($translate.instant('BUTTON_CANCEL'));

                    return $mdDialog.show(confirm).then(function () {
                        return finishEditing(currentDeck);
                    });
                } else {
                    var alert = $mdDialog.alert()
                        .title($translate.instant('TITLE_SAVING_DECK_FAILED'))
                        .htmlContent($translate.instant('TEXT_NOT_ENOUGH_CARDS') + ' (' + MIN_DECK_CARDS + ').<br>' + $translate.instant('TEXT_NOT_ENOUGH_CARDS_ERROR'))
                        .ariaLabel('Save deck')
                        .targetEvent(evt)
                        .ok($translate.instant('BUTTON_CLOSE'));

                    return $mdDialog.show(alert).then(function () {
                        return $q.reject();
                    });
                }

            } else if (currentDeck.getToManyCards()) {
                var alert = $mdDialog.alert()
                    .title($translate.instant('ERROR_DECK'))
                    .htmlContent($translate.instant('ERROR_DECK_MAX_CARDS') + ' (' + MAX_DECK_CARDS + ')')
                    .ariaLabel('Save deck')
                    .targetEvent(evt)
                    .ok('Close');

                return $mdDialog.show(alert).then(function () {
                    return $q.reject();
                });
            } else {
                return finishEditing(currentDeck);
            }

        }

        function otherCompleteDeckExists(collection, deck) {
            var completeDeckExists = false;
            var decks = collection.getDecks();
            for (var i = 0; i < decks.length; i++) {
                if (decks[i].getComplete() && decks[i].getRemoteId() != deck.getRemoteId()) {
                    completeDeckExists = true;
                }
            }

            return completeDeckExists;
        }

        function finishEditing(currentDeck) {
            originalDeck.setName(currentDeck.getName());
            originalDeck.setCardIds(currentDeck.getCardIds());
            originalDeck.change();
            return originalDeck.upload();
        }

        function removeDeck(collection, deck, evt) {
            if (otherCompleteDeckExists(collection, deck)) {
                var confirm = $mdDialog.confirm()
                    .title($translate.instant("TITLE_DELETE_DECK"))
                    .htmlContent($translate.instant("TEXT_DELETE_DECK"))
                    .ariaLabel('Delete deck')
                    .targetEvent(evt)
                    .ok($translate.instant("BUTTON_CONFIRM"))
                    .cancel($translate.instant("BUTTON_CANCEL"));

                return $mdDialog.show(confirm).then(function () {
                    return deck.remove().then(function () {
                        collection.removeDeck(deck.getId());
                        return deck.getId();
                    });
                });
            } else {
                var alert = $mdDialog.alert()
                    .title($translate.instant("ERROR_DECK_DELETE"))
                    .htmlContent($translate.instant("ERROR_DELETE_DECK_ONE_COMPLETE"))
                    .ariaLabel('Delete deck')
                    .targetEvent(evt)
                    .ok($translate.instant("BUTTON_OK"));

                return $mdDialog.show(alert).then(function () {
                    return $q.reject();
                });
            }
        }
    }

})();

