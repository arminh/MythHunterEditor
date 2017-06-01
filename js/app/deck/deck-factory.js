/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .factory('Deck', DeckFactory);

    DeckFactory.$inject = ["$log", "$q", "BackendService", "MAX_CARD_IN_DECK", "MAX_DECK_CARDS"];

    /* @ngInject */
    function DeckFactory($log, $q, BackendService, MAX_CARD_IN_DECK, MAX_DECK_CARDS) {
        $log = $log.getInstance("Deck", debugging);

        function Deck() {
            this.id = -1;
            this.remoteId = 0;
            this.name = "";
            this.cardIds = [];
            this.cards = [];

            this.loadPromise = null;
            this.loaded = false;
            this.open = false;
            this.visible = true;
            this.changed = false;
            this.complete = false;
            this.droppedCard = {};
        }

        Deck.prototype = {
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            loadCards: loadCards,
            addCard: addCard,
            removeCard: removeCard,
            upload: upload,
            change: change,
            remove: remove,

            getId: getId,
            setId: setId,
            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getName: getName,
            setName: setName,
            getCards: getCards,
            setCards: setCards,
            getLoaded: getLoaded,
            setVisible: setVisible,
            getComplete: getComplete
        };

        return (Deck);

        ////////////////

        function DeckCard(id, amount) {
            this.id = id;
            this.card = null;
            this.style = {
                "background-image": "none"
            };
            this.amount = amount;
        }

        function getFromRemote(ownedCards) {
            $log.info("getFromRemote", this.remoteId);
            this.loadPromise = BackendService.getDeck(this.remoteId).then(success.bind(this));
            return this.loadPromise;

            function success(remoteDeck) {
                return this.initFromRemote(remoteDeck, ownedCards);
            }
        }

        function initFromRemote(remoteDeck, ownedCards) {
            this.name = remoteDeck.getName();
            this.cardIds = remoteDeck.getCardIds();
            return this.loadCards(ownedCards);
        }

        function loadCards(ownedCards) {
            $log.info("loadCards", this.cards);
            var promises = [];
            for (var i = 0; i < this.cardIds.length; i++) {
                for (var j = 0; j < ownedCards.length; j++) {
                    if (ownedCards[j].getRemoteId() == this.cardIds[i].getKey()) {
                        promises.push(ownedCards[j].getLoadPromise());
                    }
                }
            }

            this.loadPromise = $q.all(promises).then(function (cards) {
                for (var j = 0; j < cards.length; j++) {
                    var deckCard = new DeckCard(this.cardIds[j].getKey(), this.cardIds[j].getValue());
                    deckCard.card = cards[j];
                    deckCard.style["background-image"] =
                        "url(data:"
                        + cards[j].getImage().getType()
                        + ";base64,"
                        + cards[j].getImage().getImage()
                        + ")";
                    this.cards.push(deckCard);
                }

                this.loaded = true;
                this.complete = this.cards.length >= 20;

                $log.info("loadCards_success", this.cards);
                return this.cards;
            }.bind(this));

            return this.loadPromise;
        }

        function addCard(card) {
            $log.info("addCard", card);
            if (this.cards.length >= MAX_DECK_CARDS) {
                $log.info("addCard_fail: Deck full");
                return;
            }

            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id == card.getRemoteId()) {
                    if (this.cards[i].amount < MAX_CARD_IN_DECK) {
                        this.cards[i].amount++;
                        $log.info("addCard_success", this.cards[i]);
                    } else {
                        $log.info("addCard_fail: Maximum amount of this card in deck reached");
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
            this.cards.push(deckCard);
            this.complete = this.cards.length >= 20;
            $log.info("addCard_success", deckCard);
            console.log(this);
        }

        function removeCard(cardId) {
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id == cardId) {
                    if (this.cards[i].amount > 1) {
                        this.cards[i].amount--;
                    } else {
                        this.cards.splice(i, 1);
                    }
                    break;
                }
            }
            this.complete = this.cards.length >= 20;
        }

        function upload() {
            $log.info("upload", this);
            var remoteDeck = BackendService.createRemoteDeck(this);

            if (this.remoteId <= 0) {
                $log.info("add");
                this.loadPromise = BackendService.addDeck(remoteDeck).then(uploadSuccess.bind(this));
            } else {
                $log.info("update");
                this.loadPromise = BackendService.updateDeck(remoteDeck).then(uploadSuccess.bind(this));
            }

            return this.loadPromise;

                function uploadSuccess(result) {
                this.remoteId = result.getId();
                $log.info("upload_success", result.getId());
                return result.getId();
            }
        }

        function remove() {
            $log.info("remove", this);
            this.loadPromise = BackendService.deleteDeck(this.remoteId).then(function() {
                $log.info("remove_success", this.remoteId);
                return this.remoteId;
            }.bind(this));
            return this.loadPromise;
        }

        function change() {
            this.changed = true;
        }

        function getId() {
            return this.id;
        }

        function setId(value) {
            this.id = value;
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function setRemoteId(value) {
            this.remoteId = value;
        }

        function getName() {
            return this.name;
        }

        function setName(value) {
            this.name = value;
        }

        function getCards() {
            return this.cards;
        }

        function setCards(value) {
            this.cards = value;
        }

        function getLoaded() {
            return this.loaded;
        }

        function setVisible(value) {
            this.visible = value;
        }

        function getComplete() {
            return this.complete;
        }
    }

})();

