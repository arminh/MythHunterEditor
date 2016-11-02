/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardController', CardController);

    CardController.$inject = ["CardService", "$scope"];

    /* @ngInject */
    function CardController(CardService, $scope) {

        var starImages = [
            "media/card/card_plain_stars_1.png",
            "media/card/card_plain_stars_2.png",
            "media/card/card_plain_stars_3.png",
            "media/card/card_plain_stars_4.png",
            "media/card/card_plain_stars_5.png",
            "media/card/card_plain_stars_6.png",
            "media/card/card_plain_stars_7.png",
            "media/card/card_plain_stars_8.png",
            "media/card/card_plain_stars_9.png",
            "media/card/card_plain_stars_10.png"
        ];

        var vm = this;
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

        vm.dimensions = {
            width: 0,
            height: 0
        };

        vm.imageDragBounds = null;

        vm.imageDragOptions = {
            containment: 'parent'
        };

        vm.maxStars = 10;
        vm.starCount = 0.0;

        vm.attackChanged = attackChanged;
        vm.defenceChanged = defenceChanged;
        vm.descriptionChanged = descriptionChanged;
        vm.actionChanged = actionChanged;
        vm.isActionAffordable = isActionAffordable;
        vm.upload = upload;
        vm.imageLoaded = imageLoaded;
        vm.downloadImage = downloadImage;
        vm.positionChanged = positionChanged;

        activate();

        ////////////////

        function activate() {
            vm.starCount = calculateStartCount();
            vm.starImage = starImages[vm.starCount];
            CardService.loadActions().then(function(actions) {
                vm.actions = actions;
            });
        }

        function attackChanged(newVal) {
            vm.starCount = calculateStartCount();
            vm.starImage = starImages[vm.starCount];
        }
        function defenceChanged(newVal) {
            vm.starCount = calculateStartCount();
            vm.starImage = starImages[vm.starCount];
        }

        function descriptionChanged(newVal) {
            vm.starCount = calculateStartCount();
            vm.starImage = starImages[vm.starCount];
        }

        function actionChanged(newVal) {
            vm.starCount = calculateStartCount();
            vm.starImage = starImages[vm.starCount];
        }

        function isActionAffordable(action) {
            var starCount = vm.starCount;
            if(vm.action) {
                starCount -= vm.action.starCosts;
            }
            return (starCount + action.starCosts) <= vm.maxStars;
        }

        function calculateStartCount() {
            if(!vm.attack || !vm.defence) {
                vm.starCount = 0;
            }
            var starCount =  vm.attack * 0.5 + vm.defence * 0.5;
            if(vm.action) {
                starCount += vm.action.starCosts;
            }
            return starCount;
        }

        function cardRendered(canvas) {
            console.log(canvas);
        }

        function upload() {
            console.log(vm.image);
            if(vm.image) {
                CardService.upload(vm.image.base64, vm.name, vm.description, vm.attack, vm.defence, vm.action, vm.starCount);
            }
        }

        function downloadImage() {
            CardService.downloadImage("_1478110802967").then(function(image) {
                vm.image = {};
                vm.image.base64 = image;
                vm.image.filetype = "image/jpeg";
            })
        }

        function imageLoaded() {
            vm.imageContainerStyle = {
                top: 0,
                left: 0,
                width: vm.dimensions.width,
                height: vm.dimensions.height
            };

            vm.width = vm.dimensions.width;
            vm.height = vm.dimensions.height;
            vm.top = 0;
            vm.left = 0;

            vm.imageDragBounds = CardService.initDragBounds(vm.dimensions);

        }

        function positionChanged(evt) {
            vm.pos = $(evt.target).position();
            vm.top = vm.pos.top;
            vm.left = vm.pos.left;
            $scope.$apply();
        }
    }

})
();

