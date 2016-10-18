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

        var vm = this;
        vm.image = null;
        vm.attackVal = 5;
        vm.defenceVal = 5;
        vm.cardText = "demo demo demo demo demo demo ";
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

        vm.upload = upload;
        vm.imageLoaded = imageLoaded;
        vm.positionChanged = positionChanged;

        activate();

        ////////////////

        function activate() {
            CardService.loadActions();
        }

        function cardRendered(canvas) {
            console.log(canvas);
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

