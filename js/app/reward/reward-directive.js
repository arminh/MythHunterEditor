/**
 * Created by Hannah on 19.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('reward')
        .directive('reward', reward);

    reward.$inject = ["RewardService"];

    /* @ngInject */
    function reward(RewardService) {
        var directive = {
            templateUrl: "js/app/reward/reward.tpl.html",
            bindToController: {
                rewardIds: "=",
                maxCards: "=",
                user: "="
            },
            controller: "RewardController",
            controllerAs: 'reward',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, vm) {

            vm.cards =  new Array(vm.maxCards);
            var collection = vm.user.getCollection();
            vm.numCollectionCards = collection.getCreatedCards().length;
            if(vm.rewardIds) {
                for(var i = 0; i < vm.rewardIds.length; i++) {
                    vm.cards[i] = collection.getCreatedCard(vm.rewardIds[i]);
                    vm.cardIndex++;
                    if(!vm.cards[i].getLoaded()) {
                        vm.cards[i].getFromRemote();
                    }
                }
            }

        }
    }

})();

