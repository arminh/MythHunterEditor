/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('Card', CardFactory);

    CardFactory.$inject = ["$log", "CardType", "BackendService", "CardImage"];

    /* @ngInject */
    function CardFactory($log, CardType, BackendService, CardImage) {
        $log = $log.getInstance("Card", debugging);

        function Card() {
            this.remoteId = 0;
            this.version = 0;
            this.name = "";
            this.stars = 0;
            this.description = "";
            this.actionIds = [];
            this.actions = [];
            this.life = 1;
            this.attack = 0;
            this.type = CardType.MONSTER;


            this.image = new CardImage();
            this.loadPromise = null;
            this.changed = false;
        }

        Card.prototype = {
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            createImage: createImage,
            addAction: addAction,
            upload: upload,

            getRemoteId: getRemoteId,
            getName: getName,
            getDescription: getDescription,
            getAttack: getAttack,
            getLife: getLife,
            getStars: getStars,
            getImage: getImage,
            getType: getType,
            getActions: getActions,

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
                return this.image.initFromRemote(remoteCard.getImage()).then(function() {
                    return this;
                }.bind(this))
            }
        }

        function initFromRemote(remoteCard) {
            this.remoteId = remoteCard.getId();
            this.name = remoteCard.getName();
            this.stars = remoteCard.getStars();
            this.description = remoteCard.getDescription();
            this.life = remoteCard.getLife();
            this.attack = remoteCard.getAttack();
            this.type = CardType[remoteCard.getType()];
            this.actionIds = remoteCard.getActionIds();
        }

        function createImage() {
            return new CardImage();
        }

        function addAction(action) {
            this.actions.push(action);
        }

        function upload() {
            $log.info("upload: ", this);

            return this.image.upload(this.name).then(uploadCard.bind(this));

            function uploadCard(remoteImage) {

                var remoteCard = BackendService.createRemoteCard(this, remoteImage);
                return BackendService.addCard(remoteCard).then(success.bind(this));

                function success(result) {
                    this.remoteId = result.getId();
                    $log.info("upload_success: ", result);
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

        function setImage(img) {
            this.image = img;
        }

        function getImage() {
            return this.image;
        }

        function getType() {
            return this.type;
        }

        function getActions() {
            return this.actions;
        }

        function setLoadPromise(promise) {
            this.loadPromise = promise;
        }
    }

})();

