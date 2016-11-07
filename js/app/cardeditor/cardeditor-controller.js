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

        vm.image = null;

        vm.calculateStarCount = calculateStarCount;
        vm.isActionAffordable = isActionAffordable;
        vm.confirm = confirm;
        vm.downloadImage = downloadImage;
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
            if(vm.image) {
                CardEditorService.confirmCard(vm.card, vm.image.base64);
            }
        }

        function downloadImage() {
            CardEditorService.downloadImage("_1478110802967").then(function(image) {
                vm.image = {};
                vm.image.base64 = image;
                vm.image.filetype = "image/jpeg";
            })
        }

        function close() {
            CardEditorService.cancelCard();
        }
    }

})
();

