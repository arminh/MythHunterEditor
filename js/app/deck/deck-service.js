/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .factory('DeckService', DeckService);

    DeckService.$inject = ["$log", "$q", "Deck", "MAX_CARD_IN_DECK", "MAX_DECK_CARDS"];

    /* @ngInject */
    function DeckService($log, $q, Deck, MAX_CARD_IN_DECK, MAX_DECK_CARDS) {
        $log = $log.getInstance("DeckService", debugging);

        var service = {
            createDeck: createDeck,
            loadCards: loadCards,
            addCardToDeck: addCardToDeck,
        };
        return service;

        ////////////////

        function DeckCard(id, amount) {
            this.id = id;
            this.card = null;
            this.style = {
                "background-image": "none"
            };
            this.amount = amount;
        }

        function createDeck() {
            var deck = new Deck();
            deck.setName("New deck");
            return deck;
        }

        function loadCards(deck, ownedCards) {
            var cardIds = deck.getCardIds();
            $log.info("loadCards", cardIds);
            var promises = [];
            for (var i = 0; i < cardIds.length; i++) {
                for (var j = 0; j < ownedCards.length; j++) {
                    if (ownedCards[j].getRemoteId() == cardIds[i].getKey()) {
                        promises.push(ownedCards[j].getLoadPromise());
                    }
                }
            }

            var loadPromise = $q.all(promises).then(function (cards) {
                var deckCards = [];
                for (var j = 0; j < cards.length; j++) {
                    var deckCard = new DeckCard(cardIds[j].getKey(), cardIds[j].getValue());
                    deckCard.card = cards[j];
                    deckCard.style["background-image"] =
                        "url(data:"
                        + cards[j].getImage().getType()
                        + ";base64,"
                        + cards[j].getImage().getImage()
                        + ")";
                    deckCards.push(deckCard);
                }

                $log.info("loadCards_success", deckCards);
                return deckCards;
            });

            return loadPromise;
        }

        function addCardToDeck(card, cards) {

            for(var i = 0; i < cards.length; i++) {
                if(cards[i].id == card.getRemoteId()) {
                    if(cards[i].amount < MAX_CARD_IN_DECK) {
                        cards[i].amount++;
                    }
                    return;
                }
            }

            var deckCard = new DeckCard(card.getRemoteId(), 1);
            deckCard.card = card;
            deckCard.style["background-image"] =
                "url(data:"
                + card.getImage().getType()
                + ";base64,"
                + card.getImage().getImage()
                + ")";
            cards.push(deckCard);
            $log.info("addCard_success", deckCard);
        }
    }

})();

