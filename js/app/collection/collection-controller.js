/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('collection')
        .controller('CollectionController', CollectionController);

    CollectionController.$inject = ["$state", "$mdDialog", "$timeout", "$translate", "CollectionService", "DeckService", "MAX_STARS", "MAX_CARD_IN_DECK", "CardType", "user", "$stateParams", "ngIntroService", "CreationTutorialFlags"];

    /* @ngInject */
    function CollectionController($state, $mdDialog, $timeout, $translate, CollectionService, DeckService, MAX_STARS, MAX_CARD_IN_DECK, CardType, user, $stateParams, ngIntroService, CreationTutorialFlags) {
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
        vm.clearCurrentDeck = clearCurrentDeck;
        vm.starsFilter = starsFilter;
        vm.contentFilter = contentFilter;
        vm.filterStarClicked = filterStarClicked;
        vm.clearFilterStars = clearFilterStars;
        vm.showCreatedCards = showCreatedCards;
        vm.showCollection = showCollection;
        vm.cardDropped = cardDropped;
        vm.showTutorial = showTutorial;
        vm.showInstructions = showInstructions;

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
            if ($stateParams.enemy) {
                vm.enemy = $stateParams.enemy;
                CollectionService.loadCollectionEnemy(user).then(function (collection) {
                    vm.collection = collection;
                    var enemyDeck = vm.enemy.getDeck();
                    var deck = null;
                    if(enemyDeck.getIsDefault()) {
                        deck = DeckService.createDeck();
                    } else {
                        deck = angular.copy(enemyDeck);
                        deck.setLoadCardsPromise(DeckService.loadCards(deck, collection.getCards()));
                    }

                    //
                    showOpenDeckDialog(deck);
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
                clearFilterStars();
            } else {
                vm.filterStars = filterStars;
                vm.starsFull = new Array(filterStars);
                vm.starsEmpty = new Array(MAX_STARS - filterStars);
            }
        }

        function clearFilterStars() {
            vm.filterStars = -1;
            vm.starsFull = new Array(0);
            vm.starsEmpty = new Array(MAX_STARS);
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
            var deck = CollectionService.createDeck(vm.collection);
            showOpenDeckDialog(deck);

        }

        function showOpenDeckDialog(deck) {
            CollectionService.showCreateDeckDialog(user, true).then(function (tutorial) {
                openDeck(deck).then(function () {
                    if (tutorial) {
                        console.log("start intro");
                        $timeout(vm.startIntro);
                    }
                });
            });
        }

        function clearCurrentDeck() {
            vm.deckControl.clearDeck();
        }

        function addCardToDeck(card, isCreatedCard) {
            if (isCreatedCard && vm.enemy) {
                if (card.getLoaded() && vm.deckControl.addCard) {
                    vm.deckControl.addCard(card);
                }
            } else {
                if (card.getLoaded() && vm.deckControl.addCard) {
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
            if (vm.currentDeck) {
                return vm.currentDeck.countCard(card.getRemoteId()) >= MAX_CARD_IN_DECK;
            } else {
                return false;
            }
        }

        function cardAvailable(card) {
            if (vm.currentDeck) {
                return vm.currentDeck.countCard(card.getRemoteId()) < card.getAmount();
            } else {
                return true;
            }
        }

        function openDeck(deck) {
            vm.deckControl = {
                addCard: null,
                clearDeck: null
            };
            console.log("openingDeck");
            vm.currentDeck = CollectionService.openDeck(deck, vm.collection.getCards());


            return vm.currentDeck.getLoadCardsPromise().then(function () {

                return $timeout(function () {
                    console.log("init intro");
                    ngIntroService.clear();
                    vm.introOptions = {
                        steps: [
                            {
                                element: document.querySelector('#deck-name'),
                                intro: $translate.instant("TUT_DECK_NAME")
                            },
                            {
                                element: document.querySelector('#collection-cards'),
                                intro: $translate.instant("TUT_DECK_CARDS"),
                                position: 'top'
                            },
                            {
                                element: document.querySelector('#deck-content'),
                                intro: $translate.instant("TUT_DECK_REMOVE_CARD"),
                                position: 'left'
                            },
                            {
                                element: document.querySelector('#card-count'),
                                intro: $translate.instant("TUT_DECK_NUM_CARDS"),
                                position: 'left'
                            },
                            {
                                element: document.querySelector('#save-deck'),
                                intro: $translate.instant("TUT_DECK_FINISHED"),
                                position: 'left'
                            }
                        ],
                        keyboardNavigation: false,
                        showStepNumbers: false,
                        showBullets: true,
                        exitOnOverlayClick: false,
                        exitOnEsc: true,
                        hidePrev: true,
                        nextLabel: $translate.instant("BUTTON_NEXT"),
                        prevLabel: $translate.instant("BUTTON_PREV"),
                        skipLabel: $translate.instant("BUTTON_SKIP"),
                        doneLabel: $translate.instant("BUTTON_DONE")
                    };

                });
            });

        }

        function cancelDeck() {
            if (!vm.enemy) {
                if (vm.currentDeck.getRemoteId() <= 0) {
                    vm.collection.removeDeck(vm.currentDeck.getId());
                }
                closeDeck();
            } else {
                $state.go("app.task", {
                    originalTreePart: $stateParams.originalTreePart,
                    treePart: $stateParams.treePart
                });
            }

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
            user.setCreationTutorialFlag(CreationTutorialFlags.DECK);
            ngIntroService.clear();
            if (!vm.enemy) {
                vm.saveDeckPromise = CollectionService.saveDeck(vm.currentDeck, vm.collection, evt).then(function () {
                    user.setCreationTutorialFlag(CreationTutorialFlags.DECK);
                    user.upload();
                    closeDeck();
                });
            } else {
                vm.enemy.setDeck(vm.currentDeck);
                $state.go("app.task", {
                    originalTreePart: $stateParams.originalTreePart,
                    treePart: $stateParams.treePart
                });
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

        function showTutorial() {
            vm.startIntro();
        }

        function showInstructions() {

            CollectionService.showCreateDeckDialog(user, false);
        }

    }

})();

