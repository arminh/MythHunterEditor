/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardController', CardController);

    CardController.$inject = ["CardService"];

    /* @ngInject */
    function CardController(CardService) {
        var vm = this;

        vm.dimensions = {
            width: 0,
            height: 0
        };

        vm.imageDragBounds = null;

        vm.imageDragOptions = {
            // containment: 'parent'
        };

        vm.getStarImage = getStarImage;
        vm.imageLoaded = imageLoaded;


        activate();

        ////////////////

        function activate() {
            console.log("CardController");
        }

        function getStarImage() {
            return CardService.getStarImage(vm.card.stars);
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
        }
    }

})();

