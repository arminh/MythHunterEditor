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
        vm.saveDeck = saveDeck;
        vm.removeDeck = removeDeck;

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
            // vm.collection.decks.length = 0;
            // user.upload();
            var deck = CollectionService.createDeck(vm.collection);
            openDeck(deck);

        }

        function addCardToDeck(card) {
            CollectionService.addCardToDeck(card, vm.currentDeck);
        }

        function openDeck(deck) {

            vm.currentDeck = CollectionService.openDeck(deck);
            var decks = vm.collection.getDecks();

            for (var i = 0; i < decks.length; i++) {
                decks[i].setVisible(false);
            }

            vm.currentDeck.setVisible(true);
        }

        function closeDeck() {
            if(vm.currentDeck.getRemoteId() <= 0) {
                vm.collection.removeDeck(vm.currentDeck.getId());
            }

            vm.currentDeck = null;
            var decks = vm.collection.getDecks();
            for (var i = 0; i < decks.length; i++) {
                decks[i].setVisible(true);
            }
        }

        function saveDeck() {
            vm.saveDeckPromise = CollectionService.saveDeck(vm.currentDeck).then(function() {
                user.upload();
                closeDeck();
            });
        }

        function removeDeck(deck) {
            CollectionService.removeDeck(vm.collection, deck).then(function() {
                user.upload();
            });
        }
    }

})();

