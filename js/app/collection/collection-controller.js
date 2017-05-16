/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .controller('CollectionController', CollectionController);

    CollectionController.$inject = ["$q", "CollectionService", "user"];

    /* @ngInject */
    function CollectionController($q, CollectionService, user) {
        var vm = this;
        vm.collection = null;

        vm.createCard = createCard;
        vm.showCard = CollectionService.showCard;

        activate();

        ////////////////

        function activate() {
            CollectionService.init(user).then(getCollection);

            function getCollection(actions) {
                vm.collection = CollectionService.loadCollection(actions);
            }
        }

        function createCard() {
            CollectionService.createCard();
        }
    }

})();

