/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .controller('CollectionController', CollectionController);

    CollectionController.$inject = ["$scope", "CollectionService", "MAX_STARS", "user"];

    /* @ngInject */
    function CollectionController($scope, CollectionService, MAX_STARS, user) {
        var vm = this;

        vm.user = user;
        vm.collection = null;
        vm.starsFull = new Array(0);
        vm.starsEmpty = new Array(MAX_STARS);
        vm.filterStars = -1;
        vm.searchText = "";

        vm.collectionShown = true;
        vm.createdCardsShown = false;
        vm.editingDeck = false;
        vm.currentDeck = null;

        vm.createCard = createCard;
        vm.createDeck = createDeck;
        vm.addCardToDeck = addCardToDeck;
        vm.starsFilter = starsFilter;
        vm.contentFilter = contentFilter;
        vm.filterStarClicked = filterStarClicked;
        vm.showCreatedCards = showCreatedCards;
        vm.showCollection = showCollection;

        vm.openDeck = openDeck;
        vm.closeDeck = closeDeck;

        activate();

        ////////////////

        function activate() {
            vm.collection = CollectionService.loadCollection(user);
        }

        function starsFilter() {
            return function (card) {
                if (vm.filterStars < 0) {
                    return true;
                } else {
                    return (card.getStars() == vm.filterStars);
                }
            }
        }

        function contentFilter() {
            return function (card) {
                return card.getName().indexOf(vm.searchText) > -1 || card.getDescription().indexOf(vm.searchText) > -1;
            }
        }

        function filterStarClicked(filterStars, fullStars) {
            if (!fullStars) {
                filterStars += vm.starsFull.length;
            }
            if (filterStars == vm.filterStars) {
                vm.filterStars = -1;
                vm.starsFull = new Array(0);
                vm.starsEmpty = new Array(MAX_STARS);
            } else {
                vm.filterStars = filterStars;
                vm.starsFull = new Array(filterStars);
                vm.starsEmpty = new Array(MAX_STARS - filterStars);
            }
        }

        function showCollection() {
            vm.collectionShown = true;
            vm.createdCardsShown = false;
        }

        function showCreatedCards() {
            vm.collectionShown = false;
            vm.createdCardsShown = true;
        }

        function createCard() {
            CollectionService.createCard();
        }

        function createDeck() {
            vm.currentDeck = CollectionService.createDeck(vm.collection);
        }

        function addCardToDeck(card) {
            if (vm.currentDeck && card.getLoaded()) {
                vm.currentDeck.addCard(card);
            }
        }

        function openDeck(deck) {

            vm.currentDeck = deck;
            var decks = vm.collection.getDecks();

            for (var i = 0; i < decks.length; i++) {
                decks[i].setVisible(false);
            }

            vm.currentDeck.setVisible(true);
        }

        function closeDeck() {
            vm.currentDeck.closeDeck();

            var decks = vm.collection.getDecks();
            for (var i = 0; i < decks.length; i++) {
                decks[i].setVisible(true);
            }
            vm.currentDeck = null;
        }
    }

})();

