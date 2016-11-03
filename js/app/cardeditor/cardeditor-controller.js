/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardEditorController', CardEditorController);

    CardEditorController.$inject = ["CardEditorService", "$scope", "card"];

    /* @ngInject */
    function CardEditorController(CardEditorService, $scope, card) {

        var vm = this;
        vm.card = card;
        console.log(card);

        vm.name = "";
        vm.image = null;
        vm.attack = 2;
        vm.defence = 2;
        vm.action = null;
        vm.description = "demo demo demo demo demo demo ";
        vm.width = -1;
        vm.height = -1;
        vm.top = -1;
        vm.left = -1;

        vm.maxStars = 10;

        vm.calculateStarCount = calculateStarCount;
        vm.isActionAffordable = isActionAffordable;
        vm.upload = upload;
        vm.downloadImage = downloadImage;
        vm.positionChanged = positionChanged;

        activate();

        ////////////////

        function activate() {
            vm.card.stars = calculateStarCount();
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
            if(!vm.card.attack || !vm.card.life) {
                vm.card.stars = 0;
            }
            vm.card.stars =  vm.card.attack * 0.5 + vm.card.life * 0.5;
            if(vm.card.action) {
                vm.card.stars += vm.card.action.starCosts;
            }
            console.log(vm.card.stars);
        }

        function upload() {
            console.log(vm.image);
            if(vm.image) {
                CardEditorService.upload(vm.image.base64, vm.name, vm.description, vm.attack, vm.defence, vm.action, vm.starCount);
            }
        }

        function downloadImage() {
            CardEditorService.downloadImage("_1478110802967").then(function(image) {
                vm.image = {};
                vm.image.base64 = image;
                vm.image.filetype = "image/jpeg";
            })
        }
    }

})
();

