/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('Card', CardFactory);

    CardFactory.$inject = ["$log", "$q", "$timeout", "$filter", "CardType", "BackendService", "CardImage"];

    /* @ngInject */
    function CardFactory($log, $q, $timeout, $filter, CardType, BackendService, CardImage) {
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

            this.createdByUser = false;
            this.amount = 0;
            this.loadPromise = null;
            this.selected = false;
            this.loaded = false;
            this.changed = false;
        }

        Card.prototype = {
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            updateFromCard: updateFromCard,
            createImage: createImage,
            loadOriginalCardImage: loadOriginalCardImage,
            initActions: initActions,
            addAction: addAction,
            upload: upload,

            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getName: getName,
            getDescription: getDescription,
            getAttack: getAttack,
            getLife: getLife,
            getStars: getStars,
            setStars: setStars,
            getImage: getImage,
            getType: getType,
            getActionIds: getActionIds,
            getActions: getActions,
            getVersion: getVersion,
            setImage: setImage,
            getLoaded: getLoaded,
            getSelected: getSelected,
            setSelected: setSelected,
            getLoadPromise: getLoadPromise,
            setLoadPromise: setLoadPromise,
            getCreatedByUser: getCreatedByUser,
            setCreatedByUser: setCreatedByUser,
            getAmount: getAmount,
            setAmount: setAmount
        };

        return (Card);

        ////////////////

        function create() {

        }

        function getFromRemote() {
            $log.info("getFromRemote", this.remoteId);
            this.loadPromise = BackendService.getCard(this.remoteId).then(success.bind(this));
            return this.loadPromise;

            function success(remoteCard) {
                this.initFromRemote(remoteCard);

                return this.image.getFromRemote().then(function() {
                    $log.info("getFromRemote_success", this);
                    this.loaded = true;
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
            this.image.setRemoteId(remoteCard.getImageId());
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

            this.image.updateFromCardImage(card.getImage());
        }

        function createImage() {
            return new CardImage();
        }

        function loadOriginalCardImage() {
            if(this.image.getOriginalImageSrc() != "") {
                if(this.image.getOriginalImage() == "") {
                    this.loadPromise = this.image.loadOriginalImage();
                } else {
                    this.loadPromise = $timeout(function() {
                        return this.image.getOriginalImage()
                    }.bind(this), 1000);
                }
                return this.loadPromise;
            }
        }

        function initActions(actions) {
            if(this.actionIds.length > this.actions.length) {
                for(var i = 0; i < this.actionIds.length; i++) {
                    var found = $filter('filter')(actions, {remoteId: this.actionIds[i]}, true);
                    if(found.length > 0) {
                        this.actions.push(found[0]);
                    } else {
                        $log.error("initActions: action not found");
                    }
                }
            }
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

            if(this.remoteId <= 0) {
                $log.info("upload: ", this);
                this.loadPromise = $q.when(this.image.upload(this.name)).then(uploadCard.bind(this));
            } else if(this.remoteId > 0 && this.changed) {
                $log.info("update: ", this);
                this.loadPromise = $q.when(this.image.upload(this.name)).then(updateCard.bind(this));
            } else {
                this.loadPromise = $q.when(this.image.upload(this.name))
            }
            return this.loadPromise;
        }

        function uploadCard() {

            var remoteCard = BackendService.createRemoteCard(this);
            return BackendService.addCard(remoteCard).then(success.bind(this));

            function success(result) {
                this.remoteId = result.getId();
                $log.info("upload_success: ", result);
                return result;
            }
        }

        function updateCard() {

            var remoteCard = BackendService.createRemoteCard(this);
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

        function setRemoteId(value) {
            this.remoteId = value;
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

        function setStars(value) {
            this.stars = value;
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

        function getActions() {
            return this.actions;
        }

        function getLoaded() {
            return this.loaded;
        }

        function getSelected() {
            return this.selected;
        }

        function setSelected(value) {
            this.selected = value;
        }

        function getLoadPromise() {
            return this.loadPromise;
        }

        function setLoadPromise(promise) {
            this.loadPromise = promise;
        }

        function getVersion() {
            return this.version;
        }

        function getCreatedByUser() {
            return this.createdByUser;
        }

        function setCreatedByUser(value) {
            this.createdByUser = value;
        }

        function getAmount() {
            return this.amount;
        }

        function setAmount(value) {
            this.amount = value;
        }

    }

})();

