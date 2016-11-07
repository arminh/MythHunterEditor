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

        vm.createCard = CollectionService.createCard;

        activate();

        ////////////////

        function activate() {
            CollectionService.setUser(user);
            CollectionService.getCreatedCards().then(function(createdCards) {
                vm.cards = createdCards;
            })
        }
    }

})();

