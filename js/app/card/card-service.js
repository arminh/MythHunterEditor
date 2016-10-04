/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardService', CardService);

    CardService.$inject = ["BackendService"];

    /* @ngInject */
    function CardService(BackendService) {
        var maskWidth = 214;
        var maskHeight = 183;
        var maskTop = 55;
        var maskLeft = 150;

        var service = {
            initDragBounds: initDragBounds,
            upload: upload
        };
        return service;

        ////////////////

        function initDragBounds(imageDimensions) {
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

                var offsetLeft = imageDragBounds.left;
                if(offsetLeft < 0) {
                    imageDragBounds.left = 0;
                    imageDragBounds.width += offsetLeft;
                }


            } else {
                imageDragBounds.left = maskLeft;
                imageDragBounds.width = maskWidth;
                imageDragBounds.top = maskTop - (imageHeight - maskHeight);
                imageDragBounds.height = imageHeight + imageHeight - maskHeight;

                var offsetTop = imageDragBounds.top;
                if(offsetTop < 0) {
                    imageDragBounds.top = 0;
                    imageDragBounds.height += offsetTop;
                }
            }

            return imageDragBounds;
        }

        function upload(imageBase64) {
            BackendService.uploadImage("test.jpg", imageBase64).then(success);

            function success(result) {
                console.log(result);
            }
        }


    }

})();

