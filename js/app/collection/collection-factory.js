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
        function Collection(cards) {
            this.cards = cards;
        }

        Collection.prototype = {
            addCard: addCard,
            loadCards: loadCards,
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

            $q.all(cardPromises).then(function (results) {
                for(var j = 0; j < results.length; j++) {
                    results[j].initActions(actions);
                }
                $log.info("loadCards_success", results);
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

