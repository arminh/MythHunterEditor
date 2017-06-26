/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .controller('CollectionController', CollectionController);

    CollectionController.$inject = ["$state", "$mdDialog", "CollectionService", "MAX_STARS", "MAX_CARD_IN_DECK", "CardType", "user", "$stateParams"];

    /* @ngInject */
    function CollectionController($state, $mdDialog, CollectionService, MAX_STARS, MAX_CARD_IN_DECK, CardType, user, $stateParams) {
        var vm = this;

        vm.user = user;
        vm.collection = null;
        vm.starsFull = new Array(0);
        vm.starsEmpty = new Array(MAX_STARS);
        vm.filterStars = -1;
        vm.searchText = "";
        vm.enemy = null;
        vm.maxSingleCard = MAX_CARD_IN_DECK;

        vm.collectionShown = true;
        vm.createdCardsShown = false;
        vm.editingDeck = false;
        vm.currentDeck = null;
        vm.droppedCard = {};
        vm.enemyDeckPromise = null;

        vm.createCard = createCard;
        vm.createDeck = createDeck;
        vm.addCardToDeck = addCardToDeck;
        vm.starsFilter = starsFilter;
        vm.contentFilter = contentFilter;
        vm.filterStarClicked = filterStarClicked;
        vm.showCreatedCards = showCreatedCards;
        vm.showCollection = showCollection;
        vm.cardDropped = cardDropped;

        vm.cardLocked = cardLocked;
        vm.cardAvailable = cardAvailable;
        vm.openDeck = openDeck;
        vm.cancelDeck = cancelDeck;
        vm.saveDeck = saveDeck;
        vm.removeDeck = removeDeck;

        vm.previewCard = previewCard;

        activate();

        ////////////////

        function activate() {
            if($stateParams.enemy) {
                vm.enemy = $stateParams.enemy;
                CollectionService.loadCollectionEnemy(user).then(function(collection) {
                    vm.collection = collection;
                    CollectionService.openDeck(vm.enemy.getDeck()).then(function(result) {
                        vm.currentDeck = result;
                    });
                    vm.deckControl = {
                        addCard: null
                    };
                });
            } else {
                vm.collection = CollectionService.loadCollection(user);
            }
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
                if (vm.searchText == "Spell") {
                    return card.getType() == CardType.SPELL;
                } else if (vm.searchText == "Monster") {
                    return card.getType() == CardType.MONSTER;
                } else {
                    return card.getName().indexOf(vm.searchText) > -1 || card.getDescription().indexOf(vm.searchText) > -1;
                }
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
            CollectionService.createCard(user);
        }

        function createDeck() {
            // vm.collection.decks.length = 0;
            // user.upload();
            var deck = CollectionService.createDeck(vm.collection);
            openDeck(deck);


        }

        function addCardToDeck(card, isCreatedCard) {
            if(isCreatedCard && vm.enemy) {
                if(card.getLoaded() && vm.deckControl.addCard) {
                    vm.deckControl.addCard(card);
                }
            } else {
                if(card.getLoaded() && vm.deckControl.addCard) {
                    vm.deckControl.addCard(card);
                }
            }
        }

        function cardDropped() {
            var card = CollectionService.getCardById(vm.droppedCard, vm.collection, vm.enemy);
            addCardToDeck(card, false);
            vm.droppedCard = {};
        }

        function cardLocked(card) {
            if(vm.currentDeck) {
                return vm.currentDeck.countCard(card.getRemoteId()) >= MAX_CARD_IN_DECK;
            } else {
                return false;
            }
        }

        function cardAvailable(card) {
            if(vm.currentDeck) {
                return vm.currentDeck.countCard(card.getRemoteId()) < card.getAmount();
            } else {
                return true;
            }
        }

        function openDeck(deck) {


            CollectionService.openDeck(deck).then(function(result) {
                vm.currentDeck = result;
                vm.deckControl = {
                    addCard: null
                };
                var decks = vm.collection.getDecks();

                for (var i = 0; i < decks.length; i++) {
                    decks[i].setVisible(false);
                }

                vm.currentDeck.setVisible(true);
            });


        }

        function cancelDeck() {
            if (vm.currentDeck.getRemoteId() <= 0) {
                vm.collection.removeDeck(vm.currentDeck.getId());
            }
            closeDeck();
        }

        function closeDeck() {

            vm.currentDeck = null;
            vm.control = null;
            var decks = vm.collection.getDecks();
            for (var i = 0; i < decks.length; i++) {
                decks[i].setVisible(true);
            }
        }

        function saveDeck(evt) {
            if(!vm.enemy) {
                vm.saveDeckPromise = CollectionService.saveDeck(vm.currentDeck, vm.collection, evt).then(function () {
                    user.upload();
                    closeDeck();
                });
            } else {
                vm.enemy.setDeck(vm.currentDeck);
                $state.go("app.task", { originalTreePart: $stateParams.originalTreePart, treePart: $stateParams.treePart});
            }
        }

        function removeDeck(deck, evt) {
            CollectionService.removeDeck(vm.collection, deck, evt).then(function () {
                user.upload();
            });
        }

        function previewCard(card, evt) {
            return $mdDialog.show({
                templateUrl: 'js/app/card/card-preview/card-preview.tpl.html',
                controller: 'CardPreviewController',
                controllerAs: 'cardPreview',
                bindToController: true,
                targetEvent: evt,
                clickOutsideToClose: true,
                locals: {
                    card: card
                }
            });
        }
    }

})();

