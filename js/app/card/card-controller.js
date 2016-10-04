/**
 * Created by armin on 22.06.16.
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
        vm.image = null;
        vm.attackVal = 5;
        vm.defenceVal = 5;
        vm.cardText = "demo demo demo demo demo demo ";
        vm.dimensions = {
            width: 0,
            height: 0
        };

        vm.imageDragBounds = null;

        vm.imageDragOptions = {
            containment: 'parent'
        };

        vm.upload = upload;
        vm.imageLoaded = imageLoaded;

        activate();

        ////////////////

        function activate() {

        }

        function upload() {
            CardService.upload(vm.image.base64);
        }

        function imageLoaded() {
            vm.imageContainerStyle = {
                top: 0,
                left: 0,
                width: vm.dimensions.width,
                height: vm.dimensions.height

            };

            vm.imageDragBounds = CardService.initDragBounds(vm.dimensions);

        }
    }

})
();

