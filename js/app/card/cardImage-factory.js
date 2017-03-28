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
            this.type = "";
            this.top = 0;
            this.left = 0;
            this.width = 0;
            this.height = 0;
            this.image = "";

            this.fileEnding = "";
            this.changed = false;
            this.scaledWidth = 0;
            this.scaledHeight = 0;
            this.scaledTop = 0;
            this.scaledLeft = 0;
        }

        CardImage.prototype = {
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            calculateDimensions: calculateDimensions,
            updateFromCardImage: updateFromCardImage,
            upload: upload,

            setRemoteId: setRemoteId,
            getImage: getImage,
            setImage: setImage,
            setOriginalSize: setOriginalSize,
            setScaledSize: setScaledSize,
            setScaledPosition: setScaledPosition,
            getSrc: getSrc,
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
            getOffsetTop: getOffsetTop,
            getOffsetLeft: getOffsetLeft,
            getOriginalImageSrc: getOriginalImageSrc,
            setFileEnding: setFileEnding
        };

        return (CardImage);

        ////////////////

        function getFromRemote() {
            return BackendService.getCardImage(this.remoteId).then(initFromRemote.bind(this));
        }

        function initFromRemote(remoteCardImage) {
            $log.info("initFromRemote", remoteCardImage);
            this.originalImageSrc = remoteCardImage.getOriginalImageSrc();
            this.image = remoteCardImage.getImage();
            this.type = remoteCardImage.getType();
            this.top = remoteCardImage.getOffsetTop();
            this.left = remoteCardImage.getOffsetLeft();
            this.width = remoteCardImage.getWidth();
            this.height = remoteCardImage.getHeight();
            this.image = remoteCardImage.getImage();
            // return BackendService.downloadImage(this.originalImageSrc).then(success.bind(this));
            //
            // function success(result) {
            //     this.content = result;
            //     $log.info("initFromRemote_success", this);
            //     return this;
            // }
        }

        function updateFromCardImage(cardImage) {
            this.changed = false;
            if(this.top != cardImage.getOffsetTop()) {
                this.top = cardImage.getOffsetTop();
                this.changed = true;
            }
            if(this.left != cardImage.getOffsetLeft()) {
                this.left = cardImage.getOffsetLeft();
                this.changed = true;
            }
            if(this.width != cardImage.getWidth()) {
                this.width = cardImage.getWidth();
                this.changed = true;
            }
            if(this.height != cardImage.getHeight()) {
                this.height = cardImage.getHeight();
                this.changed = true;
            }

            return this.changed;
        }


        function upload(name) {
            this.name = name;
            $log.info("upload", this);

            var imageName = this.name + "_" + Date.now() + "." + this.fileEnding;
            $log.info("uploadImage", imageName);
            return BackendService.uploadImage(imageName, this.image).then(convertImage.bind(this));

            function convertImage(imagePath) {
                $log.info("uploadImage_success", imagePath);
                $log.info("convertImage", imagePath);
                this.originalImageSrc = imagePath;
                return BackendService.convertImage(imagePath, this.left, this.top, this.width, this.height).then(downloadConvertedImage.bind(this));
            }

            function downloadConvertedImage(convertedImagePath) {
                $log.info("convertImage_success", convertedImagePath);
                $log.info("downloadImage", convertedImagePath);
                return BackendService.downloadImage(convertedImagePath).then(setConvertedImage.bind(this));
            }

            function setConvertedImage(convertedImage) {
                $log.info("downloadImage_success", convertedImage);
                this.image = convertedImage;
                return convertedImage;
            }

            function success(imageSrc) {
                this.originalImageSrc = imageSrc;
                this.calculateDimensions();
                var remoteCardImage = BackendService.createRemoteCardImage(this);
                return BackendService.addCardImage(remoteCardImage).then(cardImageUploaded.bind(this));
            }

            function cardImageUploaded(result) {
                this.remoteId = result.getId();
                return this.remoteId;
            }
        }

        function calculateDimensions() {
            var scaleRatio = this.width / this.scaledWidth;
            this.top = this.scaledTop * scaleRatio;
            this.left = this.scaledLeft * scaleRatio;
        }

        function setOriginalSize(size) {
            this.width = size.width;
            this.height = size.height;
        }

        function setScaledSize(size) {
            this.scaledWidth = size.width;
            this.scaledHeight = size.height;

            if((this.scaledTop <= 0 && this.top > 0) || (this.scaledLeft <= 0 && this.left > 0)) {
                var scaleRatio = this.width / this.scaledWidth;
                this.scaledTop = this.top / scaleRatio;
                this.scaledLeft = this.left / scaleRatio;
            }
        }

        function setScaledPosition(top, left) {
            this.scaledTop = top;
            this.scaledLeft = left;
            console.log(this);
        }

        function setRemoteId(remoteId) {
            this.remoteId = remoteId;
        }

        function getImage() {
            return this.image;
        }

        function setImage(image) {
            this.image = image;
        }

        function getSrc() {
            return this.src;
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

        function getOffsetTop() {
            return this.offsetTop;
        }

        function getOffsetLeft() {
            return this.offsetLeft;
        }

        function getOriginalImageSrc() {
            return this.originalImageSrc;
        }

        function setFileEnding(value) {
            this.fileEnding = value;
        }
    }

})();

