/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardEditorController', CardEditorController);

    CardEditorController.$inject = ["$modalInstance", "CardEditorService", "card"];

    /* @ngInject */
    function CardEditorController($modalInstance, CardEditorService, card) {

        var vm = this;
        vm.card = card;
        vm.image = {};

        vm.calculateStarCount = calculateStarCount;
        vm.statMaxLife = statMaxLife;
        vm.isActionAffordable = isActionAffordable;
        vm.cardImageChanged = cardImageChanged;
        vm.confirm = confirm;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
            CardEditorService.setModalInstance($modalInstance);
            CardEditorService.getActions().then(function (actions) {
                vm.actions = actions;
            });
        }

        function isActionAffordable(action) {
            return CardEditorService.isActionAffordable(action, vm.card);
        }

        function calculateStarCount() {
            vm.card.stars = CardEditorService.calculateStarCount(vm.card.attack, vm.card.life, vm.card.actions)
        }

        function statMaxLife() {
            var starCount = CardEditorService.calculateStarCount(vm.card.attack, 0, vm.card.actions);
            var max = Math.min(10, (10-starCount)*2);
            console.log(max);
            return max;
        }

        function cardImageChanged(e, newImage) {
            var cardImage = vm.card.getImage();
            cardImage.setImage(vm.image.base64);
            cardImage.setType(vm.image.filetype);
            cardImage.setFileEnding(vm.image.filename.substr(vm.image.filename.lastIndexOf('.')+1));
            cardImage.setOriginalSize(vm.image);
        }

        function confirm() {
            if (vm.card.image) {
                CardEditorService.confirmCard();
            }
        }

        function close() {
            CardEditorService.cancelCard();
        }
    }

})
();

