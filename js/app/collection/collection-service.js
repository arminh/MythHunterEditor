/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log", "$q", "$modal", "BackendService", "CardType", "Card", "Action"];

    /* @ngInject */
    function CollectionService($log, $q, $modal, BackendService, CardType, Card, Action) {
        $log = $log.getInstance("CollectionService", debugging);

        var user = null;
        var actions = [];

        var service = {
            setUser: setUser,
            getCreatedCards: getCreatedCards,
            getActions: getActions,
            getAction: getAction,
            createCard: createCard
        };
        return service;

        ////////////////

        function setUser(currentUser) {
            user = currentUser;
        }

        function getCreatedCards(actions) {
            $log.info("getCreatedCards");
            var createdCards = user.getCreatedCards();

            var cardPromises = [];

            for (var i = 0; i < createdCards.length; i++) {
                var cardPromise = createdCards[i].getFromRemote(actions);
                cardPromises.push(cardPromise);
            }

            return $q.all(cardPromises).then(function (results) {
                $log.info("getCreatedCards_success", results);
                return results;
            });
        }

        function getActions() {
            $log.info("getActions");
            return BackendService.getAllActionsOfCardType(CardType.MONSTER).then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    var action = new Action();
                    action.initFromRemote(results[i]);
                    actions.push(action);
                }
                $log.info("getActions_success", actions);
                return actions;
            });
        }

        function getAction(id) {
            for (var i = 0; i < actions.length; i++) {
                if(actions[i].getRemoteId() == id) {
                    return actions[i];
                }
            }
        }


        function createCard() {
            $log.info("createCard");

            var card = new Card();
            return openCardCreatorDialog(card).then(uploadCard);

            function uploadCard() {

                return card.upload().then(function (result) {
                    user.addCreatedCard(card);
                    user.upload();
                    return card;
                });

                function canceled(error) {
                    $log.info("create_fail: Canceled");
                    return $q.reject("Canceled");
                }
            }
        }


        function openCardCreatorDialog(card) {
            var modalInstance = $modal.open({
                animation: true,
                backdrop: 'static',
                size: "lg",
                templateUrl: 'js/app/cardeditor/cardeditor.tpl.html',
                controller: 'CardEditorController',
                controllerAs: "cardeditor",
                resolve: {
                    user: function () {
                        return user;
                    },
                    card: function () {
                        return card;
                    }
                }
            });

            return modalInstance.result;
        }
    }

})();

