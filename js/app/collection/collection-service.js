/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log", "$q", "$timeout", "CardService", "ActionService", "DeckService"];

    /* @ngInject */
    function CollectionService($log, $q, $timeout, CardService, ActionService, DeckService) {
        $log = $log.getInstance("CollectionService", debugging);

        var user = null;

        var service = {
            init: init,
            getCreatedCards: getCreatedCards,
            loadCollection: loadCollection,
            createCard: createCard,
            createDeck: createDeck
        };
        return service;

        ////////////////

        function init(currentUser) {
            user = currentUser;
            return $q.when(ActionService.getActions());
        }

        function loadCollection(actions) {

            var collection = user.getCollection();
            collection.loadCards(actions);
            collection.loadDecks();
            return collection;
        }

        function getCreatedCards() {
            return user.getCreatedCards();
        }

        function createCard() {
            return CardService.createCard(user);
        }

        function createDeck(collection) {
            var deck = DeckService.createDeck();
            collection.addDeck(deck);
            $timeout(showCardList);

            function showCardList() {
                deck.showCardList();
            }
        }
    }

})();

