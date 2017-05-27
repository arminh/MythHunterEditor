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
            this.cards = cards.concat(createdCards);
            this.decks = decks;
        }

        Collection.prototype = {
            addCard: addCard,
            loadCards: loadCards,
            addDeck: addDeck,
            loadDecks: loadDecks,
            getCards: getCards,
            getCard: getCard,
            selectCard: selectCard,
            clearSelections: clearSelections
        };

        return (Collection);

        ////////////////

        function addCard(card) {
            this.cards.push(card);
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

        function getCard(cardId) {
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].remoteId == cardId) {
                    return this.cards[i];
                }
            }
        }

        function selectCard(cardId) {
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].remoteId == cardId) {
                    this.cards[i].selected = true;
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

