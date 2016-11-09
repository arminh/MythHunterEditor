/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('Card', CardFactory);

    CardFactory.$inject = ["$log", "CardType", "BackendService"];

    /* @ngInject */
    function CardFactory($log, CardType, BackendService) {
        $log = $log.getInstance("Card", debugging);

        function Card() {
            this.remoteId = 0;
            this.version = 0;
            this.name = "";
            this.stars = 0;
            this.imageUrl = "";
            this.image = {};
            this.description = "";
            this.actionIds = [];
            this.actions = [];
            this.life = 1;
            this.attack = 0;
            this.type = CardType.MONSTER;

            this.loadPromise = null;
            this.changed = false;
        }

        Card.prototype = {
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            getImage: getImage,
            addAction: addAction,
            upload: upload,

            getRemoteId: getRemoteId,
            getName: getName,
            getDescription: getDescription,
            getAttack: getAttack,
            getLife: getLife,
            getStars: getStars,
            getImageUrl: getImageUrl,
            getType: getType,
            getActions: getActions,

            setImageUrl: setImageUrl,
            setImage: setImage,
            setLoadPromise: setLoadPromise
        };

        return (Card);

        ////////////////

        function getFromRemote() {
            $log.info("getFromRemote", this.remoteId);
            return BackendService.getCard(this.remoteId).then(success.bind(this));

            function success(remoteCard) {
                this.initFromRemote(remoteCard);
                return this.getImage().then(function() {
                    $log.info("getFromRemote_success", this);
                    return this;
                }.bind(this));

            }
        }

        function initFromRemote(remoteCard) {
            this.remoteId = remoteCard.getId();
            this.version = remoteCard.getVersion();
            this.name = remoteCard.getName();
            this.stars = remoteCard.getStars();
            this.imageUrl = remoteCard.getImageUrl();
            this.description = remoteCard.getDescription();
            this.life = remoteCard.getLife();
            this.attack = remoteCard.getAttack();
            this.type = CardType[remoteCard.getType()];
            this.actionIds = remoteCard.getActionIds();
        }

        function getImage() {
            return BackendService.downloadImage(this.imageUrl).then(success.bind(this));

            function success(result) {
                this.image = {
                    filetype: "image/jpeg",
                    base64: result
                };
                return this.image;
            }
        }

        function addAction(action) {
            this.actions.push(action);
        }

        function upload() {
            $log.info("upload: ", this);

            return BackendService.uploadImage(this.name + "_" + Date.now(), this.image.base64).then(uploadCard.bind(this));


            function uploadCard(imageUrl) {
                this.imageUrl = imageUrl;
                var remoteCard = BackendService.createRemoteCard(this);
                return BackendService.addCard(remoteCard).then(success.bind(this));

                function success(result) {
                    this.remoteId = result.getId();
                    return result;
                }
            }


        }

        function getRemoteId() {
            return this.remoteId;
        }

        function getName() {
            return this.name;
        }

        function getDescription() {
            return this.description;
        }

        function getAttack() {
            return this.attack;
        }

        function getLife() {
            return this.life;
        }

        function getStars() {
            return this.stars;
        }

        function setImageUrl(url) {
            this.imageUrl = url;
        }

        function getImageUrl() {
            return this.imageUrl;
        }

        function getType() {
            return this.type;
        }

        function getActions() {
            return this.actions;
        }

        function setImage(image) {
            this.image = image;
        }

        function setLoadPromise(promise) {
            this.loadPromise = promise;
        }
    }

})();

