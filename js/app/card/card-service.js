/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardService', CardService);

    CardService.$inject = [];

    /* @ngInject */
    function CardService() {

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
            initDragBounds: initDragBounds
        };
        return service;

        ////////////////

        function getStarImage(numStars) {
            return starImages[numStars-1];
        }

        function initDragBounds(imageDimensions) {
            // var imageDragBounds = {
            //     top: 0,
            //     left: 0,
            //     width: 0,
            //     height: 0
            // };
            //
            // var imageWidth = imageDimensions.width;
            // var imageHeight = imageDimensions.height;
            //
            // if(imageWidth > imageHeight) {
            //     imageDragBounds.top = maskTop;
            //     imageDragBounds.height = maskHeight;
            //     imageDragBounds.left = maskLeft - (imageWidth - maskWidth);
            //     imageDragBounds.width = imageWidth + imageWidth - maskWidth;
            //
            //     var offsetLeft = imageDragBounds.left;
            //     /*                if(offsetLeft < 0) {
            //      imageDragBounds.left = 0;
            //      imageDragBounds.width += offsetLeft;
            //      }*/
            //
            //
            // } else {
            //     imageDragBounds.left = maskLeft;
            //     imageDragBounds.width = maskWidth;
            //     imageDragBounds.top = maskTop - (imageHeight - maskHeight);
            //     imageDragBounds.height = imageHeight + imageHeight - maskHeight;
            //
            //     var offsetTop = imageDragBounds.top;
            //     /*                if(offsetTop < 0) {
            //      imageDragBounds.top = 0;
            //      imageDragBounds.height += offsetTop;
            //      }*/
            // }
            //
            // return imageDragBounds;
        }
    }

})();

