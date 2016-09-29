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

        vm.imageDragOptions = {

        };

        vm.upload = upload;
        vm.imageDragging = imageDragging;

        activate();

        ////////////////

        function activate() {

        }

        function upload() {
            CardService.upload(vm.image.base64);
        }

        function imageDragging(evt) {
            var cardImage = $(evt.target);
            if(cardImage.position().left > 150) {
                cardImage.css('left', 150);
                evt.preventDefault();
            } else if(cardImage.position().left < (150 - cardImage.width() + 214)) {
                cardImage.css('left', (150 - cardImage.width() + 214));
                evt.preventDefault();
            }
        }
    }

})();

