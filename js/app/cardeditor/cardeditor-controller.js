/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardEditorController', CardEditorController);

    CardEditorController.$inject = ["CardEditorService", "$scope", "user","card"];

    /* @ngInject */
    function CardEditorController(CardEditorService, $scope, user, card) {

        var vm = this;
        vm.card = card;
        console.log(card);

        vm.image = null;

        vm.maxStars = 10;

        vm.calculateStarCount = calculateStarCount;
        vm.isActionAffordable = isActionAffordable;
        vm.upload = upload;
        vm.downloadImage = downloadImage;
        vm.positionChanged = positionChanged;

        activate();

        ////////////////

        function activate() {
            calculateStarCount();
            CardEditorService.loadActions().then(function(actions) {
                vm.actions = actions;
            });
        }

        function isActionAffordable(action) {
            var starCount = vm.card.stars;
            if(vm.card.action) {
                starCount -= vm.card.action.starCosts;
            }
            return (starCount + action.starCosts) <= vm.maxStars;
        }

        function calculateStarCount() {
            vm.card.stars =  vm.card.attack * 0.5 + vm.card.life * 0.5;
            if(vm.card.action) {
                vm.card.stars += vm.card.action.starCosts;
            }
        }

        function upload() {
            console.log(vm.image);
            if(vm.image) {
                CardEditorService.upload(vm.card, vm.image.base64);
            }
        }

        function downloadImage() {
            CardEditorService.downloadImage("_1478110802967").then(function(image) {
                vm.image = {};
                vm.image.base64 = image;
                vm.image.filetype = "image/jpeg";
            })
        }

        function positionChanged() {

        }
    }

})
();

