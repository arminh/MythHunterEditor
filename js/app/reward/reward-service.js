/**
 * Created by Hannah on 14.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('reward')
        .factory('RewardService', RewardService);

    RewardService.$inject = ["$mdDialog", "CardService"];

    /* @ngInject */
    function RewardService($mdDialog, CardService) {
        var user = null;
        var maxCards = -1;

        var service = {
            init: init,
            createCard: createCard,
            chooseCardsFromCollection: chooseCardsFromCollection
        };
        return service;

        ////////////////

        function init(currentUser, rewardMaxCards) {
            user = currentUser;
            maxCards = rewardMaxCards;
        }

        function createCard() {
            return CardService.createCard(user);
        }

        function chooseCardsFromCollection(rewardIds) {
            return $mdDialog.show({
                templateUrl: 'js/app/reward/reward-collection/reward-collection.tpl.html',
                resolve: {
                    user: function() {
                        return user;
                    }
                },
                locals: {
                    maxCards: maxCards,
                    rewardIds: rewardIds
                },
                controller: 'RewardCollectionController',
                controllerAs: 'rewardCollection',
                bindToController: true,
                multiple: true
            })
        }
    }

})();

