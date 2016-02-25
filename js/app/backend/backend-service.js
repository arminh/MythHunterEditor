/**
 * Created by armin on 02.02.16.
 */

var backend = new backend_com_wsdl_IBackend();
backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

app.factory('BackendService', function($q) {

    function login(username, password) {
        var deffered = $q.defer();

        backend.login(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {

        }, username, password);

        return deffered.promise;
    }

    function register(username, password) {
        var deffered = $q.defer();

        backend.register(function(result) {
            deffered.resolve(result);
        }, function(error) {

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
        var remoteQuest = new backend_com_wsdl_quest();

        remoteQuest.setCreaterId(quest.creatorId);
        remoteQuest.setName(quest.name);
        remoteQuest.setShortDescription(quest.description);

        remoteQuest.setHtmlId(quest.html.id);
        remoteQuest.setStartMarker(createRemoteTask(quest.startTask));

        var tasks = [];
        for(var i = 0; i < quest.tasks.length; i++) {
            tasks.push(quest.tasks[i].remoteId);
        }

        return remoteQuest;
    }

    function createRemoteTask(task) {

        var remoteTask = null;

        switch(task.type) {
            case "fight":
                remoteTask = new backend_com_wsdl_fightMarker();
                break;
            case "quiz":
                remoteTask = new backend_com_wsdl_quizMarker();
                break;
            case "info":
                remoteTask = new backend_com_wsdl_infoMarker();
                break;
            case "start":
                remoteTask = new backend_com_wsdl_infoMarker();
                break;
        }

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

        return remoteHtml;
    }

    function mapPosition(lon, lat) {
        var pos = new backend_com_wsdl_mapPosition();
        pos.setLongitude(lon);
        pos.setLatitude(lat);
        return pos;
    }

    function getQuest(questId) {
        var deffered = $q.defer();

        backend.getQuest(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {

        }, questId);

        return deffered.promise;
    }

    function getQuests(questIds) {
        var deffered = $q.defer();

        backend.getQuests(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {

        }, questIds);

        return deffered.promise;
    }

    function getTask(taskId) {
        var deffered = $q.defer();

        backend.getMarker(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {

        }, taskId);

        return deffered.promise;
    }

    function getHtml(htmlId) {
        var deffered = $q.defer();

        backend.getHtml(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {

        }, htmlId);

        return deffered.promise;
    }

    function addQuest(quest) {
        var deffered = $q.defer();

        backend.addQuest(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {

        }, quest);

        return deffered.promise;
    }

    function addTask(remoteTask) {
        var deffered = $q.defer();

        if(remoteTask instanceof backend_com_wsdl_fightMarker) {
            backend.addFightMarker(function (result) {
                deffered.resolve(result.getReturn());
            },  function (error) {

            }, remoteTask);
        } else if(remoteTask instanceof backend_com_wsdl_quizMarker) {
            backend.addQuizMarker(function (result) {
                deffered.resolve(result.getReturn());
            },  function (error) {

            }, remoteTask);
        } else if(remoteTask instanceof backend_com_wsdl_infoMarker) {
            backend.addInfoMarker(function (result) {
                deffered.resolve(result.getReturn());
            },  function (error) {

            }, remoteTask);
        }

        return deffered.promise;
    }

    function addHtml(html) {
        var deffered = $q.defer();

        backend.addHtml(function(result) {
            deffered.resolve(result.getReturn());
        }, function(error) {

        }, html);

        return deffered.promise;
    }

    function updateUser(user) {
        backend.updateUser(function() {}, function() {}, user);
    }

    return {
        login: login,
        register: register,
        createRemoteUser: createRemoteUser,
        createRemoteQuest: createRemoteQuest,
        createRemoteTask: createRemoteTask,
        createRemoteHtml: createRemoteHtml,
        getQuest: getQuest,
        getQuests: getQuests,
        getTask: getTask,
        getHtml: getHtml,
        addQuest: addQuest,
        addTask: addTask,
        addHtml: addHtml,
        updateUser: updateUser,
        mapPosition: mapPosition
    };
});
