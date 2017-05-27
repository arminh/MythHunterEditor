/**
 * Created by Hannah on 16.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('Collection', CollectionFactory);

    CollectionFactory.$inject = ["$q", "$log", "ActionService"];

    /* @ngInject */
    function CollectionFactory($q, $log, ActionService) {
        $log = $log.getInstance("Collection", debugging);
        function Collection(cards, createdCards, decks) {
            this.cards = cards;
            this.createdCards = createdCards;
            this.decks = decks;
        }

        Collection.prototype = {
            addCreatedCard: addCreatedCard,
            loadCards: loadCards,
            addDeck: addDeck,
            loadDecks: loadDecks,
            getCards: getCards,
            getCreatedCards: getCreatedCards,
            getCreatedCard: getCreatedCard,
            selectCreatedCard: selectCreatedCard,
            clearSelections: clearSelections
        };

        return (Collection);

        ////////////////

        function addCreatedCard(card) {
            this.createdCards.push(card);
        }

        function loadCards(actions) {
            var cardPromises = [];

            $log.info("loadCards");
            for (var i = 0; i < this.cards.length; i++) {
                if (!this.cards[i].getLoaded()) {
                    var cardPromise = this.cards[i].getFromRemote().then(setActions.bind(this.cards[i]));
                    cardPromises.push(cardPromise);
                }
            }

            for (var i = 0; i < this.createdCards.length; i++) {
                if (!this.createdCards[i].getLoaded()) {
                    var cardPromise = this.createdCards[i].getFromRemote().then(setActions.bind(this.createdCards[i]));
                    cardPromises.push(cardPromise);
                }
            }

            function setActions() {
                var actionIds = this.getActionIds();
                for (var i = 0; i < actionIds.length; i++) {
                    var action = ActionService.getAction(actionIds[i]);
                    if(action) {
                        this.addAction(action);
                    } else {
                        $log.error("Card action not found: ", actionIds[i]);
                    }
                }
                return this;
            }

            return $q.all(cardPromises).then(function (results) {
                $log.info("loadCards_success", results);

                return null;
            });
        }

        function addDeck(deck) {
            this.decks.push(deck);
        }

        function loadDecks() {
            var deckPromises = [];

            $log.info("loadDecks");
            for (var i = 0; i < this.decks.length; i++) {
                if (!this.decks[i].getLoaded()) {
                    var deckPromise = this.decks[i].getFromRemote();
                    deckPromises.push(deckPromise);
                }
            }

            return $q.all(deckPromises).then(function (results) {
                $log.info("loadDecks_success", results);
                return null;
            });

        }

        function getCards() {
            return this.cards;
        }

        function getCreatedCards() {
            return this.createdCards;
        }

        function getCreatedCard(cardId) {
            for (var i = 0; i < this.createdCards.length; i++) {
                if (this.createdCards[i].remoteId == cardId) {
                    return this.createdCards[i];
                }
            }
        }

        function selectCreatedCard(cardId) {
            for (var i = 0; i < this.createdCards.length; i++) {
                if (this.createdCards[i].remoteId == cardId) {
                    this.createdCards[i].selected = true;
                }
            }
        }

        function clearSelections() {
            for (var i = 0; i < this.cards.length; i++) {
                this.cards[i].selected = false;
            }
        }
    }

})();

