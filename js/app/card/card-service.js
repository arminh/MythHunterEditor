/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardService', CardService);

    CardService.$inject = ["$log", "$modal", "Card"];

    /* @ngInject */
    function CardService($log, $modal, Card) {
        $log = $log.getInstance("CardService", debugging);

        var maskWidth = 214;
        var maskHeight = 183;
        var maskTop = 0;
        var maskLeft = 0;

        var starImages = [
            "media/card/card_plain_stars_1.png",
            "media/card/card_plain_stars_2.png",
            "media/card/card_plain_stars_3.png",
            "media/card/card_plain_stars_4.png",
            "media/card/card_plain_stars_5.png",
            "media/card/card_plain_stars_6.png",
            "media/card/card_plain_stars_7.png",
            "media/card/card_plain_stars_8.png",
            "media/card/card_plain_stars_9.png",
            "media/card/card_plain_stars_10.png"
        ];

        var service = {
            getStarImage: getStarImage,
            getDragBounds: getDragBounds,
            createCard: createCard,
            editCard: editCard,
            deleteCard: deleteCard
        };
        return service;

        ////////////////

        function getStarImage(numStars) {
            return starImages[numStars-1];
        }

        function getDragBounds(imageDimensions) {
             var imageDragBounds = {
                 top: 0,
                 left: 0,
                 width: 0,
                 height: 0
            };

             var imageWidth = imageDimensions.width;
             var imageHeight = imageDimensions.height;

             if(imageWidth > imageHeight) {
                 imageDragBounds.top = maskTop;
                 imageDragBounds.height = maskHeight;
                 imageDragBounds.left = maskLeft - (imageWidth - maskWidth);
                 imageDragBounds.width = imageWidth + imageWidth - maskWidth;


             } else {
                 imageDragBounds.left = maskLeft;
                 imageDragBounds.width = maskWidth;
                 imageDragBounds.top = maskTop - (imageHeight - maskHeight);
                 imageDragBounds.height = imageHeight + imageHeight - maskHeight;
             }

             return imageDragBounds;
        }

        function createCard() {
            $log.info("createCard");

            var card = new Card();
            return openCardCreatorDialog(card).then(uploadCard);

            function uploadCard() {

                return card.upload().then(function (result) {
                    return card;
                });

                function canceled(error) {
                    $log.info("create_fail: Canceled");
                    return $q.reject("Canceled");
                }
            }
        }

        function editCard(card) {
            $log.info("createCard");

            var editCard = angular.copy(card);
            return openCardCreatorDialog(editCard).then(updateCard);

            function updateCard() {
                card.updateFromCard(editCard);

                return card.upload();

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
                    card: function () {
                        return card;
                    }
                }
            });

            return modalInstance.result;
        }

        function deleteCard() {

        }
    }

})();

