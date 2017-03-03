/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardEditorController', CardEditorController);

    CardEditorController.$inject = ["$modalInstance", "CardEditorService","card"];

    /* @ngInject */
    function CardEditorController($modalInstance, CardEditorService, card) {

        var vm = this;
        vm.card = card;
        vm.image = {};
        console.log(card);

        vm.calculateStarCount = calculateStarCount;
        vm.isActionAffordable = isActionAffordable;
        vm.cardImageChanged = cardImageChanged;
        vm.confirm = confirm;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
            CardEditorService.setModalInstance($modalInstance);
            CardEditorService.getActions().then(function(actions) {
                vm.actions = actions;
            });
        }

        function isActionAffordable(action) {
            return CardEditorService.isActionAffordable(action, vm.card);
        }

        function calculateStarCount() {
            vm.card.stars = CardEditorService.calculateStarCount(vm.card.attack, vm.card.life, vm.card.actions)
        }

        function cardImageChanged(e, newImage) {
            var cardImage = vm.card.getImage();
             cardImage.setContent(vm.image.base64);
             cardImage.setType(vm.image.filetype);
             cardImage.setOriginalSize(vm.image);
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

