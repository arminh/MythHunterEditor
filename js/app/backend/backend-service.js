/**
 * Created by armin on 02.02.16.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .factory('BackendService', BackendService);

    BackendService.$inject = ["$log", '$q'];

    /* @ngInject */
    function BackendService($log, $q) {

        var backend = new backend_com_wsdl_IBackend();
        backend.url = "http://mythhunter.ddns.net:18080/Backend/webservices/Backend?wsdl";
        var cardRequests = [];
        // backend.url = "http://192.168.1.238:8080/Backend/webservices/Backend?wsdl";
        $log = $log.getInstance("Backend", debugging);

        var service = {
            login: login,
            register: register,
            createRemoteUser: createRemoteUser,
            createRemoteQuest: createRemoteQuest,
            createRemoteTask: createRemoteTask,
            createRemoteHtml: createRemoteHtml,
            createRemoteTreePart: createRemoteTreePart,
            createRemoteCard: createRemoteCard,
            createRemoteCardImage: createRemoteCardImage,
            createRemoteEnemy: createRemoteEnemy,
            createRemoteDeck: createRemoteDeck,
            getQuest: getQuest,
            getQuests: getQuests,
            getTask: getTask,
            getHtml: getHtml,
            getTreePart: getTreePart,
            getCard: getCard,
            getCardImage: getCardImage,
            abortCardRequests: abortCardRequests,
            getAllActionsOfCardType: getAllActionsOfCardType,
            getEnemy: getEnemy,
            getDeck: getDeck,
            addQuest: addQuest,
            addTask: addTask,
            addHtml: addHtml,
            addCard: addCard,
            addCardImage: addCardImage,
            addTreePart: addTreePart,
            addEnemy: addEnemy,
            addDeck: addDeck,
            updateUser: updateUser,
            updateQuest: updateQuest,
            updateTask: updateTask,
            updateHtml: updateHtml,
            updateCard: updateCard,
            updateCardImage: updateCardImage,
            updateEnemy: updateEnemy,
            updateDeck: updateDeck,
            deleteQuest: deleteQuest,
            deleteTask: deleteTask,
            deleteTreePart: deleteTreePart,
            deleteHtml: deleteHtml,
            deleteDeck: deleteDeck,
            uploadImage: uploadImage,
            downloadImage: downloadImage,
            convertImage: convertImage,
            mapPosition: mapPosition,
            getStandartDeck: getStandartDeck,
            getQuestsInRange: getQuestsInRange

        };
        return service;

        ////////////////

        function uploadImage(fileName, imageData) {
            var deffered = $q.defer();

            $log.info("uploadFile", fileName);
            backend.uploadFile(function (result) {
                $log.info("uploadFile_success", result.getReturn());
                deffered.resolve(result.getReturn());
            }, function (error) {
                $log.error("uploadFile_fail", error);
                deffered.reject(error);
            }, fileName, imageData);

            return deffered.promise;
        }

        function downloadImage(fileName) {
            var deffered = $q.defer();

            $log.info("downloadImage", fileName);
            backend.downloadFile(function (result) {
                $log.info("downloadImage_success", fileName);
                deffered.resolve(result.getReturn());
            }, function (error) {
                $log.error("downloadImage_fail", error);
                deffered.reject(error);
            }, fileName);

            return deffered.promise;
        }

        function convertImage(serverPath, left, top, width, height) {
            var deffered = $q.defer();

            var params = new backend_com_wsdl_integrationConfigParams();
            params.setInName(serverPath);
            params.setOutName("");
            params.setTopX(left);
            params.setTopY(top);
            params.setHeight(height);
            params.setWidth(width);

            $log.info("convertImage", params);
            backend.convertPicture(function (result) {
                $log.info("convertImage_success", result);
                var resultParams = result.getReturn();
                deffered.resolve(resultParams.getOutName());
            }, function (error) {
                $log.error("convertImage_fail", error);
                deffered.reject(error);
            }, params);

            return deffered.promise;
        }

        function login(username, password) {
            var deffered = $q.defer();

            $log.info("login", username);
            1
            backend.login(function (result) {
                if (result.getReturn()) {
                    $log.info("login_success", username);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.warn("login_fail", username);
                    deffered.reject("Wrong username or password");
                }

            }, function (error) {
                alert("Login error: " + error);
                $log.error("login_fail", error);
                deffered.reject(error);
            }, username, password);

            return deffered.promise;
        }

        function register(username, password) {
            var deffered = $q.defer();

            backend.register(function (result) {
                deffered.resolve(result);
            }, function (error) {
                alert("Register error: " + error);
                deffered.reject(error);
            }, username, password);

            return deffered.promise;
        }

        function createRemoteUser(user) {
            var remoteUser = new backend_com_wsdl_user();

            remoteUser.setName(user.getName());
            remoteUser.setPassword(user.getPassword());
            remoteUser.setId(user.getId());
            remoteUser.setActiveQuestIds(user.getActiveQuestIds());
            remoteUser.setSolvedQuestIds(user.getSolvedQuestIds());
            remoteUser.setDeckIds(user.getDeckIds());
            remoteUser.setTaskCount(user.getTaskCount());
            remoteUser.setAnsweredQuestionsCount(user.getAnsweredQuestionsCount());
            remoteUser.setFoundLocationsCount(user.getFoundLocationsCount());
            remoteUser.setWonFightsCount(0);
            remoteUser.setStartedFightsCount(0);
            // remoteUser.setWonFightsCount(user.getWonFightsCount());
            // remoteUser.setStartedFightsCount(user.getStartedFightsCount());
            remoteUser.setMoney(user.getMoney());
            remoteUser.setKmWalked(user.getKmWalked());
            remoteUser.setCardIds(user.getCardIds());
            remoteUser.setTutorialPlayed(user.getTutorialPlayed());
            remoteUser.setCreationTutorialFlags(user.getCreationTutorialFlags());

            var createdQuestIds = [];
            var createdCardIds = [];
            var createdDeckIds = [];
            var createdQuests = user.getCreatedQuests();
            var createdCards = user.getCollection().getCreatedCards();
            var createdDecks = user.getCollection().getCreatedDecks();

            for (var i = 0; i < createdQuests.length; i++) {
                createdQuestIds.push(createdQuests[i].getRemoteId());
            }
            for (i = 0; i < createdCards.length; i++) {
                createdCardIds.push(createdCards[i].getRemoteId());
            }
            for (i = 0; i < createdDecks.length; i++) {
                createdDeckIds.push(createdDecks[i].getRemoteId());
            }

            remoteUser.setCreatedQuestIds(createdQuestIds);
            remoteUser.setCreatedCardIds(createdCardIds);
            remoteUser.setDeckIds(createdDeckIds);

            return remoteUser;
        }

        function createRemoteQuest(quest) {
            var remoteQuest = new backend_com_wsdl_editorQuest();

            remoteQuest.setId(quest.getRemoteId());
            remoteQuest.setVersion(quest.getVersion());
            remoteQuest.setCreaterId(quest.getCreatorId());
            remoteQuest.setName(quest.getName());
            remoteQuest.setShortDescription(quest.getDescription());

            remoteQuest.setHtmlId(quest.getHtml().getRemoteId());
            remoteQuest.setTreeRootId(quest.getTreePartRoot().getRemoteId());

            remoteQuest.setSubmitted(quest.getSubmitted());
            remoteQuest.setApproved(quest.getApproved());

            remoteQuest.setSpecialCards(quest.getSpecialCards());
            remoteQuest.setDifficulty(quest.getDifficulty());
            remoteQuest.setQualityRating(quest.getQualityRating());
            remoteQuest.setDifficultyRating(quest.getDifficultyRating());

            return remoteQuest;
        }

        function createRemoteTask(task) {

            var remoteTask = new backend_com_wsdl_marker();

            if (task.type == "start") {
                remoteTask.setType("INFO");
            } else {
                remoteTask.setType(task.getType());
            }
            remoteTask.setVersion(task.getVersion());
            remoteTask.setId(task.getRemoteId());
            remoteTask.setName(task.getName());
            remoteTask.setHtmlId(task.getHtml().getRemoteId());
            if (task.getTargetHtml()) {
                remoteTask.setFinishedHtmlId(task.getTargetHtml().getRemoteId());
            } else {
                remoteTask.setFinishedHtmlId(0);
            }

            if (task.getEnemy()) {
                remoteTask.setEnemyId(task.getEnemy().getRemoteId());
            } else {
                remoteTask.setEnemyId(0);
            }

            remoteTask.setPosition(mapPosition(task.getLon(), task.getLat()));
            remoteTask.setTargetPosition(mapPosition(task.getTargetLon(), task.getTargetLat()));

            return remoteTask;
        }

        function createRemoteHtml(html, content) {
            var remoteHtml = new backend_com_wsdl_htmlObject();

            remoteHtml.setHtml(content);
            remoteHtml.setId(html.getRemoteId());

            var answers = [];
            angular.forEach(html.getAnswers(), function (val, key) {
                var answer = new backend_com_wsdl_stringToBoolEntry();
                answer.setValue(val);
                answer.setKey(key);
                answers.push(answer);
            });
            remoteHtml.setAnswers(answers);

            return remoteHtml;
        }

        function createRemoteTreePart(treePart) {
            var remoteTreePart = new backend_com_wsdl_treePart();

            remoteTreePart.setId(treePart.getRemoteId());
            remoteTreePart.setVersion(treePart.getVersion());
            remoteTreePart.setType(treePart.getType());
            if(treePart.getTask()) {
                remoteTreePart.setMarker(createRemoteTask(treePart.getTask()));
            }
            remoteTreePart.setFinished(treePart.getFinished());
            remoteTreePart.setOpened(treePart.getOpened());
            remoteTreePart.setActive(treePart.getActive());
            remoteTreePart.setQuestInstanceId(treePart.getQuestInstanceId());
            remoteTreePart.setExecutedAt(treePart.getExecutedAt());
            remoteTreePart.setHighlightedInvisibeMarker(treePart.getHighlightedInvisibleMarker());
            var position = new backend_com_wsdl_position();
            position.setX(treePart.getPositionX());
            position.setY(treePart.getPositionY());
            remoteTreePart.setPosition(position);

            return remoteTreePart;
        }

        function createRemoteCard(card) {
            var remoteCard = new backend_com_wsdl_card();

            remoteCard.setId(card.getRemoteId());
            remoteCard.setName(card.getName());
            remoteCard.setDescription(card.getDescription());
            remoteCard.setAttack(card.getAttack());
            remoteCard.setLife(card.getLife());
            remoteCard.setStars(Math.ceil(card.getStars()));
            remoteCard.setImageId(card.getImage().getRemoteId());
            remoteCard.setType(card.getType());
            remoteCard.setVersion(card.getVersion());

            var actionIds = [];
            var actions = card.getActions();
            if (actions.length > 0) {
                for (var i = 0; i < actions.length; i++) {
                    actionIds.push(actions[i].getRemoteId())
                }
            }
            remoteCard.setActionIds(actionIds);

            return remoteCard;
        }

        function createRemoteCardImage(cardImage) {
            var remoteCardImage = new backend_com_wsdl_cardImage();

            remoteCardImage.setId(cardImage.getRemoteId());
            remoteCardImage.setType(cardImage.getType());
            remoteCardImage.setOriginalImageSrc(cardImage.getOriginalImageSrc());
            remoteCardImage.setOffsetTop(cardImage.getTop());
            remoteCardImage.setOffsetLeft(cardImage.getLeft());
            remoteCardImage.setWidth(cardImage.getWidth());
            remoteCardImage.setHeight(cardImage.getHeight());
            remoteCardImage.setImage(cardImage.getImage());

            return remoteCardImage;
        }

        function createRemoteEnemy(enemy) {
            var remoteEnemy = new backend_com_wsdl_enemy();

            remoteEnemy.setId(enemy.getRemoteId());
            remoteEnemy.setImageUrl("");
            remoteEnemy.setRandomEnemy(enemy.getRandomEnemy());
            remoteEnemy.setName(enemy.getName());
            remoteEnemy.setDescription(enemy.getDescription());
            remoteEnemy.setDeckId(enemy.getDeck().getRemoteId());

            return remoteEnemy;
        }

        function createRemoteDeck(deck) {
            var remoteDeck = new backend_com_wsdl_deck();

            remoteDeck.setId(deck.getRemoteId());
            remoteDeck.setName(deck.getName());
            remoteDeck.setCardIds(deck.getCardIds());

            return remoteDeck;
        }

        function mapPosition(lon, lat) {
            var pos = new backend_com_wsdl_mapPosition();
            pos.setLongitude(lon);
            pos.setLatitude(lat);
            return pos;
        }

        function getQuest(questId) {
            var deffered = $q.defer();

            $log.info("getQuest: id =", questId);
            backend.getEditorQuest(function (result) {
                if (result.getReturn()) {
                    $log.info("getQuest_success (id = " + questId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getQuest_fail (id = " + questId + ")", result.getReturn());
                    deffered.reject("Error loading quest with id: " + questId);
                }

            }, function (error) {
                $log.error("getQuest_fail (id = " + questId + ")", error);
                deffered.reject(error);
            }, questId);

            return deffered.promise;
        }

        function getQuests(questIds) {
            var deffered = $q.defer();

            $log.info("getQuests: ids = ", questIds);
            backend.getEditorQuests(function (result) {
                if (result.getReturn()) {
                    $log.info("getQuests_success (ids = " + questIds + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getQuests_fail (ids = " + questIds + ")", result.getReturn());
                    deffered.reject("Error loading quests width ids: " + questIds);
                }

            }, function (error) {
                $log.error("getQuests_success (ids = " + questIds + ")", error);
                deffered.reject(error);
            }, questIds);

            return deffered.promise;
        }

        function getTask(taskId) {
            var deffered = $q.defer();

            $log.info("getTask: id =", taskId);
            backend.getMarker(function (result) {
                if (result.getReturn()) {
                    $log.info("getTask_success (id = " + taskId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getTask_fail (id = " + taskId + ")", result.getReturn());
                    deffered.reject("Error loading task with id: " + taskId);
                }

            }, function (error) {
                $log.error("getTask_fail (id = " + taskId + ")", error);
                deffered.reject(error);
            }, taskId);

            return deffered.promise;
        }

        function getHtml(htmlId) {
            var deffered = $q.defer();

            if (htmlId < 1) {
                deffered.resolve(null);
                return deffered.promise;
            }

            $log.info("getHtml: id =", htmlId);
            backend.getHtml(function (result) {
                if (result.getReturn()) {
                    $log.info("getHtml_success (id = " + htmlId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getHtml_fail (id = " + htmlId + ")", result.getReturn());
                    deffered.reject("Error loading html with id: " + htmlId);
                }

            }, function (error) {
                $log.error("getHtml_fail (id = " + htmlId + ")", error);
                deffered.reject(error);
            }, htmlId);

            return deffered.promise;
        }

        function getTreePart(treePartId) {
            var deffered = $q.defer();

            $log.info("getTreePart: id =", treePartId);
            backend.getTreePart(function (result) {
                if (result.getReturn()) {
                    $log.info("getTreePart_success (id = " + treePartId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getTreePart_fail (id = " + treePartId + ")", result.getReturn());
                    deffered.reject("Error loading TreePart with id: " + treePartId);
                }

            }, function (error) {
                $log.error("getTreePart_fail (id = " + treePartId + ")", error);
                deffered.reject(error);
            }, treePartId);

            return deffered.promise;
        }

        function getCard(cardId) {
            var deffered = $q.defer();

            $log.info("getCard: id =", cardId);
            backend.getCard(function (result) {
                if (result.getReturn()) {
                    $log.info("getCard_success (id = " + cardId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getCard_fail (id = " + cardId + ")", result.getReturn());
                    deffered.reject("Error loading Card with id: " + cardId);
                }

            }, function (error) {
                $log.error("getCard_fail (id = " + cardId + ")", error);
                deffered.reject(error);
            }, cardId);

            return deffered.promise;
        }

        function getCardImage(cardImageId) {
            var deffered = $q.defer();

            $log.info("getCardImage: id =", cardImageId);

            //return request in backend.getCardImage after wsdl creation
            var request = backend.getCardImage(function (result) {
                if (result.getReturn()) {
                    $log.info("getCardImage_success (id = " + cardImageId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getCardImage_fail (id = " + cardImageId + ")", result.getReturn());
                    deffered.reject("Error loading Card with id: " + cardId);
                }

            }, function (error) {
                $log.error("getCardImage_fail (id = " + cardImageId + ")", error);
                deffered.reject(error);
            }, cardImageId);

            deffered.request = request;
            deffered.abort = function() {
                this.reject();
                this.request.abort();
            };
            cardRequests.push(deffered);

            return deffered.promise;
        }

        function abortCardRequests() {
            for(var i = 0; i < cardRequests.length; i++) {
                cardRequests[i].abort();
            }
        }

        function getAllActionsOfCardType(type) {
            var deffered = $q.defer();

            $log.info("getActions");
            backend.getAllActionsOfCardType(function (result) {
                if (result.getReturn()) {
                    $log.info("getActions_success", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getActions_fail", result.getReturn());
                    deffered.reject("Error loading Actions");
                }
            }, function (error) {
                $log.error("getActions_fail", error);
                deffered.reject(error);
            }, type);

            return deffered.promise;
        }

        function getEnemy(enemyId) {
            var deffered = $q.defer();

            $log.info("getEnemy: id =", enemyId);
            backend.getEnemy(function (result) {
                if (result.getReturn()) {
                    $log.info("getEnemy_success (id = " + enemyId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getEnemy_fail (id = " + enemyId + ")", result.getReturn());
                    deffered.reject();
                }

            }, function (error) {
                $log.error("getEnemy_fail (id = " + enemyId + ")", error);
                deffered.reject(error);
            }, enemyId);

            return deffered.promise;
        }

        function getDeck(deckId) {
            var deffered = $q.defer();

            $log.info("getDeck: id =", deckId);
            backend.getDeck(function (result) {
                if (result.getReturn()) {
                    $log.info("getDeck_success (id = " + deckId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getDeck_fail (id = " + deckId + ")", result.getReturn());
                    deffered.reject();
                }

            }, function (error) {
                $log.error("getDeck_fail (id = " + deckId + ")", error);
                deffered.reject(error);
            }, deckId);

            return deffered.promise;
        }

        function addQuest(quest) {
            var deffered = $q.defer();

            $log.info("addQuest: ", quest);
            backend.addEditorQuest(function (result) {
                if (result.getReturn()) {
                    $log.info("addQuest_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addQuest_fail: ", result.getReturn());
                    deffered.reject("Error adding quest");
                }

            }, function (error) {
                $log.error("addQuest_fail: ", error);
                deffered.reject(error);
            }, quest);

            return deffered.promise;
        }

        function addTask(task) {
            var deffered = $q.defer();

            $log.info("addTask: ", task);
            backend.addOrUpdateMarker(function (result) {
                if (result.getReturn()) {
                    $log.info("addTask_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addTask_fail: ", result.getReturn());
                    deffered.reject("Error adding task");
                }

            }, function (error) {
                $log.error("addTask_fail: ", error);
                deffered.reject(error);
            }, task);

            return deffered.promise;
        }

        function addHtml(html) {
            var deffered = $q.defer();

            $log.info("addHtml: ", html);
            backend.addHtml(function (result) {
                if (result.getReturn()) {
                    $log.info("addHtml_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addHtml_fail: ", result.getReturn());
                    deffered.reject("Error adding html");
                }

            }, function (error) {
                $log.error("addHtml_fail: ", error);
                deffered.reject(error);
            }, html);

            return deffered.promise;
        }

        function addTreePart(treePart) {
            var deffered = $q.defer();

            $log.info("addTreePart: ", treePart);
            backend.addOrUpdateTreePart(function (result) {
                if (result.getReturn()) {
                    $log.info("addTreePart_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addTreePart_fail: ", result.getReturn());
                    deffered.reject("Error adding treePart");
                }

            }, function (error) {
                $log.error("addTreePart_fail: ", error);
                deffered.reject(error);
            }, treePart);

            return deffered.promise;
        }

        function addCard(card, image) {
            var deffered = $q.defer();

            $log.info("addCard: ", card);
            backend.addCard(function (result) {
                if (result.getReturn()) {
                    $log.info("addCard_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addCard_fail: ", result.getReturn());
                    deffered.reject("Error adding quest");
                }

            }, function (error) {
                $log.error("addCard_fail: ", error);
                deffered.reject(error);
            }, card);

            return deffered.promise;
        }

        function addCardImage(cardImage) {
            var deffered = $q.defer();

            $log.info("addCardImage: ", cardImage);
            backend.addCardImage(function (result) {
                if (result.getReturn()) {
                    $log.info("addCardImage_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addCardImage_fail: ", result.getReturn());
                    deffered.reject("Error adding quest");
                }

            }, function (error) {
                $log.error("addCardImage_fail: ", error);
                deffered.reject(error);
            }, cardImage);

            return deffered.promise;
        }

        function addEnemy(enemy) {
            var deffered = $q.defer();

            $log.info("addEnemy: ", enemy);
            backend.addEnemy(function (result) {
                if (result.getReturn()) {
                    $log.info("addEnemy_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addEnemy_fail: ", result.getReturn());
                    deffered.reject();
                }

            }, function (error) {
                $log.error("addEnemy_fail: ", error);
                deffered.reject(error);
            }, enemy);

            return deffered.promise;
        }

        function addDeck(deck) {
            var deffered = $q.defer();

            $log.info("addDeck: ", deck);
            backend.addDeck(function (result) {
                if (result.getReturn()) {
                    $log.info("addDeck_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addDeck_fail: ", result.getReturn());
                    deffered.reject();
                }

            }, function (error) {
                $log.error("addDeck_fail: ", error);
                deffered.reject(error);
            }, deck);

            return deffered.promise;
        }

        function updateUser(user) {
            var deffered = $q.defer();

            $log.info("updateUser: ", user);
            backend.updateUser(function (result) {
                $log.info("updateUser_success: ", result);
                deffered.resolve(result.getReturn());
            }, function (error) {
                $log.error("updateUser_fail: ", error);
                deffered.reject(error);
            }, user);

            return deffered.promise;
        }

        function updateQuest(quest) {
            var deffered = $q.defer();

            $log.info("updateQuest: ", quest);
            backend.updateEditorQuest(function (result) {
                $log.info("updateQuest_success: ", quest);
                deffered.resolve(result.getReturn());
            }, function (error) {
                $log.error("updateQuest_fail: ", error);
                deffered.reject(error);
            }, quest);

            return deffered.promise;
        }

        function updateTask(task) {
            var deffered = $q.defer();

            $log.info("updateTask: ", task);
            backend.addOrUpdateMarker(function (result) {
                if (result.getReturn()) {
                    $log.info("updateTask_success: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateTask_fail: ", result);
                    deffered.reject("Error updating task");
                }

            }, function (error) {
                $log.error("updateTask_fail: ", error);
                deffered.reject(error);
            }, task);

            return deffered.promise;
        }

        function updateHtml(html) {

            var deffered = $q.defer();

            $log.info("updateHtml: ", html);
            backend.updateHtml(function (result) {
                if (result.getReturn()) {
                    $log.info("updateHtml: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateHtml_fail: ", result);
                    deffered.reject("Error updating Html");
                }

            }, function (error) {
                $log.error("updateHtml_fail: ", error);
                deffered.reject(error);
            }, html);

            return deffered.promise;
        }

        function updateCard(card) {

            var deffered = $q.defer();

            $log.info("updateCard: ", card);
            backend.updateCard(function (result) {
                if (result.getReturn()) {
                    $log.info("updateCard: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateCard_fail: ", result);
                    deffered.reject("Error updating Card");
                }

            }, function (error) {
                $log.error("updateCard_fail: ", error);
                deffered.reject(error);
            }, card);

            return deffered.promise;
        }

        function updateCardImage(cardImage) {

            var deffered = $q.defer();

            $log.info("updateCardImage: ", cardImage);
            backend.updateCardImage(function (result) {
                if (result.getReturn()) {
                    $log.info("updateCardImage_success: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateCardImage_fail: ", result);
                    deffered.reject("Error updating CardImage");
                }

            }, function (error) {
                $log.error("updateCardImage_fail: ", error);
                deffered.reject(error);
            }, cardImage);

            return deffered.promise;
        }

        function updateEnemy(enemy) {
            var deffered = $q.defer();

            $log.info("updateEnemy: ", card);
            backend.updateEnemy(function (result) {
                if (result.getReturn()) {
                    $log.info("updateEnemy: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateEnemy_fail: ", result);
                    deffered.reject("Error updating Card");
                }

            }, function (error) {
                $log.error("updateEnemy_fail: ", error);
                deffered.reject(error);
            }, enemy);

            return deffered.promise;
        }

        function updateDeck(deck) {
            var deffered = $q.defer();

            $log.info("updateDeck: ", deck);
            backend.updateDeck(function (result) {
                if (result.getReturn()) {
                    $log.info("updateDeck: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateDeck_fail: ", result);
                    deffered.reject("Error updating Deck");
                }

            }, function (error) {
                $log.error("updateDeck_fail: ", error);
                deffered.reject(error);
            }, deck);

            return deffered.promise;
        }

        function deleteQuest(questId) {
            var deffered = $q.defer();

            $log.info("deleteQuest: ", questId);
            backend.deleteQuest(function (result) {
                $log.info("deleteQuest_success");
                deffered.resolve(result);
            }, function (error) {
                $log.error("deleteQuest_fail: ", error);
                deffered.reject(error);
            }, questId);

            return deffered.promise;
        }


        function deleteTask(taskId) {

            var deffered = $q.defer();

            $log.info("deleteTask: ", taskId);
            backend.deleteMarker(function (result) {
                $log.info("deleteTask_success: ");
                deffered.resolve(result);
            }, function (error) {
                $log.error("deleteTask_fail: ", error);
                deffered.reject(error);
            }, taskId);

            return deffered.promise;
        }

        function deleteTreePart(treePartId) {

            var deffered = $q.defer();

            $log.info("deleteTreePart: ", treePartId);
            backend.deleteTreePart(function (result) {
                $log.info("deleteTreePart_success: ");
                deffered.resolve();
            }, function (error) {
                $log.error("deleteTreePart_fail: ", error);
            }, treePartId);

            return deffered.promise;
        }

        function deleteHtml(htmlId) {
            var deffered = $q.defer();

            deffered.resolve();

            /*$log.info("deleteHtml: ", htmlId);
             backend.deleteHtml(function(result) {
             $log.info("deleteHtml_success: ");
             deffered.resolve();
             }, function(error) {
             $log.error("deleteHtml_fail: ", error);
             }, htmlId);*/

            return deffered.promise;
        }

        function deleteDeck(deckId) {

            var deffered = $q.defer();

            $log.info("deleteDeck: ", deckId);
            backend.deleteDeck(function (result) {
                $log.info("deleteDeck_success: ");
                deffered.resolve();
            }, function (error) {
                $log.error("deleteDeck_fail: ", error);
            }, deckId);

            return deffered.promise;
        }

        function getStandartDeck(userId) {
            var deffered = $q.defer();

            $log.info("getStandartDeck: ", userId);
            backend.getStandartDeck(function (result) {
                $log.info("getStandartDeck_success: ");
                deffered.resolve(result);
            }, function (error) {
                $log.error("getStandartDeck_fail: ", error);
            }, userId);

            return deffered.promise;
        }

        function getQuestsInRange(lon, lat, range) {
            var deffered = $q.defer();

            $log.info("getQuestsInRange: ");
            backend.getQuestsInRange(function(result) {
                $log.info("getQuestsInRange_success: ");
                deffered.resolve(result);
            }, function(error) {
                $log.error("getQuestsInRange_fail: ", error);
            }, mapPosition(lon, lat), range, []);

            return deffered.promise;
        }

    }

})();