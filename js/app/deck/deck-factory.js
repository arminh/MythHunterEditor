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

            this.loadPromise = null;
            this.loaded = false;
            this.open = false;
            this.visible = true;
            this.changed = false;
            this.complete = false;
            this.cardCount = 0;
            this.droppedCard = {};
        }

        Deck.prototype = {
            constructor: Deck,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            initFromObject: initFromObject,
            addCard: addCard,
            removeCard: removeCard,
            clearCards: clearCards,
            countCard: countCard,
            countCards: countCards,
            checkCompleteness: checkCompleteness,
            upload: upload,
            change: change,
            remove: remove,

            getId: getId,
            setId: setId,
            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getName: getName,
            setName: setName,
            getCardIds: getCardIds,
            setCardIds: setCardIds,
            getLoaded: getLoaded,
            setVisible: setVisible,
            getComplete: getComplete,
            getToManyCards: getToManyCards,
            getCardCount: getCardCount
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

        function getFromRemote() {
            $log.info("getFromRemote", this.remoteId);
            this.loadPromise = BackendService.getDeck(this.remoteId).then(success.bind(this));
            return this.loadPromise;

            function success(remoteDeck) {
                return this.initFromRemote(remoteDeck);
            }
        }

        function initFromRemote(remoteDeck) {
            this.name = remoteDeck.getName();
            this.cardIds = remoteDeck.getCardIds();
            this.cardCount = this.countCards();
            this.checkCompleteness();
            return this;
        }

        function initFromObject(deckObject) {
            this.id = deckObject.id;
            this.remoteId = deckObject.remoteId;
            this.name = deckObject.name;
            this.cardCount = deckObject.cardCount;
            for (var i = 0; i < deckObject.cardIds.length; i++) {
                var cardId = new backend_com_wsdl_longToIntEntry();
                cardId.setKey(deckObject.cardIds[i]._key);
                cardId.setValue(deckObject.cardIds[i]._value);
                this.cardIds.push(cardId);
            }
        }

        function loadCards(ownedCards) {
            $log.info("loadCards", this.cardIds);
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

                $log.info("loadCards_success", this.cards);
                return this.cards;
            }.bind(this));

            return this.loadPromise;
        }

        function addCard(cardId) {
            $log.info("addCard", cardId);
            for (var i = 0; i < this.cardIds.length; i++) {
                if (this.cardIds[i].getKey() == cardId) {
                    var amount = this.cardIds[i].getValue();

                    if (amount < MAX_CARD_IN_DECK) {
                        this.cardIds[i].setValue(amount + 1);
                        this.checkCompleteness();
                        this.cardCount++;
                        $log.info("addCard_success", this.cardIds[i]);
                    } else {
                        $log.info("addCard_fail: Maximum amount of this card in deck reached");
                    }
                    return;
                }
            }

            var newCardId = new backend_com_wsdl_longToIntEntry();
            newCardId.setKey(cardId);
            newCardId.setValue(1);

            this.cardIds.push(newCardId);
            this.cardCount++;
        }

        function clearCards() {
            this.cardIds.length = 0;
            this.cardCount = 0;
        }

        function countCard(cardId) {
            for (var i = 0; i < this.cardIds.length; i++) {
                if (this.cardIds[i].getKey() == cardId) {
                    return this.cardIds[i].getValue();
                }
            }
        }

        function countCards() {
            var count = 0;
            for(var i = 0; i < this.cardIds.length; i++) {
                count += this.cardIds[i].getValue();
            }
            return count;
        }

        function removeCard(cardId) {
            for (var i = 0; i < this.cardIds.length; i++) {
                if (this.cardIds[i].getKey() == cardId) {
                    var amount = this.cardIds[i].getValue();
                    if (amount > 1) {
                        this.cardIds[i].setValue(amount-1);
                    } else {
                        this.cardIds.splice(i, 1);
                    }
                    this.cardCount--;
                    this.checkCompleteness();
                    break;
                }
            }
        }

        function checkCompleteness() {
            this.complete = this.countCards() >= 20;
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
            this.loadPromise = BackendService.deleteDeck(this.remoteId).then(function () {
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

        function getCardIds() {
            return this.cardIds;
        }

        function setCardIds(value) {
            this.cardIds = value;
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

        function getToManyCards() {
            return this.countCards() > MAX_DECK_CARDS;
        }

        function getCardCount() {
            return this.cardCount;
        }
    }

})();

