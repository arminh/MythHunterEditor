/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log", "$q", "CardService", "ActionService"];

    /* @ngInject */
    function CollectionService($log, $q, CardService, ActionService) {
        $log = $log.getInstance("CollectionService", debugging);

        var user = null;

        var service = {
            init: init,
            getCreatedCards: getCreatedCards,
            createCard: createCard
        };
        return service;

        ////////////////

        function init(currentUser) {
            user = currentUser;
            return $q.when(ActionService.getActions());
        }

        function getCreatedCards(actions) {
            $log.info("getCreatedCards");
            var createdCards = user.getCreatedCards();

            var cardPromises = [];

            for (var i = 0; i < createdCards.length; i++) {
                var cardPromise = createdCards[i].getFromRemote();
                cardPromises.push(cardPromise);
            }

            $q.all(cardPromises).then(function (results) {
                for(var j = 0; j < results.length; j++) {
                    results[j].initActions(actions);
                }
                $log.info("getCreatedCards_success", results);
            });

            return createdCards;
        }

        function createCard() {
            return CardService.createCard(user);
        }
    }

})();

