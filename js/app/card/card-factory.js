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
            this.description = "";
            this.actions = [];
            this.life = -1;
            this.attack = -1;
            this.type = null;

            this.changed = false;
        }

        Card.prototype = {
            initFromRemote: initFromRemote,
            upload: upload
        };

        return (Card);

        ////////////////

        function initFromRemote(remoteCard) {
            this.remoteId = remoteCard.getId();
            this.version = remoteCard.getVersion();
            this.name = remoteCard.getName();
            this.stars = remoteCard.getStars();
            this.imageUrl = remoteCard.getImageUrl();
            this.description = remoteCard.getDescriptions();
            this.actions = remoteCard.getActions();
            this.life = remoteCard.getLife();
            this.attack = remoteCard.getAttack();
            this.type = CardType[remoteCard.getType()];
        }

        function upload() {
            console.log()
        }

    }

})();

