/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardEditorController', CardEditorController);

    CardEditorController.$inject = ["CardEditorService", "MAX_STARS"];

    /* @ngInject */
    function CardEditorController(CardEditorService, MAX_STARS) {

        var vm = this;
        vm.image = {};
        vm.maxStars = MAX_STARS;
        vm.starsFull = new Array(0);
        vm.starsEmpty = new Array(MAX_STARS);
        vm.starsRed = new Array(0);
        vm.showImageRequiredError = false;
        vm.showStarsError = false;
        vm.descriptionTooltipVisible = false;

        vm.calculateStarCount = calculateStarCount;
        vm.statMaxLife = statMaxLife;
        vm.isActionAffordable = isActionAffordable;
        vm.cardImageChanged = cardImageChanged;
        vm.selectDisabled = selectDisabled;
        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            CardEditorService.getMonsterActions().then(function (actions) {
                vm.actions = actions;
                vm.actionMinStars = CardEditorService.getMinStarCost();
            });
            calculateStarCount();
        }

        function isActionAffordable(action) {
            return CardEditorService.isActionAffordable(action, vm.card);
        }

        function calculateStarCount() {
            var stars = CardEditorService.calculateStarCount(vm.card.attack, vm.card.life, vm.card.actions);
            vm.card.setStars(stars);
            if(stars > MAX_STARS) {
                vm.starsFull = new Array(MAX_STARS);
                vm.starsEmpty = new Array(0);
                vm.starsRed = new Array(stars - MAX_STARS);
            } else {
                vm.starsFull = new Array(stars);
                vm.starsEmpty = new Array(MAX_STARS - stars);
                vm.starsRed = new Array(0);
            }
        }

        function statMaxLife() {
            var starCount = CardEditorService.calculateStarCount(vm.card.attack, 0, vm.card.actions);
            var max = Math.min(MAX_STARS, (MAX_STARS-starCount)*2);
            return max;
        }

        function selectDisabled() {
            return !vm.card.getActions()[0] && (vm.maxStars - vm.card.getStars() < vm.actionMinStars)
        }

        function cardImageChanged() {
            vm.showImageRequiredError = false;

            var cardImage = vm.card.getImage();
            cardImage.setOriginalImage(vm.image.base64);
            cardImage.setType(vm.image.filetype);
            cardImage.setFileEnding(vm.image.filename.substr(vm.image.filename.lastIndexOf('.')+1));
            cardImage.setOriginalSize(vm.image);
            cardImage.setImageChanged(true);
        }

        function confirm() {
            var valid = true;

            if(!vm.image.filename) {
                vm.showImageRequiredError = true;
                valid = false;
            } else {
                vm.showImageRequiredError = false;
            }

            if(vm.card.getStars() > MAX_STARS) {
                vm.showStarsError = true;
                valid = false;
            } else {
                vm.showStarsError = false;
            }

            if(valid) {
                CardEditorService.confirm(vm.card);
            }
        }

        function cancel() {
            CardEditorService.cancel();
        }
    }

})
();

