/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .controller('CardController', CardController);

    CardController.$inject = ["$scope", "$mdDialog", "CardService"];

    /* @ngInject */
    function CardController($scope, $mdDialog, CardService) {
        var vm = this;
        vm.originalImage = "";

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
        vm.previewCard = previewCard;

        activate();

        ////////////////

        function activate() {
            if(vm.edit && vm.card.getImage().getOriginalImageSrc() != "") {
                vm.card.loadOriginalCardImage().then(function(image) {
                    vm.originalImage = image;
                });
            }
            $scope.$watch("cardCtrl.card.image.originalImage", function() {
                vm.originalImage = vm.card.getImage().getOriginalImage();
            })
        }

        function getStarImage() {
            return CardService.getStarImage(Math.ceil(vm.card.stars));
        }

        function imageLoaded(originalSize, scaledSize) {
            var cardImage = vm.card.getImage();
            cardImage.setScaledPosition(0, 0);
            cardImage.setOriginalSize(originalSize);
            cardImage.setScaledSize(scaledSize);

            vm.imageContainerStyle = {
                top: 0,
                left: 0,
                width: vm.dimensions.width,
                height: vm.dimensions.height
            };
            vm.dragBoundsStyle = CardService.getDragBounds(vm.dimensions);
            vm.imageContainerStyle.top = cardImage.getTop() - vm.dragBoundsStyle.top;
            vm.imageContainerStyle.left = cardImage.getLeft() - vm.dragBoundsStyle.left;
        }

        function positionChanged(evt) {
            var cardImage = vm.card.getImage();
            cardImage.setScaledPosition(Math.abs(evt.target.offsetTop + vm.dragBoundsStyle.top), Math.abs(evt.target.offsetLeft + vm.dragBoundsStyle.left));
        }

        function editCard() {
            CardService.editCard(vm.card);
        }

        function previewCard(evt) {
            return $mdDialog.show({
                templateUrl: 'js/app/card/card-preview/card-preview.tpl.html',
                controller: 'CardPreviewController',
                controllerAs: 'cardPreview',
                bindToController: true,
                targetEvent: evt,
                clickOutsideToClose: true,
                locals: {
                    card: vm.card
                }
            });
        }

        function deleteCard() {
            CardService.deleteCard(vm.card);
        }
    }

})();

