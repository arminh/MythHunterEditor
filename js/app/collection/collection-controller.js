/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .controller('CollectionController', CollectionController);

    CollectionController.$inject = ["CollectionService", "user"];

    /* @ngInject */
    function CollectionController(CollectionService, user) {
        var vm = this;
        vm.cards = [];

        vm.createCard = createCard;
        vm.showCard = CollectionService.showCard;

        activate();

        ////////////////

        function activate() {
            CollectionService.init(user).then(getCreatedCards);


            function getCreatedCards(actions) {
                CollectionService.getCreatedCards(actions).then(function(createdCards) {
                    vm.cards = createdCards;
                });
            }
        }

        function createCard() {
            CollectionService.createCard().then(addCard);

            function addCard(card) {
                console.log(card);
                vm.cards.push(card);
            }
        }
    }

})();

