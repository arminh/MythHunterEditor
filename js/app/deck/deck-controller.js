/**
 * Created by Hannah on 25.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('deck')
        .controller('DeckController', DeckController);

    DeckController.$inject = ["CollectionService"];

    /* @ngInject */
    function DeckController(CollectionService) {
        var vm = this;
        vm.showCardList = false;

        vm.open = open;
        vm.close = close;

        activate();

        ////////////////

        function activate() {

        }

        // function open() {
        //     if(!vm.showCardList && !vm.deck.getLoaded()) {
        //         var collection = vm.user.getCollection();
        //         vm.deck.loadCards(collection.getCards());
        //     }
        //     vm.showCardList = true;
        // }
        //
        // function close() {
        //     vm.showCardList = false;
        // }
    }



})();

