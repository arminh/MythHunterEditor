/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardEditorController', CardEditorController);

    CardEditorController.$inject = ["$modalInstance", "CardEditorService", "user","card"];

    /* @ngInject */
    function CardEditorController($modalInstance, CardEditorService, user, card) {

        var vm = this;
        vm.card = card;
        console.log(card);

        vm.calculateStarCount = calculateStarCount;
        vm.isActionAffordable = isActionAffordable;
        vm.confirm = confirm;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
            CardEditorService.setModalInstance($modalInstance);
            CardEditorService.loadActions().then(function(actions) {
                vm.actions = actions;
            });
        }

        function isActionAffordable(action) {
            return CardEditorService.isActionAffordable(action, vm.card.stars, vm.card.actions);
        }

        function calculateStarCount() {
            vm.card.stars = CardEditorService.calculateStarCount(vm.card.attack, vm.card.life, vm.card.actions)
        }

        function confirm() {
            if(vm.card.image) {
                CardEditorService.confirmCard();
            }
        }

        function close() {
            CardEditorService.cancelCard();
        }
    }

})
();

