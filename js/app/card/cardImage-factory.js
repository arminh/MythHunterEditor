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

            this.originalImage = "";
            this.fileEnding = "";
            this.changed = false;
            this.imageChanged = false;
            this.scaledWidth = 0;
            this.scaledHeight = 0;
            this.scaledTop = 0;
            this.scaledLeft = 0;
            this.aspectRatio = 1;
            this.loadPromise = null;
        }

        CardImage.prototype = {
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            calculateDimensions: calculateDimensions,
            updateFromCardImage: updateFromCardImage,
            loadOriginalImage: loadOriginalImage,
            upload: upload,
            change: change,

            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getImage: getImage,
            setImage: setImage,
            setOriginalSize: setOriginalSize,
            setScaledSize: setScaledSize,
            setScaledPosition: setScaledPosition,
            getScaledTop: getScaledTop,
            getScaledLeft: getScaledLeft,
            getScaledWidth: getScaledWidth,
            getScaledHeight: getScaledHeight,
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
            getAspectRatio: getAspectRatio,
            getOriginalImageSrc: getOriginalImageSrc,
            getOriginalImage: getOriginalImage,
            setOriginalImage: setOriginalImage,
            setFileEnding: setFileEnding,
            getChanged: getChanged,
            getImageChanged: getImageChanged,
            setImageChanged: setImageChanged
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
        }

        function updateFromCardImage(cardImage) {
            if (cardImage.getImageChanged()) {
                this.originalImage = cardImage.getOriginalImage();
                this.width = cardImage.getWidth();
                this.height = cardImage.getHeight();
                this.top = cardImage.getTop();
                this.left = cardImage.getLeft();
                this.imageChanged = true;
                this.changed = true;
            } else {
                this.aspectRatio = cardImage.getAspectRatio();
                if (this.top != cardImage.getTop()) {
                    this.top = cardImage.getTop();
                    this.changed = true;
                }
                if (this.scaledLeft != cardImage.getScaledLeft()) {
                    this.scaledLeft = cardImage.getScaledLeft();
                    this.left = cardImage.getLeft();
                    this.changed = true;
                }
            }
        }

        function loadOriginalImage() {
            if(this.loadPromise) {
                return this.loadPromise;
            }
            $log.info("getOriginalImage", this.originalImageSrc);
            this.loadPromise = BackendService.downloadImage(this.originalImageSrc).then(success.bind(this));

            function success(result) {
                this.originalImage = result;
                $log.info("getOriginalImage_success", this.originalImageSrc);
                return this.originalImage;
            }
            return this.loadPromise;
        }

        function upload(name) {
            if (this.remoteId > 0 && !this.changed) {
                return this.remoteId;
            }

            $log.info("upload", this);

            if (this.originalImageSrc == "") {
                var imageName = name + "_" + Date.now() + "." + this.fileEnding;
                $log.info("uploadImage", imageName);
                return BackendService.uploadImage(imageName, this.originalImage).then(convertImage.bind(this));
            } else if(this.imageChanged) {
                return BackendService.uploadImage(this.originalImageSrc, this.originalImage).then(convertImage.bind(this));
            } else {
                return convertImage.bind(this)(this.originalImageSrc);
            }

            function convertImage(imagePath) {
                $log.info("uploadImage_success", imagePath);
                $log.info("convertImage", imagePath);
                this.originalImageSrc = imagePath;
                this.calculateDimensions();
                return BackendService.convertImage(imagePath, Math.floor(this.left), Math.floor(this.top), Math.floor(this.width), Math.floor(this.height)).then(downloadConvertedImage.bind(this));
            }

            function downloadConvertedImage(convertedImagePath) {
                $log.info("convertImage_success", convertedImagePath);
                $log.info("downloadImage", convertedImagePath);
                return BackendService.downloadImage(convertedImagePath).then(addOrUpdateCardImage.bind(this));
            }

            function addOrUpdateCardImage(convertedImage) {
                $log.info("downloadImage_success");
                this.image = convertedImage;

                var remoteCardImage = BackendService.createRemoteCardImage(this);
                if (this.remoteId <= 0) {
                    $log.info("addCardImage", this);
                    return BackendService.addCardImage(remoteCardImage).then(cardImageUploaded.bind(this));
                } else {
                    $log.info("updateCardImage", this);
                    return BackendService.updateCardImage(remoteCardImage).then(cardImageUploaded.bind(this));
                }

            }

            function cardImageUploaded(result) {
                $log.info("uploadCardImage_success", result);
                this.remoteId = result.getId();
                return this.remoteId;
            }
        }

        function calculateDimensions() {
            this.height -= this.top;
            this.width -= this.left;
        }

        function setOriginalSize(size) {
            this.width = size.width - 1;
            this.height = size.height - 1;
        }

        function setScaledSize(size) {
            this.scaledWidth = size.width;
            this.scaledHeight = size.height;
            this.aspectRatio = this.width / this.scaledWidth;

            if ((this.scaledTop <= 0 && this.top > 0) || (this.scaledLeft <= 0 && this.left > 0)) {
                this.scaledTop = this.top / this.aspectRatio;
                this.scaledLeft = this.left / this.aspectRatio;
            }
        }

        function setScaledPosition(top, left) {
            this.scaledTop = top;
            this.scaledLeft = left;
            this.top = this.scaledTop * this.aspectRatio;
            this.left = this.scaledLeft * this.aspectRatio;
        }

        function change() {
            this.changed = true;
        }

        function getScaledTop() {
            return this.scaledTop;
        }

        function getScaledLeft() {
            return this.scaledLeft;
        }

        function getScaledWidth() {
            return this.scaledWidth;
        }

        function getScaledHeight() {
            return this.scaledHeight;
        }

        function getRemoteId() {
            return this.remoteId;
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

        function getAspectRatio() {
            return this.aspectRatio;
        }

        function getOriginalImage() {
            return this.originalImage;
        }

        function getOriginalImageSrc() {
            return this.originalImageSrc;
        }

        function setOriginalImage(image) {
            this.originalImage = image;
        }

        function setFileEnding(value) {
            this.fileEnding = value;
        }

        function getChanged() {
            return this.changed;
        }

        function getImageChanged() {
            return this.imageChanged;
        }

        function setImageChanged(value) {
            this.imageChanged = value;
        }
    }

})();

