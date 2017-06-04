/**
 * Created by Hannah on 14.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('reward')
        .controller('RewardController', RewardController);

    RewardController.$inject = ["RewardService"];

    /* @ngInject */
    function RewardController(RewardService) {
        var vm = this;
        vm.cardIndex = 0;

        vm.removeCard = removeCard;
        vm.createCard = createCard;
        vm.openCollection = openCollection;

        ////////////////

        function removeCard(index) {

            for(var i = 0; i < vm.rewardIds.length; i++) {
                if(vm.rewardIds[i] == vm.cards[index].getRemoteId()) {
                    vm.cards[index].setSelected(false);
                    vm.rewardIds.splice(i,1);
                    break;
                }
            }
            vm.cards[index] = undefined;
            vm.cardIndex--;
        }

        function createCard(index){
            RewardService.createCard(vm.user).then(function(card) {
                vm.cards[index] = card;
                vm.rewardIds.push(card.getRemoteId());
            });
        }

        function openCollection() {
            RewardService.chooseCardsFromCollection(vm.user, vm.maxCards, vm.rewardIds).then(function(result) {
                vm.cards =  new Array(vm.maxCards);
                vm.rewardIds = [];
                vm.cardIndex = 0;
                for(var i = 0; i < result.cards.length; i++) {
                    vm.cards[vm.cardIndex++] = result.cards[i];
                    vm.rewardIds.push(result.cards[i].getRemoteId());
                }
            });
        }
    }

})();

