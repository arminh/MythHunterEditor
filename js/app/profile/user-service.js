/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function($rootScope, $q, $modal, $localStorage, BackendService, mapService, MARKERS, Quest) {
    function User() {
        this.id = -1;
        this.name = "";
        this.password = "";
        this.currentQuest = retrieveCurrentQuest();
        this.createdQuests = [];
    }

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
            backup();
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
        var deffered = $q.defer();

        this.currentQuest.upload().then(function(result) {
            if(!containsQuest(this, result.remoteId))  {
                this.addQuest(result);
                this.upload();
            }
            this.clearCurrentQuest();
            deffered.resolve();
        }.bind(this));

        return deffered.promise;
    }

    function containsQuest(user, questId) {
        var contains = false;

        for(var i = 0; i < user.createdQuests.length; i++) {
            if(user.createdQuests[i].remoteId = questId) {
                contains = true;
            }
        }

        return contains;
    }

    function setCurrentQuest(quest) {
        $localStorage.currentQuest = quest;
        this.currentQuest = quest;
    }

    function getCurrentQuest() {

        return this.currentQuest;
    }

    function clearCurrentQuest() {

        this.currentQuest = null;
        $rootScope.currentQuest = null;
        delete $localStorage.currentQuest;
    }

    function backup() {
        $localStorage.currentQuest = this.currentQuest;
    }

    function retrieveCurrentQuest() {
        console.log($localStorage.currentQuest);
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

    User.prototype.initFromRemote = initFromRemote;
    User.prototype.newQuest = newQuest;
    User.prototype.addQuest = addQuest;
    User.prototype.deleteQuest = deleteQuest;
    User.prototype.uploadQuest = uploadQuest;
    User.prototype.getCurrentQuest = getCurrentQuest;
    User.prototype.setCurrentQuest = setCurrentQuest;
    User.prototype.clearCurrentQuest = clearCurrentQuest;
    User.prototype.backup = backup;
    User.prototype.upload = upload;

    return (User);
});