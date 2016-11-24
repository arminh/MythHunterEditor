/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardController', CardController);

    CardController.$inject = ["$q", "$scope", "CardService", "ActionService"];

    /* @ngInject */
    function CardController($q, $scope, CardService, ActionService) {
        var vm = this;

        vm.dimensions = {
            width: 0,
            height: 0
        };

        vm.imageDragBounds = null;

        vm.imageDragOptions = {
             containment: 'parent'
        };

        vm.getStarImage = getStarImage;
        vm.imageLoaded = imageLoaded;
        vm.positionChanged = positionChanged;
        vm.editCard = editCard;
        vm.deleteCard = deleteCard;

        activate();

        ////////////////

        function activate() {
            for(var i = 0; i < vm.card.action.length; i++) {

            }
        }

        function getStarImage() {
            return CardService.getStarImage(Math.ceil(vm.card.stars));
        }

        function imageLoaded(originalSize, scaledSize) {
            var cardImage = vm.card.getImage();
            cardImage.setOriginalSize(originalSize);
            cardImage.setScaledSize(scaledSize);

            vm.imageContainerStyle = {
                top: 0,
                left: 0,
                width: vm.dimensions.width,
                height: vm.dimensions.height
            };
            vm.dragBoundsStyle = CardService.getDragBounds(vm.dimensions);
        }

        function positionChanged(evt) {
            var cardImage = vm.card.getImage();
            console.log(cardImage);
            //cardImage.setScaledPosition(evt.target.offsetTop, evt.target.offsetLeft);
        }

        function editCard() {
            CardService.editCard(vm.card);
        }

        function deleteCard() {
            CardService.deleteCard(vm.card);
        }
    }

})();

