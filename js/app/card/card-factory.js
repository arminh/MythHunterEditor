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
            updateFromCard: updateFromCard,
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
            getActionIds: getActionIds,

            setImage: setImage,
            setLoadPromise: setLoadPromise
        };

        return (Card);

        ////////////////

        function create() {

        }

        function getFromRemote() {
            $log.info("getFromRemote", this.remoteId);
            return BackendService.getCard(this.remoteId).then(success.bind(this));

            function success(remoteCard) {
                this.initFromRemote(remoteCard);
                return this.image.initFromRemote(remoteCard.getImage()).then(function() {
                    $log.info("getFromRemote_success", this);
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

        function updateFromCard(card) {

            if(this.name != card.getName()) {
                this.name = card.getName();
                this.changed = true;
            }

            if(this.stars != card.getStars()) {
                this.stars = card.getStars();
                this.changed = true;
            }

            if(this.description != card.getDescription()) {
                this.description = card.getDescription();
                this.changed = true;
            }

            if(this.life != card.getLife()) {
                this.life = card.getLife();
                this.changed = true;
            }

            if(this.attack != card.getAttack()) {
                this.attack = card.getAttack();
                this.changed = true;
            }

            var imageChanged = this.image.updateFromCardImage(card.getImage());
            if(imageChanged) {
                this.changed = true;
            }
        }

        function createImage() {
            return new CardImage();
        }

        function addAction(action) {
            this.actions.push(action);
        }

        function findAction(id, actions) {
            for(var i = 0; i < actions.length; i++) {
                if(actions[i].getRemoteId() == id) {
                    return actions[i];
                }
            }
            return null;
        }

        function upload() {
            $log.info("upload: ", this);

            if(!this.changed) {
                return this.image.upload(this.name).then(uploadCard.bind(this));
            } else {
                return this.image.upload(this.name).then(updateCard.bind(this));
            }
        }

        function uploadCard(remoteImage) {

            var remoteCard = BackendService.createRemoteCard(this, remoteImage);
            return BackendService.addCard(remoteCard).then(success.bind(this));

            function success(result) {
                this.remoteId = result.getId();
                $log.info("upload_success: ", result);
                return result;
            }
        }

        function updateCard(remoteImage) {

            var remoteCard = BackendService.createRemoteCard(this, remoteImage);
            return BackendService.updateCard(remoteCard).then(success.bind(this));

            function success(result) {
                this.version = result.getVersion();
                this.changed = false;
                $log.info("upload_success: ", result);
                return result;
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

        function getActionIds() {
            return this.actionIds;
        }

        function setLoadPromise(promise) {
            this.loadPromise = promise;
        }
    }

})();

