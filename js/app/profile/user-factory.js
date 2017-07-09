/**
 * Created by armin on 07.02.16.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .factory('User', UserFactory);

    UserFactory.$inject = ["$log", "$rootScope", "$q", "$localStorage", "BackendService", "Quest", "CollectionService", "Card", "Deck", "QuestService"];

    /* @ngInject */
    function UserFactory($log, $rootScope, $q, $localStorage, BackendService, Quest, CollectionService, Card, Deck, QuestService) {
        $log = $log.getInstance("User", debugging);

        function User() {
            this.id = -1;
            this.activeQuestIds = [];
            this.createdQuests = [];
            this.name = "";
            this.password = "";
            this.solvedQuestIds = [];
            this.decks = [];
            this.taskCount = 0;
            this.answeredQuestionsCount = 0;
            this.foundLocationsCount = 0;
            this.wonFightsCount = 0;
            this.startedFightsCount = 0;
            this.money = 0;
            this.kmWalked = 0;
            this.cards = [];
            this.createdCards = [];
            this.tutorialPlayed = false;
            this.creationTutorialFlags = {
                card: false,
                deck: false,
                quest: false,
                quiz: false,
                search: false,
                fight: false,
                storyline: false
            };

            this.currentQuest = null;
            this.collection = null;
        }

        User.prototype = {
            constructor: User,
            initFromRemote: initFromRemote,
            load: load,
            createQuest: createQuest,
            addQuest: addQuest,
            deleteQuest: deleteQuest,
            uploadQuest: uploadQuest,
            getCurrentQuest: getCurrentQuest,
            setCurrentQuest: setCurrentQuest,
            clearCurrentQuest: clearCurrentQuest,
            addCreatedCard: addCreatedCard,
            backup: backup,
            upload: upload,

            getId: getId,
            getName: getName,
            getPassword: getPassword,
            getCreatedQuests: getCreatedQuests,
            getActiveQuestIds: getActiveQuestIds,
            getSolvedQuestIds: getSolvedQuestIds,
            getDeckIds: getDeckIds,
            getTaskCount: getTaskCount,
            getAnsweredQuestionsCount: getAnsweredQuestionsCount,
            getFoundLocationsCount: getFoundLocationsCount,
            getWonFightsCount: getWonFightsCount,
            getStartedFightsCount: getStartedFightsCount,
            getMoney: getMoney,
            getKmWalked: getKmWalked,
            getCardIds: getCardIds,
            getCollection: getCollection,
            getTutorialPlayed: getTutorialPlayed,
            getCreationTutorialFlags: getCreationTutorialFlags,
            getCreationTutorialFlag: getCreationTutorialFlag,
            setCreationTutorialFlag: setCreationTutorialFlag,
            setEditing: setEditing,
            clearEditing: clearEditing
        };

        return (User);

        ////////////////

        function initFromRemote(remoteUser) {

            $log.info("initFromRemote: ", remoteUser);
            this.id = remoteUser.getId();
            this.name = remoteUser.getName();
            this.password = remoteUser.getPassword();
            this.activeQuestIds = remoteUser.getActiveQuestIds();
            this.solvedQuestIds = remoteUser.getSolvedQuestIds();
            this.deckIds = remoteUser.getDeckIds();
            this.taskCount = remoteUser.getTaskCount();
            this.answeredQuestionsCount = remoteUser.getAnsweredQuestionsCount();
            this.foundLocationsCount = remoteUser.getFoundLocationsCount();
            this.wonFightsCount = remoteUser.getWonFightsCount();
            this.startedFightsCount = remoteUser.getStartedFightsCount();
            this.money = remoteUser.getMoney();
            this.kmWalked = remoteUser.getKmWalked();
            this.cardIds = remoteUser.getCardIds();
            this.tutorialPlayed = remoteUser.getTutorialPlayed();

            var flagString = remoteUser.getCreationTutorialFlags();
            var flags = flagString.split("|");

            if(flags.length > 1) {
                for(var i = 0; i < flags.length; i++) {
                    var key = flags[i].split(':')[0];
                    this.creationTutorialFlags[key] = flags[i].split(':')[1] != '0';
                }
            }

            var remoteQuests = remoteUser.getCreatedQuestIds();
            for(var i = 0; i < remoteQuests.length; i++) {
                var quest = new Quest();
                quest.setRemoteId(remoteQuests[i]);
                this.createdQuests.push(quest);
            }

            var remoteCreatedCardIds = remoteUser.getCreatedCardIds();
            for(var i = 0; i < remoteCreatedCardIds.length; i++) {
                var card = new Card();
                card.setRemoteId(remoteCreatedCardIds[i]);
                this.createdCards.push(card);
            }

            var remoteCardIds = remoteUser.getCardIds();
            for(var i = 0; i < remoteCardIds.length; i++) {
                var card = new Card();
                card.setRemoteId(remoteCardIds[i].getKey());
                card.setAmount(remoteCardIds[i].getValue());
                this.cards.push(card);
            }

            var remoteDeckIds = remoteUser.getDeckIds();
            for(var i = 0; i < remoteDeckIds.length; i++) {
                var deck = new Deck();
                deck.setRemoteId(remoteDeckIds[i]);
                this.decks.push(deck);
            }

            this.collection = CollectionService.createCollection(this.cards, this.createdCards, this.decks);

            return this.load().then(function() {
                $log.info("initFromRemote_success: ", this);
                return this;
            }.bind(this));
        }

        function load() {
            var promises = [];
            for(var i = 0; i < this.createdQuests.length; i++) {
                promises.push(this.createdQuests[i].getFromRemote());
            }

            return $q.all(promises);
        }

        function createQuest() {
            return new Quest(this.id);
        }

        function addQuest(quest) {
            $log.info("addQuest:", quest);
            this.createdQuests.push(quest);
        }


        function deleteQuest(quest) {
            $log.info("deleteQuest: ", quest);
            for (var i = 0; i < this.createdQuests.length; i++) {
                if (this.createdQuests[i].getRemoteId() == quest.getRemoteId()) {
                    this.createdQuests.splice(i, 1);
                    break;
                }
            }
            if(quest.getRemoteId() > 0 && this.currentQuest && quest.getRemoteId() == this.currentQuest.getRemoteId()) {
                this.clearCurrentQuest();
            }

            this.upload().then(function () {
                $log.info("deleteQuest_success: ");
                quest.remove();
            }.bind(this));
        }

        function uploadQuest() {
            return this.currentQuest.upload().then(function(result) {
                var id = containsQuest(this, result.remoteId);
                if(id == -1)  {
                    this.addQuest(result);
                    this.upload();
                } else {
                    this.createdQuests[id] = result;
                }
                this.clearCurrentQuest();
                return result;
            }.bind(this));
        }

        function containsQuest(user, questId) {
            var id = -1;

            for(var i = 0; i < user.createdQuests.length; i++) {
                if(user.createdQuests[i].remoteId == questId) {
                    id = i;
                }
            }

            return id;
        }

        function setCurrentQuest(quest) {
            this.currentQuest = quest;
            $localStorage.currentQuest = quest;
        }

        function getCurrentQuest() {
            if(!this.currentQuest) {
                this.currentQuest = retrieveCurrentQuest();
            }
            return this.currentQuest;
        }

        function clearCurrentQuest() {
            if(this.currentQuest) {
                var currentQuestId = this.currentQuest.getRemoteId();
                if(currentQuestId > 0) {
                    this.clearEditing(currentQuestId);
                }
            }
            this.currentQuest = null;
            $rootScope.currentQuest = null;
            delete $localStorage.currentQuest;
            delete $localStorage.treePartId;

            $log.info("clearCurrentQuest");
        }

        function setEditing(currentQuestId) {
            for(var i = 0; i < this.createdQuests.length; i++) {
                if(this.createdQuests[i].getRemoteId() == currentQuestId){
                    this.createdQuests[i].setEditing(true);
                }
            }
        }

        function clearEditing(currentQuestId) {
            for(var i = 0; i < this.createdQuests.length; i++) {
                if(this.createdQuests[i].getRemoteId() == currentQuestId){
                    this.createdQuests[i].setEditing(false);
                }
            }
        }

        function addCreatedCard(card) {
            $log.info("addCreatedCard:", card);
            this.collection.addCreatedCard(card);
        }

        function backup() {

            if(!this.currentQuest) {
                return;
            }

            $localStorage.currentQuest = this.currentQuest;
            $localStorage.treePartId = QuestService.getTreePartId();
        }

        function retrieveCurrentQuest() {
            if($localStorage.currentQuest) {
                var quest = new Quest();
                quest.initFromObject($localStorage.currentQuest);
                if($localStorage.treePartId) {
                    QuestService.setTreePartId($localStorage.treePartId);
                } else {
                    QuestService.setTreePartId(1);
                }

                return quest;
            } else {
                return null;
            }
        }

        function upload() {
            $log.info("upload: ", this);
            return BackendService.updateUser(BackendService.createRemoteUser(this)).then(function(result) {
                $log.info("upload_success: ", result);
                return result;
            });
        }

        function getId() {
            return this.id;
        }

        function getName() {
            return this.name;
        }

        function getPassword() {
            return this.password;
        }

        function getCreatedQuests() {
            return this.createdQuests;
        }

        function getActiveQuestIds() {
            return this.activeQuestIds;
        }

        function getSolvedQuestIds() {
            return this.solvedQuestIds;
        }

        function getDeckIds() {
            return this.deckIds;
        }

        function getTaskCount() {
            return this.taskCount;
        }

        function getAnsweredQuestionsCount() {
            return this.answeredQuestionsCount;
        }

        function getFoundLocationsCount() {
            return this.foundLocationsCount;
        }

        function getWonFightsCount() {
            return this.wonFightsCount;
        }

        function getStartedFightsCount() {
            return this.startedFightsCount;
        }

        function getMoney() {
            return this.money;
        }

        function getKmWalked() {
            return this.kmWalked;
        }

        function getCardIds() {
            return this.cardIds;
        }

        function getCollection() {
            return this.collection;
        }

        function getTutorialPlayed() {
            return this.tutorialPlayed;
        }

        function getCreationTutorialFlags() {
            var flags = [];
            for(var key in this.creationTutorialFlags) {
                var flag = key + ':' + (this.creationTutorialFlags[key] ? 1 : 0);
                flags.push(flag);
            }
            return flags.join("|");
        }

        function setCreationTutorialFlag(key) {
            if(!this.creationTutorialFlags[key]) {
                this.creationTutorialFlags[key] = true;
                this.upload();
            }

        }

        function getCreationTutorialFlag(key) {
            return this.creationTutorialFlags[key];
        }
    }

})();