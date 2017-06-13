/**
 * Created by Hannah on 14.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('reward')
        .controller('RewardCollectionController', RewardCollectionController);

    RewardCollectionController.$inject = ["$mdDialog", "CollectionService", "user"];

    /* @ngInject */
    function RewardCollectionController($mdDialog, CollectionService, user) {
        var vm = this;
        vm.selectedCards = [];
        vm.numSelected = 0;
        vm.lastCard = null;

        vm.toggleSelect = toggleSelect;
        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            vm.collection = CollectionService.loadCollectionCreatedCards(user);
            for (var i = 0; i < vm.rewardIds.length; i++) {
                vm.collection.selectCreatedCard(vm.rewardIds[i]);
                vm.selectedCards.push(vm.collection.getCreatedCard(vm.rewardIds[i]));
                vm.numSelected++;
            }
            if (vm.selectedCards.length > 0) {
                vm.lastCard = vm.selectedCards[vm.selectedCards.length - 1];
            }
        }

        function toggleSelect(card) {

            if (card.getSelected()) {
                card.setSelected(false);
                vm.numSelected--;
                removeCard(card);
            } else {
                card.setSelected(true);
                if ((vm.numSelected + 1) > vm.maxCards) {
                    vm.lastCard.setSelected(false);
                    vm.selectedCards.pop();
                } else {
                    vm.numSelected++;
                }
                vm.lastCard = card;
                vm.selectedCards.push(card);
            }
        }

        function removeCard(card) {
            for (var i = 0; i < vm.selectedCards.length; i++) {
                if (vm.selectedCards[i].getRemoteId() == card.getRemoteId()) {
                    vm.selectedCards.splice(i, 1);
                    return;
                }
            }
        }

        function confirm() {
            vm.collection.clearSelections();
            $mdDialog.hide({
                cards: vm.selectedCards
            })
        }

        function cancel() {
            vm.collection.clearSelections();
            $mdDialog.cancel();
        }
    }

})();

