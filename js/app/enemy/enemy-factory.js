/**
 * Created by Hannah on 14.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('enemy')
        .factory('Enemy', EnemyFactory);

    EnemyFactory.$inject = ["$log", "$q", "Deck", "BackendService"];

    /* @ngInject */
    function EnemyFactory($log, $q, Deck, BackendService) {
        $log = $log.getInstance("Enemy", debugging);

        function Enemy() {
            this.remoteId = 0;
            this.image = null;
            this.randomEnemy = false;
            this.name = "";
            this.description = "";

            this.deck = null;
            this.changed = false;
        }

        Enemy.prototype = {
            constructor: Enemy,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            // loadImage: loadImage,
            initFromObject: initFromObject,
            change: change,
            upload: upload,
            loadStandardDeck: loadStandardDeck,

            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getImage: getImage,
            setImage: setImage,
            getRandomEnemy: getRandomEnemy,
            getName: getName,
            setName: setName,
            getDescription: getDescription,
            setDescription: setDescription,
            getDeck: getDeck,
            setDeck: setDeck
        };

        return (Enemy);

        ////////////////

        function getFromRemote() {
            $log.info("getFromRemote: ", this.remoteId);
            return BackendService.getEnemy(this.remoteId).then(success.bind(this), fail.bind(this));

            function success(remoteEnemy) {
                if (remoteEnemy) {
                    $log.info("getFromRemote_success: ", this.remoteId);
                    this.loaded = true;
                    return this.initFromRemote(remoteEnemy);
                } else {
                    $log.info("getFromRemote_fail: ", this.remoteId);
                    return $q.reject();
                }
            }

            function fail(error) {
                $log.info("getFromRemote_fail: ", this.remoteId);
                return $q.reject(error);
            }
        }

        function initFromRemote(remoteEnemy) {
            $log.info("initFromRemote", remoteEnemy);

            this.randomEnemy = remoteEnemy.getRandomEnemy();
            this.name = remoteEnemy.getName();
            this.description = remoteEnemy.getDescription();
            this.deck = new Deck();
            this.deck.setRemoteId(remoteEnemy.getDeckId());
            return this.deck.getFromRemote().then(function() {
                $log.info("initFromRemote_success", this);
                return this;
            });

            // return this.loadImage(remoteEnemy.getImageUrl()).then(function() {
            //     $log.info("initFromRemote_success", this);
            //     return this;
            // }.bind(this));
        }

        // function loadImage(imageUrl) {
        //     $log.info("loadImage", imageUrl);
        //     return BackendService.downloadImage(imageUrl).then(success.bind(this));
        //
        //     function success(result) {
        //         this.image = result;
        //         $log.info("loadImage_success", this.image);
        //         return this.image;
        //     }
        // }

        function initFromObject(enemyObject) {
            $log.info("initFromObject", enemyObject);
            this.remoteId = enemyObject.remoteId;
            this.image = enemyObject.image;
            this.randomEnemy = enemyObject.randomEnemy;
            this.name = enemyObject.name;
            this.description = enemyObject.description;
            if(enemyObject.deck) {
                this.deck = new Deck();
                this.deck.initFromObject(enemyObject.deck);
            }

            $log.info("initFromObject_success", this);
        }

        function change() {
            this.changed = true;
        }

        function upload() {
            $log.info("upload: ", this);

            if (this.remoteId > 0 && this.changed == false) {
                return this.remoteId;
            } else {
                var promises = [];
                // promises.push(uploadImage.bind(this)());
                promises.push(uploadDeck.bind(this)());
                if (this.remoteId < 1) {
                    return $q.all(promises).then(addEnemy.bind(this));
                } else {
                    return $q.all(promises).then(updateEnemy.bind(this));
                }
            }
        }

        function uploadImage() {
            var imageName = this.name + "_" + Date.now() + "." + this.image.filename.substr(this.image.filename.lastIndexOf('.')+1);
            return BackendService.uploadImage(imageName, this.image.base64);
        }

        function loadStandardDeck(user, collection) {
            BackendService.abortCardRequests();
            return BackendService.getStandartDeck(user.getId()).then(function(result) {
                this.deck = new Deck(true);
                return this.deck.initFromRemote(result.getReturn(), collection.getCards());
            }.bind(this));
        }

        function uploadDeck() {
            return this.deck.upload().then(function(remoteDeckId) {
                this.deckId = remoteDeckId;
                return this.deckId;
            }.bind(this));
        }

        function addEnemy(result){
            var remoteEnemy = BackendService.createRemoteEnemy(this);
            return BackendService.addEnemy(remoteEnemy).then(
                function (result) {
                    this.remoteId = result.getId();
                    $log.info("upload_success (add): ", this);
                    return this.remoteId;
                }.bind(this),
                function (error) {
                    $log.error("upload_error: ", this);
                    return $q.reject();
                }.bind(this)
            );
        }

        function updateEnemy(remoteImageId) {
            var remoteEnemy = BackendService.createRemoteEnemy(this, remoteImageId);
            return BackendService.updateEnemy(remoteEnemy).then(function (result) {
                $log.info("upload_success (update): ", this);
                return this.remoteId;
            }.bind(this));
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function setRemoteId(id) {
            this.remoteId = id;
        }

        function getImage() {
            return this.image;
        }

        function setImage(value) {
            this.image = value;
        }

        function getRandomEnemy() {
            return this.randomEnemy;
        }

        function getName() {
            return this.name;
        }

        function setName(value) {
            this.name = value;
        }

        function getDescription() {
            return this.description;
        }

        function setDescription(value) {
            this.description = value;
        }

        function getDeck() {
            return this.deck;
        }

        function setDeck(value) {
            this.deck = value;
        }
    }

})();

