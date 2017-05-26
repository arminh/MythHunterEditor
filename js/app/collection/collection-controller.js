/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .controller('CollectionController', CollectionController);

    CollectionController.$inject = ["CollectionService", "MAX_STARS", "user"];

    /* @ngInject */
    function CollectionController(CollectionService, MAX_STARS, user) {
        var vm = this;
        vm.collection = null;
        vm.starsFull = new Array(0);
        vm.starsEmpty = new Array(MAX_STARS);
        vm.filterStars = -1;
        vm.searchText = "";
        vm.deckCreation = false;

        vm.createCard = createCard;
        vm.createDeck = createDeck;
        vm.starsFilter = starsFilter;
        vm.contentFilter = contentFilter;
        vm.filterStarClicked = filterStarClicked;
        vm.showCard = CollectionService.showCard;

        activate();

        ////////////////

        function activate() {
            CollectionService.init(user).then(getCollection);

            function getCollection(actions) {
                vm.collection = CollectionService.loadCollection(actions);
            }
        }

        function starsFilter() {
            return function(card){
                if(vm.filterStars < 0) {
                    return true;
                } else {
                    return (card.getStars() == vm.filterStars);
                }
            }
        }

        function contentFilter() {
            return function(card){
                return card.getName().indexOf(vm.searchText) > -1 || card.getDescription().indexOf(vm.searchText) > -1;
            }
        }

        function filterStarClicked(filterStars, fullStars){
            if(!fullStars) {
                filterStars += vm.starsFull.length;
            }
            if(filterStars == vm.filterStars) {
                vm.filterStars = -1;
                vm.starsFull = new Array(0);
                vm.starsEmpty = new Array(MAX_STARS);
            } else {
                vm.filterStars = filterStars;
                vm.starsFull = new Array(filterStars);
                vm.starsEmpty = new Array(MAX_STARS - filterStars);
            }
        }

        function createCard() {
            CollectionService.createCard();
        }

        function createDeck() {
            vm.deckCreation = true;
            CollectionService.createDeck(vm.collection);
        }
    }

})();

