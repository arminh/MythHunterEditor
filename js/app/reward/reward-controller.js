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
        vm.cards =  new Array(vm.maxCards);
        vm.cardIndex = 0;

        vm.removeCard = removeCard;
        vm.createCard = createCard;
        vm.openCollection = openCollection;

        activate();

        ////////////////

        function activate() {
            RewardService.init(vm.user, vm.maxCards);

            var collection = vm.user.getCollection();
            for(var i = 0; i < vm.rewardIds.length; i++) {
                vm.cards[i] = collection.getCard(vm.rewardIds[i]);
                vm.cardIndex++;
                if(!vm.cards[i].getLoaded()) {
                    vm.cards[i].getFromRemote();
                }
            }

        }

        function removeCard(index) {

            for(var i = 0; i < vm.rewardIds.length; i++) {
                if(vm.rewardIds[i] == vm.cards[index].getRemoteId()) {
                    vm.rewardIds.splice(i,1);
                    break;
                }
            }
            vm.cards[index] = undefined;
            vm.cardIndex--;
        }

        function createCard(){
            RewardService.createCard().then(function(card) {
                vm.cards[vm.cardIndex++] = card;
                vm.rewardIds.push(card.getRemoteId());
            });
        }

        function openCollection() {
            RewardService.chooseCardsFromCollection(vm.rewardIds).then(function(result) {
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

