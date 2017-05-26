/**
 * Created by Hannah on 16.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('Collection', CollectionFactory);

    CollectionFactory.$inject = ["$q", "$log"];

    /* @ngInject */
    function CollectionFactory($q, $log) {
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
                if(!this.cards[i].getLoaded()) {
                    var cardPromise = this.cards[i].getFromRemote();
                    cardPromises.push(cardPromise);
                }
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
                if(!this.decks[i].getLoaded()) {
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
            for(var i = 0; i < this.cards.length; i++) {
                if(this.cards[i].remoteId == cardId) {
                    return this.cards[i];
                }
            }
        }

        function selectCard(cardId) {
            for(var i = 0; i < this.cards.length; i++) {
                if(this.cards[i].remoteId == cardId) {
                    this.cards[i].selected = true;
                }
            }
        }

        function clearSelections() {
            for(var i = 0; i < this.cards.length; i++) {
                this.cards[i].selected = false;
            }
        }
    }

})();

