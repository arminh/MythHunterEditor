/**
 * Created by armin on 02.02.16.
 */




app.factory('BackendService', function($q) {

    var backend = new backend_com_wsdl_IBackend();
    backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

    function login(username, password) {
        var deffered = $q.defer();

        backend.login(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("error");
            }

        }, function(error) {
            alert("Error Logging in user " + username);
        }, username, password);

        return deffered.promise;
    }

    function register(username, password) {
        var deffered = $q.defer();

        backend.register(function(result) {
            deffered.resolve(result);
        }, function(error) {
            deffered.reject(error);
        }, username, password);

        return deffered.promise;
    }

    function createRemoteUser(user) {
        var remoteUser = new backend_com_wsdl_user();
        remoteUser.setName(user.name);
        remoteUser.setPassword(user.password);
        remoteUser.setId(user.id);

        var createdQuestIds = [];
        for(var i = 0; i < user.createdQuests.length; i++) {
            createdQuestIds.push(user.createdQuests[i].remoteId);
            /*            var id = this.createdQuests[i].remoteId;
             var name = this.createdQuests[i].name;

             var obj = {};
             obj[id] = name;
             createdQuestIds.push(obj);*/
        }

        remoteUser.setCreatedQuestIds(createdQuestIds);

        return remoteUser;
    }

    function createRemoteQuest(quest) {
        var remoteQuest = new backend_com_wsdl_editorQuest();

        remoteQuest.setId(quest.remoteId);
        remoteQuest.setVersion(quest.version);
        remoteQuest.setCreaterId(quest.creatorId);
        remoteQuest.setName(quest.name);
        remoteQuest.setShortDescription(quest.description);

        remoteQuest.setHtmlId(quest.html.id);
        remoteQuest.setStartMarkerId(quest.startTask.remoteId);

        var tasks = [];
        for(var i = 0; i < quest.tasks.length; i++) {
            tasks.push(quest.tasks[i].remoteId);
        }

        remoteQuest.setMarkers(tasks);

        return remoteQuest;
    }

    function createRemoteTask(task) {

        var remoteTask = new backend_com_wsdl_marker();

        if(task.type == "start") {
            remoteTask.setType("INFO");
        } else {
            remoteTask.setType(task.type);
        }
        remoteTask.setVersion(task.version);
        remoteTask.setId(task.remoteId);
        remoteTask.setName(task.name);
        remoteTask.setHtmlId(task.html.id);
        remoteTask.setPosition(mapPosition(task.lon, task.lat));

        return remoteTask;
    }

    function createRemoteHtml(html) {
        var remoteHtml = new backend_com_wsdl_htmlObject();

        remoteHtml.setHtml(html.content);
        remoteHtml.setId(html.id);
        console.log(remoteHtml);

        return remoteHtml;
    }

    function createRemoteTreePart(treePart) {
        var remoteTreePart = new backend_com_wsdl_treePart();

        remoteTreePart.setId(treePart.remoteId);
        remoteTreePart.setVersion(treePart.version);
        remoteTreePart.setType(treePart.type);
        remoteTreePart.setMarker(createRemoteTask(treePart.task));

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

        backend.getEditorQuest(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error loading quest with id: " + questId);
            }

        }, function(error) {
            alert("Error getting Quest with id " + questId);
        }, questId);

        return deffered.promise;
    }

    function getQuests(questIds) {
        var deffered = $q.defer();

        backend.getEditorQuests(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error loading quests");
            }

        }, function(error) {

        }, questIds);

        return deffered.promise;
    }

    function getTask(taskId) {
        var deffered = $q.defer();

        backend.getMarker(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error loading Task with id: " + taskId);
            }

        }, function(error) {
            alert("Error getting HTML with id " + taskId);
        }, taskId);

        return deffered.promise;
    }

    function getHtml(htmlId) {
        var deffered = $q.defer();

        backend.getHtml(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error loading html with id: " + htmlId);
            }

        }, function(error) {
            alert("Error getting HTML with id " + htmlId);
        }, htmlId);

        return deffered.promise;
    }

    function getTreePart(treePartId) {
        var deffered = $q.defer();

        backend.getTreePart(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error loading TreePart with id: " + treePartId);
            }

        }, function(error) {
            alert("Error getting TreePart with id " + treePartId);
        }, treePartId);

        return deffered.promise;
    }

    function addQuest(quest) {
        var deffered = $q.defer();

        backend.addEditorQuest(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error adding quest");
            }

        }, function(error) {

        }, quest);

        return deffered.promise;
    }

    function addTask(remoteTask) {
        var deffered = $q.defer();

        backend.addOrUpdateMarker(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error adding task");
            }

        },  function (error) {

        }, remoteTask);

        return deffered.promise;
    }

    function addHtml(html) {
        var deffered = $q.defer();

        backend.addHtml(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error adding html");
            }

        }, function(error) {

        }, html);

        return deffered.promise;
    }

    function addTreePart(treePart) {
        var deffered = $q.defer();

        backend.addOrUpdateTreePart(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error adding treePart");
            }

        }, function(error) {

        }, treePart);

        return deffered.promise;
    }

    function updateUser(user) {
        backend.updateUser(function(result) {

        }, function() {
            alert("Error updating user");
        }, user);
    }

    function updateQuest(quest) {
        var deffered = $q.defer();

        backend.updateEditorQuest(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {
            deffered.reject("Error updating quest");
        }, quest);

        return deffered.promise;
    }

    function updateTask(task) {
        var deffered = $q.defer();

        backend.addOrUpdateMarker(function(result) {
            if(result.getReturn()) {
                deffered.resolve(result.getReturn());
            } else {
                deffered.reject("Error adding task");
            }

        },  function (error) {

        }, task);

        return deffered.promise;
    }

    function updateHtml(html) {
        backend.updateHtml({

        }, function() {
            alert("Error updating Html");
        }, html);
    }

    function deleteQuest(questId) {
        backend.deleteQuest(function(result) {

        }, function(error) {
            alert("Error deleting quest width id :" +questId);
        }, questId);
    }


    function deleteTask(taskId) {
        backend.deleteMarker(function(result) {

        }, function(error) {
            alert("Error deleting task width id :" + taskId);
        }, taskId);
    }

    return {
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
        mapPosition: mapPosition
    };
});
