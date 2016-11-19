/**
 * Created by Hannah on 10.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardImage', CardImageFactory);

    CardImageFactory.$inject = ["$log", "BackendService"];

    /* @ngInject */
    function CardImageFactory($log, BackendService) {
        $log = $log.getInstance("CardImage", debugging);

        function CardImage() {
            this.remoteId = 0;
            this.originalImageSrc = "";
            this.imageSrc = "";
            this.type = "";
            this.top = 0;
            this.left = 0;
            this.width = 0;
            this.height = 0;

            this.content = "";
        }

        CardImage.prototype = {
            initFromRemote: initFromRemote,
            downloadImage: downloadImage,
            upload: upload,

            getSrc: getSrc,
            setContent: setContent,
            setType: setType,
            getType: getType,
            setTop: setTop,
            getTop: getTop,
            setLeft: setLeft,
            getLeft: getLeft,
            setWidth: setWidth,
            getWidth: getWidth,
            setHeight: setHeight,
            getHeight: getHeight,
            getOriginalImageSrc: getOriginalImageSrc
        };

        return (CardImage);

        ////////////////

        function getFromRemote() {
            $log.info("getFromRemote", this.remoteId);
            return BackendService.getCardImage(this.remoteId).then(initCardImage);

            function initCardImage(result) {
                this.initFromRemote(result);

            }


        }

        function initFromRemote(remoteCardImage) {
            $log.info("initFromRemote", remoteCardImage);

            this.originalImageSrc = remoteCardImage.getOriginalImageSrc();
            this.imageSrc = remoteCardImage.getImageSrc();
            this.type = remoteCardImage.getType();
            this.top = remoteCardImage.getOffsetTop();
            this.left = remoteCardImage.getOffsetLeft();
            this.width = remoteCardImage.getWidth();
            this.height = remoteCardImage.getHeight();

            return this.downloadImage();
        }

        function downloadImage() {
            return BackendService.downloadImage(this.originalImageSrc).then(success.bind(this));

            function success(result) {
                this.content = result;
                return this;
            }
        }

        function upload(name) {
            this.name = name;
            $log.info("upload", this);

            return BackendService.uploadImage(this.name + "_" + Date.now(), this.content).then(success.bind(this));

            function success(imageSrc) {
                console.log(imageSrc);
                this.originalImageSrc = imageSrc;
                var remoteCardImage = BackendService.createRemoteCardImage(this);
                return BackendService.addCardImage(remoteCardImage).then(cardImageUploaded.bind(this));
            }

            function cardImageUploaded(result) {
                this.remoteId = result.getId();
                return result;
            }
        }

        function getSrc() {
            return this.src;
        }

        function setContent(value) {
            this.content = value;
        }

        function setType(value) {
            this.type = value;
        }

        function getType() {
            return this.type;
        }

        function setTop(value) {
            this.top = value;
        }

        function getTop() {
            return this.top;
        }

        function setLeft(value) {
            this.left = value;
        }

        function getLeft() {
            return this.left;
        }

        function setWidth(value) {
            this.width = value;
        }

        function getWidth() {
            return this.width;
        }

        function setHeight(value) {
            this.height = value;
        }

        function getHeight() {
            return this.height;
        }

        function getOriginalImageSrc() {
            return this.originalImageSrc;
        }
    }

})();

