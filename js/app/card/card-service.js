/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardService', CardService);

    CardService.$inject = ["$log", "$q", "$mdDialog", "Card", "CreationTutorialFlags"];

    /* @ngInject */
    function CardService($log, $q, $mdDialog, Card, CreationTutorialFlags) {
        $log = $log.getInstance("CardService", debugging);

        var maskWidth = 214;
        var maskHeight = 183;
        var aspectRatio = 214 / 183;
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

             if(imageWidth > imageHeight * aspectRatio) {
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

        function createCard(user) {
            $log.info("createCard");

            return showCreateCardDialog().then(function () {
                var card = new Card();
                var tutorial = !user.getCreationTutorialFlag(CreationTutorialFlags.CARD);
                return openCardCreatorDialog(card, tutorial).then(createFinished, createCanceled);

                function createFinished(){
                    user.setCreationTutorialFlag(CreationTutorialFlags.CARD);
                    user.addCreatedCard(card);
                    card.upload().then(function() {
                        user.upload();
                    });
                    return card;
                }

                function createCanceled() {
                    return $q.reject();
                }
            })
        }

        function editCard(card) {
            $log.info("createCard");

            var editCard = angular.copy(card);
            return openCardCreatorDialog(editCard, false).then(updateCard, cacheOriginalImage);

            function updateCard() {
                card.updateFromCard(editCard);
                card.upload();
                return card;
            }

            function cacheOriginalImage() {
                var cardImage = card.getImage();
                var editCardImage = editCard.getImage();
                cardImage.setOriginalImage(editCardImage.getOriginalImage());
            }
        }

        function showCreateCardDialog() {
            return $mdDialog.show({
                templateUrl: 'js/app/cardeditor/create-card-dialog/create-card-dialog.tpl.html',
                controller: 'CreateCardDialogController',
                controllerAs: "createCard"
            });
        }

        function openCardCreatorDialog(card, tutorial) {
            return $mdDialog.show({
                templateUrl: 'js/app/cardeditor/cardeditor.tpl.html',
                controller: 'CardEditorController',
                controllerAs: "cardeditor",
                bindToController: true,
                multiple: true,
                hasBackdrop: false,
                locals: {
                    card: card,
                    tutorial: tutorial
                }
            });
        }

        function deleteCard() {

        }
    }

})();

