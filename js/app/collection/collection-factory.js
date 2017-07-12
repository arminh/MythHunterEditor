/**
 * Created by Hannah on 16.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('Collection', CollectionFactory);

    CollectionFactory.$inject = ["$q", "$log", "ActionService", "DeckService"];

    /* @ngInject */
    function CollectionFactory($q, $log, ActionService, DeckService) {
        $log = $log.getInstance("Collection", debugging);
        function Collection(cards, createdCards, decks) {
            this.cards = cards;
            this.createdCards = createdCards;
            this.decks = decks;

            this.loaded = false;
        }

        Collection.prototype = {
            load: load,
            addCreatedCard: addCreatedCard,
            addDeck: addDeck,
            removeDeck: removeDeck,
            getDecks: getDecks,
            getCards: getCards,
            getCard: getCard,
            getAllCards: getAllCards,
            getCreatedDecks: getCreatedDecks,
            getCreatedCards: getCreatedCards,
            getCreatedCard: getCreatedCard,
            selectCreatedCard: selectCreatedCard,
            clearSelections: clearSelections,
            getLoaded: getLoaded
        };

        return (Collection);

        ////////////////



        function load(loadCards, loadCreatedCards, loadDecks) {
            return $q.when(ActionService.getActions()).then(function() {
                return loadCollection.bind(this)(loadCards, loadCreatedCards, loadDecks);
            }.bind(this));
        }

        function loadCollection(loadCards, loadCreatedCards, loadDecks) {
            var promises = [];

            $log.info("loadCards");
            if(loadCards) {
                for (var i = 0; i < this.cards.length; i++) {
                    if (!this.cards[i].getLoaded()) {
                        var cardPromise = this.cards[i].getFromRemote().then(setActions.bind(this.cards[i]));
                        promises.push(cardPromise);
                    }
                }
            }

            if(loadCreatedCards) {
                for (var i = 0; i < this.createdCards.length; i++) {
                    if (!this.createdCards[i].getLoaded()) {
                        this.createdCards[i].setCreatedByUser(true);
                        var cardPromise = this.createdCards[i].getFromRemote().then(setActions.bind(this.createdCards[i]));
                        promises.push(cardPromise);
                    }
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
            if(loadDecks) {
                promises.push(loadUserDecks.bind(this)(this.cards));
            }

            $q.all(promises).then(function (results) {
                $log.info("loadCards_success", results);
            }.bind(this));

            return this;
        }

        function loadUserDecks(ownedCards) {
            var deckPromises = [];

            $log.info("loadDecks");
            for (var i = 0; i < this.decks.length; i++) {
                if (!this.decks[i].getLoaded()) {
                    var deckPromise = this.decks[i].getFromRemote(ownedCards);
                    deckPromises.push(deckPromise);
                }
            }

            return $q.all(deckPromises).then(function (results) {
                $log.info("loadDecks_success", results);
                this.loaded = true;
                return null;
            }.bind(this));
        }

        function addCreatedCard(card) {
            this.createdCards.push(card);
        }

        function addDeck(deck) {
            this.decks.push(deck);
        }

        function removeDeck(id) {
            for(var i = 0; i < this.decks.length; i++) {
                if(this.decks[i].id == id) {
                    this.decks.splice(i, 1);
                }
            }
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

        function getAllCards() {
            return this.cards.concat(this.createdCards);
        }

        function getCreatedDecks() {
            return this.decks;
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

        function getDecks() {
            return this.decks;
        }

        function getLoaded() {
            return this.loaded;
        }
    }

})();

