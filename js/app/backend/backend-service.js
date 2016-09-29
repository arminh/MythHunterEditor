/**
 * Created by armin on 02.02.16.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .factory('BackendService', BackendService);

    BackendService.$inject = ["$log",'$q'];

    /* @ngInject */
    function BackendService($log, $q) {

        var backend = new backend_com_wsdl_IBackend();
        //backend.url = "http://46.101.176.138:8080/Backend/webservices/Backend?wsdl";
        //backend.url = "http://192.168.1.225:8080/Backend/webservices/Backend?wsdl";
        backend.url = "http://192.168.1.240:8080/Backend/webservices/Backend?wsdl";
        $log = $log.getInstance("Backend", debugging);

        var service = {
            login: login,
            register: register,
            createRemoteUser: createRemoteUser,
            createRemoteQuest: createRemoteQuest,
            createRemoteTask: createRemoteTask,
            createRemoteHtml: createRemoteHtml,
            createRemoteTreePart: createRemoteTreePart,
            getQuest: getQuest,
            getQuests: getQuests,
            getTask: getTask,
            getHtml: getHtml,
            getTreePart: getTreePart,
            addQuest: addQuest,
            addTask: addTask,
            addHtml: addHtml,
            addTreePart: addTreePart,
            updateUser: updateUser,
            updateQuest: updateQuest,
            updateTask: updateTask,
            updateHtml: updateHtml,
            deleteQuest: deleteQuest,
            deleteTask: deleteTask,
            deleteTreePart: deleteTreePart,
            deleteHtml: deleteHtml,
            mapPosition: mapPosition
        };
        return service;

        ////////////////

        function login(username, password) {
            var deffered = $q.defer();

            $log.info("login", username);
            backend.login(function(result) {
                if(result.getReturn()) {
                    $log.info("login_success", username);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.warn("login_fail", username);
                    deffered.reject("Wrong username or password");
                }

            }, function(error) {
                alert("Login error: " + error);
                $log.error("login_fail", error);
                deffered.reject(error);
            }, username, password);

            return deffered.promise;
        }

        function register(username, password) {
            var deffered = $q.defer();

            backend.register(function(result) {
                deffered.resolve(result);
            }, function(error) {
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

            var createdQuestIds = [];
            var createdQuests = user.getCreatedQuests();

            for(var i = 0; i < createdQuests.length; i++) {
                createdQuestIds.push(createdQuests[i].getRemoteId());
            }

            remoteUser.setCreatedQuestIds(createdQuestIds);

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

            if(task.type == "start") {
                remoteTask.setType("INFO");
            } else {
                remoteTask.setType(task.getType());
            }
            remoteTask.setVersion(task.getVersion());
            remoteTask.setId(task.getRemoteId());
            remoteTask.setName(task.getName());
            remoteTask.setHtmlId(task.getHtml().getRemoteId());
            if(task.getTargetHtml()) {
                remoteTask.setFinishedHtmlId(task.getTargetHtml().getRemoteId());
            } else {
                remoteTask.setFinishedHtmlId(0);
            }
            remoteTask.setPosition(mapPosition(task.getLon(), task.getLat()));
            remoteTask.setTargetPosition(mapPosition(task.getTargetLon(), task.getTargetLat()));

            return remoteTask;
        }

        function createRemoteHtml(html) {
            var remoteHtml = new backend_com_wsdl_htmlObject();

            remoteHtml.setHtml(html.getContent());
            remoteHtml.setId(html.getRemoteId());

            var answers = [];
            angular.forEach(html.getAnswers(), function(val, key) {
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
            remoteTreePart.setMarker(createRemoteTask(treePart.getTask()));

            return remoteTreePart;
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
            backend.getEditorQuest(function(result) {
                if(result.getReturn()) {
                    $log.info("getQuest_success (id = " + questId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getQuest_fail (id = " + questId + ")", result.getReturn());
                    deffered.reject("Error loading quest with id: " + questId);
                }

            }, function(error) {
                $log.error("getQuest_fail (id = " + questId + ")", error);
                deffered.reject(error);
            }, questId);

            return deffered.promise;
        }

        function getQuests(questIds) {
            var deffered = $q.defer();

            $log.info("getQuests: ids = ", questIds);
            backend.getEditorQuests(function(result) {
                if(result.getReturn()) {
                    $log.info("getQuests_success (ids = " + questIds + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getQuests_fail (ids = " + questIds + ")", result.getReturn());
                    deffered.reject("Error loading quests width ids: " + questIds);
                }

            }, function(error) {
                $log.error("getQuests_success (ids = " + questIds + ")", error);
                deffered.reject(error);
            }, questIds);

            return deffered.promise;
        }

        function getTask(taskId) {
            var deffered = $q.defer();

            $log.info("getTask: id =", taskId);
            backend.getMarker(function(result) {
                if(result.getReturn()) {
                    $log.info("getTask_success (id = " + taskId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getTask_fail (id = " + taskId + ")", result.getReturn());
                    deffered.reject("Error loading task with id: " + taskId);
                }

            }, function(error) {
                $log.error("getTask_fail (id = " + taskId + ")", error);
                deffered.reject(error);
            }, taskId);

            return deffered.promise;
        }

        function getHtml(htmlId) {
            var deffered = $q.defer();

            if(htmlId < 1) {
                deffered.resolve(null);
                return deffered.promise;
            }

            $log.info("getHtml: id =", htmlId);
            backend.getHtml(function(result) {
                if(result.getReturn()) {
                    $log.info("getHtml_success (id = " + htmlId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getHtml_fail (id = " + htmlId + ")", result.getReturn());
                    deffered.reject("Error loading html with id: " + htmlId);
                }

            }, function(error) {
                $log.error("getHtml_fail (id = " + htmlId + ")", error);
                deffered.reject(error);
            }, htmlId);

            return deffered.promise;
        }

        function getTreePart(treePartId) {
            var deffered = $q.defer();

            $log.info("getTreePart: id =", treePartId);
            backend.getTreePart(function(result) {
                if(result.getReturn()) {
                    $log.info("getTreePart_success (id = " + treePartId + ")", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("getTreePart_fail (id = " + treePartId + ")", result.getReturn());
                    deffered.reject("Error loading TreePart with id: " + treePartId);
                }

            }, function(error) {
                $log.error("getTreePart_fail (id = " + treePartId + ")", error);
                deffered.reject(error);
            }, treePartId);

            return deffered.promise;
        }

        function addQuest(quest) {
            var deffered = $q.defer();

            $log.info("addQuest: ", quest);
            backend.addEditorQuest(function(result) {
                if(result.getReturn()) {
                    $log.info("addQuest_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addQuest_fail: ", result.getReturn());
                    deffered.reject("Error adding quest");
                }

            }, function(error) {
                $log.error("addQuest_fail: ", error);
                deffered.reject(error);
            }, quest);

            return deffered.promise;
        }

        function addTask(task) {
            var deffered = $q.defer();

            $log.info("addTask: ", task);
            backend.addOrUpdateMarker(function(result) {
                if(result.getReturn()) {
                    $log.info("addTask_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addTask_fail: ", result.getReturn());
                    deffered.reject("Error adding task");
                }

            },  function (error) {
                $log.error("addTask_fail: ", error);
                deffered.reject(error);
            }, task);

            return deffered.promise;
        }

        function addHtml(html) {
            var deffered = $q.defer();

            $log.info("addHtml: ", html);
            backend.addHtml(function(result) {
                if(result.getReturn()) {
                    $log.info("addHtml_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addHtml_fail: ", result.getReturn());
                    deffered.reject("Error adding html");
                }

            }, function(error) {
                $log.error("addHtml_fail: ", error);
                deffered.reject(error);
            }, html);

            return deffered.promise;
        }

        function addTreePart(treePart) {
            var deffered = $q.defer();

            $log.info("addTreePart: ", treePart);
            backend.addOrUpdateTreePart(function(result) {
                if(result.getReturn()) {
                    $log.info("addTreePart_success: ", result.getReturn());
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("addTreePart_fail: ", result.getReturn());
                    deffered.reject("Error adding treePart");
                }

            }, function(error) {
                $log.error("addTreePart_fail: ", error);
                deffered.reject(error);
            }, treePart);

            return deffered.promise;
        }

        function updateUser(user) {
            var deffered = $q.defer();

            $log.info("updateUser: ", user);
            backend.updateUser(function(result) {
                $log.info("updateUser_success: ", result);
                deffered.resolve(result.getReturn());
            }, function(error) {
                $log.error("updateUser_fail: ", error);
                deffered.reject(error);
            }, user);

            return deffered.promise;
        }

        function updateQuest(quest) {
            var deffered = $q.defer();

            $log.info("updateQuest: ", quest);
            backend.updateEditorQuest(function(result) {
                $log.info("updateQuest_success: ", quest);
                deffered.resolve(result.getReturn());
            }, function(error) {
                $log.error("updateQuest_fail: ", error);
                deffered.reject(error);
            }, quest);

            return deffered.promise;
        }

        function updateTask(task) {
            var deffered = $q.defer();

            $log.info("updateTask: ", task);
            backend.addOrUpdateMarker(function(result) {
                if(result.getReturn()) {
                    $log.info("updateTask_success: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateTask_fail: ", result);
                    deffered.reject("Error updating task");
                }

            },  function (error) {
                $log.error("updateTask_fail: ", error);
                deffered.reject(error);
            }, task);

            return deffered.promise;
        }

        function updateHtml(html) {

            var deffered = $q.defer();

            $log.info("updateHtml: ", html);
            backend.updateHtml(function(result) {
                if(result.getReturn()) {
                    $log.info("updateHtml: ", result);
                    deffered.resolve(result.getReturn());
                } else {
                    $log.error("updateHtml_fail: ", result);
                    deffered.reject("Error updating Html");
                }

            },  function (error) {
                $log.error("updateHtml_fail: ", error);
                deffered.reject(error);
            }, html);

            return deffered.promise;
        }

        function deleteQuest(questId) {
            var deffered = $q.defer();

            $log.info("deleteQuest: ", questId);
            backend.deleteQuest(function(result) {
                $log.info("deleteQuest_success");
                deffered.resolve(result);
            }, function(error) {
                $log.error("deleteQuest_fail: ", error);
                deffered.reject(error);
            }, questId);

            return deffered.promise;
        }


        function deleteTask(taskId) {

            var deffered = $q.defer();

            $log.info("deleteTask: ", taskId);
            backend.deleteMarker(function(result) {
                $log.info("deleteTask_success: ");
                deffered.resolve(result);
            }, function(error) {
                $log.error("deleteTask_fail: ", error);
                deffered.reject(error);
            }, taskId);

            return deffered.promise;
        }

        function deleteTreePart(treePartId) {

            var deffered = $q.defer();

            $log.info("deleteTreePart: ", treePartId);
            backend.deleteTreePart(function(result) {
                $log.info("deleteTreePart_success: ");
                deffered.resolve();
            }, function(error) {
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
    }

})();