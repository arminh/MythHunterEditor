/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .factory('CollectionService', CollectionService);

    CollectionService.$inject = ["$log","$q","$modal","BackendService","Card"];

    /* @ngInject */
    function CollectionService($log, $q, $modal, BackendService, Card) {
        $log = $log.getInstance("Collection", debugging);

        var user = null;

        var service = {
            setUser: setUser,
            getCreatedCards: getCreatedCards,
            createCard: createCard
        };
        return service;

        ////////////////

        function setUser(currentUser) {
            user = currentUser;
        }

        function getCreatedCards() {
            var createdCardIds = user.getCreatedCardIds();

            var cardPromises = [];
            var cards = [];

            for(var i=0; i < createdCardIds; i++) {
                var cardPromise = BackendService.getCard(createdCardIds[i]).then(initCard);

                cardPromises.push(cardPromise);
            }

            function initCard(remoteCard) {
                var card = new Card();
                card.initFromRemote(remoteCard);
                cards.push(card);
            }

            return $q.all(cardPromises).then(function() {
                return cards;
            });
        }

        function createCard() {
            $log.info("createCard");

            var card = new Card();
            return openCardCreatorDialog(card).then(cardCreated.bind(this), createCardCanceled);

            function cardCreated(result) {

            }

            function createCardCanceled(error) {
                $log.info("create_fail: Canceled");
                return $q.reject("Canceled");
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
                    card: function () {
                        return card;
                    }
                }
            });

            return modalInstance.result;
        }
    }

})();

