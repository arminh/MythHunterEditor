/**
 * Created by armin on 07.02.16.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .factory('User', UserFactory);

    UserFactory.$inject = ["$log", "$rootScope", "$q", "$localStorage", "BackendService", "Quest"];

    /* @ngInject */
    function UserFactory($log, $rootScope, $q, $localStorage, BackendService, Quest) {
        $log = $log.getInstance("User", debugging);

        function User() {
            this.id = -1;
            this.activeQuestIds = [];
            this.createdQuests = [];
            this.name = "";
            this.password = "";
            this.solvedQuestIds = [];
            this.deckIds = [];
            this.taskCount = 0;
            this.answeredQuestionsCount = 0;
            this.foundLocationsCount = 0;
            this.wonFightsCount = 0;
            this.startedFightsCount = 0;
            this.money = 0;
            this.kmWalked = 0;
            this.cardIds = [];
            this.createdCardIds = [];
            this.tutorialPlayed = false;

            this.currentQuest = null;
        }

        User.prototype = {
            constructor: User,
            initFromRemote: initFromRemote,
            load: load,
            newQuest: newQuest,
            addQuest: addQuest,
            deleteQuest: deleteQuest,
            uploadQuest: uploadQuest,
            getCurrentQuest: getCurrentQuest,
            setCurrentQuest: setCurrentQuest,
            clearCurrentQuest: clearCurrentQuest,
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
            getCreatedCardIds: getCreatedCardIds,
            getTutorialPlayed: getTutorialPlayed
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
            this.createdCardIds = remoteUser.getCreatedCardIds();
            this.tutorialPlayed = remoteUser.getTutorialPlayed();

            var remoteQuests = remoteUser.getCreatedQuestIds();
            for(var i = 0; i < remoteQuests.length; i++) {
                var quest = new Quest();
                quest.remoteId = remoteQuests[i];
                this.createdQuests.push(quest);
            }

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

        function newQuest() {
            var quest = new Quest(this.id);
            return quest.create().then(function(result) {
                this.currentQuest = result;
                this.currentQuest.creatorId = this.id;
                this.backup();
                return result;
            }.bind(this));
        }

        function addQuest(quest) {
            this.createdQuests.push(quest);
        }


        function deleteQuest(quest) {
            for (var i = 0; i < this.createdQuests.length; i++) {
                if (this.createdQuests[i].remoteId = quest.remoteId) {
                    this.createdQuests.splice(i, 1);
                }
            }

            this.upload().then(function () {
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
            var editQuest = angular.copy(quest);

            $localStorage.currentQuest = editQuest;
            this.currentQuest = editQuest;
        }

        function getCurrentQuest() {
            if(!this.currentQuest) {
                this.currentQuest = retrieveCurrentQuest();
            }
            this.backup();
            return this.currentQuest;
        }

        function clearCurrentQuest() {
            this.currentQuest = null;
            $rootScope.currentQuest = null;
            delete $localStorage.currentQuest;

            $log.info("clearCurrentQuest");
        }

        function backup() {

            if(!this.currentQuest) {
                return;
            }

            var treePartId = 0;

            this.currentQuest.treePartRoot.setId(treePartId++);
            for(var i = 0; i < this.currentQuest.treeParts.length; i++) {
                this.currentQuest.treeParts[i].setId(treePartId++);
            }

            $localStorage.currentQuest = this.currentQuest;
        }

        function retrieveCurrentQuest() {
            if($localStorage.currentQuest) {
                var quest = new Quest();
                quest.initFromObject($localStorage.currentQuest);
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

        function getCreatedCardIds() {
            return this.createdCardIds;
        }

        function getTutorialPlayed() {
            return this.tutorialPlayed;
        }
    }

})();