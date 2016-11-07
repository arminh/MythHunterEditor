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
        $log = $log.getInstance("Collection", debugging);

        var user = null;
        var actions = [];
        var actionsPromise = null;

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

        function getCreatedCards() {
            var createdCards = user.getCreatedCards();

            var cardPromises = [];

            for (var i = 0; i < createdCards.length; i++) {
                var cardPromise = getCreatedCard(createdCards[i].getRemoteId());
                cardPromises.push(cardPromise);
            }

            return $q.all(cardPromises).then(function (results) {
                console.log("Created cards: ")
                return results;
            });
        }

        function getCreatedCard(id) {
            var promises = [];
            var cardPromise = BackendService.getCard(id).then(initCard);
            promises.push(cardPromise);
            promises.push(actionsPromise);

            function initCard(remoteCard) {
                var card = new Card();
                card.initFromRemote(remoteCard);
                var actionIds = remoteCard.getActionIds();
                for (var i = 0; i < actionIds.length; i++) {
                    card.addAction(getAction(actionIds[i]));
                }

                card.getImage();
                return card;
            }

            return $q.all(promises);
        }

        function getActions() {

            actionsPromise = BackendService.getAllActionsOfCardType(CardType.MONSTER).then(function (results) {
                var actions = [];
                for (var i = 0; i < results.length; i++) {
                    var action = new Action();
                    action.initFromRemote(results[i]);
                    actions.push(action);
                }

                return actions;
            });

            actionsPromise.then(initActions);

            function initActions(result) {
                actions = result;
            }
        }

        function getAction(id) {
            for (var i = 0; i < actions.length; i++) {
                if(actions[i].getId() == id) {
                    return actions[i];
                }
            }
        }


        function createCard() {
            $log.info("createCard");

            var card = new Card();
            openCardCreatorDialog(card).then(uploadCard);

            function uploadCard(result) {
                BackendService.uploadImage(name + "_" + Date.now(), result.imageBase64).then(success, canceled);

                function success(imageUrl) {
                    card.setImageUrl(imageUrl);
                    card.upload().then(function (result) {
                        user.addCreatedCard(card);
                        user.upload();
                    })
                }

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

