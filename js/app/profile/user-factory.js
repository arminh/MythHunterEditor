/**
 * Created by armin on 07.02.16.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .factory('User', UserFactory);

    UserFactory.$inject = ["$log", "$rootScope", "$q", "$localStorage", "BackendService", "Quest", "Card"];

    /* @ngInject */
    function UserFactory($log, $rootScope, $q, $localStorage, BackendService, Quest, Card) {
        $log = $log.getInstance("User", debugging);

        function User() {
            this.id = -1;
            this.name = "";
            this.password = "";
            this.currentQuest = null;
            this.createdQuests = [];
            this.createdCards = [];
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
            addCreatedCard: addCreatedCard,
            backup: backup,
            upload: upload,

            getId: getId,
            getName: getName,
            getPassword: getPassword,
            getCreatedQuests: getCreatedQuests,
            getCreatedCards: getCreatedCards
        };

        return (User);

        ////////////////

        function initFromRemote(remoteUser) {
            $log.info("initFromRemote: ", remoteUser);
            this.id = remoteUser.getId();
            this.name = remoteUser.getName();
            this.password = remoteUser.getPassword();

            var remoteQuests = remoteUser.getCreatedQuestIds();
            for(var i = 0; i < remoteQuests.length; i++) {
                var quest = new Quest();
                quest.remoteId = remoteQuests[i];
                this.createdQuests.push(quest);
            }

            var remoteCreatedCards = remoteUser.getCreatedCardIds();
            for(var i = 0; i < remoteCreatedCards.length; i++) {
                var card = new Card();
                card.remoteId = remoteCreatedCards[i];
                this.createdCards.push(card);
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

        function addCreatedCard(card) {
            this.createdCards.push(card);
        }

        function getCurrentCard() {
            return null;
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

        function getCreatedCards() {
            return this.createdCards;
        }
    }

})();