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

        var service = {
            createCard: createCard,
            chooseCardsFromCollection: chooseCardsFromCollection
        };
        return service;

        ////////////////

        function createCard(user) {
            return CardService.createCard(user);
        }

        function chooseCardsFromCollection(user, maxCards, rewardIds) {
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

