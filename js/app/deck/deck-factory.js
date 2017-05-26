/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .factory('Deck', DeckFactory);

    DeckFactory.$inject = ["$log", "BackendService"];

    /* @ngInject */
    function DeckFactory($log, BackendService) {
        $log = $log.getInstance("Deck", debugging);

        function Deck() {
            this.remoteId = 0;
            this.name = "";
            this.cardIds = [];
            this.cards = [];

            this.loaded = false;
            this.control = {
                showCardList: null,
                hideCardList: null
            }
        }

        Deck.prototype = {
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            loadCards: loadCards,
            addCard: addCard,
            removeCard: removeCard,
            showCardList: showCardList,
            hideCardList: hideCardList,

            setRemoteId: setRemoteId,
            getName: getName,
            setName: setName,
            getCards: getCards,
            getLoaded: getLoaded
        };

        return (Deck);

        ////////////////

        function getFromRemote() {
            $log.info("getFromRemote", this.remoteId);
            this.loadPromise = BackendService.getDeck(this.remoteId).then(success.bind(this));
            return this.loadPromise;

            function success(remoteDeck) {
                this.initFromRemote(remoteDeck);
                return this;
            }
        }

        function initFromRemote(remoteDeck) {
            this.name = remoteDeck.getName();
            this.cardIds = remoteDeck.getCardIds();
        }

        function loadCards(ownedCards) {
            for(var i = 0; i < this.cardIds.length; i++) {
                var cardId = this.cardIds[i].getRemoteId();
                for(var j = 0; j < ownedCards.length; j++) {
                    if(ownedCards[j].getRemoteId() == cardId) {
                        this.cards.push(ownedCards[j]);
                    }
                }
            }
            this.loaded = true;
        }

        function addCard(card) {
            this.cards.push(card);
        }

        function removeCard(cardId) {
            for(var i = 0; i < this.cards.length; i++) {
                if(this.cards[i].getRemoteId() == cardId) {
                    this.cards.splice(i, 1);
                    break;
                }
            }
        }

        function showCardList() {
            this.control.showCardList();
        }

        function hideCardList() {
            this.control.hideCardList();
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

        function getLoaded() {
            return this.loaded;
        }
    }

})();

