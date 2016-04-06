/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function($log, $rootScope, $q, $modal, $localStorage, BackendService, Quest) {

    $log = $log.getInstance("User", debugging);

    function User() {
        this.id = -1;
        this.name = "";
        this.password = "";
        this.currentQuest = null;
        this.createdQuests = [];
    }

    User.prototype = {
        constructor: User,
        initFromRemote: initFromRemote,
        newQuest: newQuest,
        addQuest: addQuest,
        deleteQuest: deleteQuest,
        uploadQuest: uploadQuest,
        getCurrentQuest: getCurrentQuest,
        setCurrentQuest: setCurrentQuest,
        clearCurrentQuest: clearCurrentQuest,
        backup: backup,
        upload: upload
};

    function initFromRemote(remoteUser) {

        var deffered = $q.defer();

        this.id = remoteUser.getId();
        this.name = remoteUser.getName();
        this.password = remoteUser.getPassword();

        //deffered.resolve(this);

        var promises = [];

        var remoteQuests = remoteUser.getCreatedQuestIds();
        for(var i = 0; i < remoteQuests.length; i++) {
            promises.push(getQuestFromRemote(remoteQuests[i]));
        }

        $q.all(promises).then(function(results) {
            this.createdQuests = results;
            $log.info("initFromRemote: ", this);
            deffered.resolve(this);
        }.bind(this));

        return deffered.promise;
    }

    function getQuestFromRemote(questId) {
        var deffered = $q.defer();

        BackendService.getQuest(questId).then(function(remoteQuest) {
            var quest = new Quest();
            quest.initFromRemote(remoteQuest).then(function(result) {
                deffered.resolve(result);
            }, function(error) {

            });
        }, function(error) {
            alert(error);
        });

        return deffered.promise;
    }

    function newQuest() {
        /*this.currentQuest = new Quest();
        this.currentQuest.creatorId = this.id;*/
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


    function deleteQuest(questId) {
        var deleteId = -1;

        for(var i = 0; i < this.createdQuests.length; i++) {
            if(this.createdQuests[i].remoteId = questId) {
                deleteId = i;
            }
        }

        this.createdQuests.splice(deleteId, 1);
        BackendService.deleteQuest(questId);
        this.upload();
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
        return this.currentQuest;
    }

    function clearCurrentQuest() {
        this.currentQuest = null;
        $rootScope.currentQuest = null;
        delete $localStorage.currentQuest;

        $log.info("clearCurrentQuest");
    }

    function backup() {

        var taskId = 0;

        this.currentQuest.startTask.id = taskId++;
        for(var i = 0; i < this.currentQuest.tasks.length; i++) {
            this.currentQuest.tasks[i].id = taskId++;
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
        BackendService.updateUser(BackendService.createRemoteUser(this));
    }
    return (User);
});