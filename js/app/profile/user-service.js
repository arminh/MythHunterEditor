/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function($q, $modal, $localStorage, BackendService, mapService, MARKERS, Quest) {
    function User() {
        this.id = -1;
        this.name = "";
        this.password = "";
        this.currentQuest = this.retrieveCurrentQuest();
        this.createdQuests = [];
    }

    User.prototype.initFromRemote = function(remoteUser) {

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
    };

    var getQuestFromRemote = function(questId) {
        var deffered = $q.defer();

        BackendService.getQuest(questId).then(function(remoteQuest) {
            var quest = new Quest();
            quest.initFromRemote(remoteQuest).then(function(result) {
                deffered.resolve(result);
            });
        });

        return deffered.promise;
    };

    User.prototype.newQuest = function() {
        /*this.currentQuest = new Quest();
        this.currentQuest.creatorId = this.id;*/
        var quest = new Quest(this.id);
        return quest.create().then(function(result) {
            this.currentQuest = result;
            this.currentQuest.creatorId = this.id;
            this.backup();
            return result;
        }.bind(this));
    };

    User.prototype.getCurrentQuest = function() {

        return this.currentQuest;
    };

    User.prototype.backup = function() {
        $localStorage.currentQuest = this.currentQuest;
    };

    User.prototype.retrieveCurrentQuest = function() {
        console.log($localStorage.currentQuest);
        if($localStorage.currentQuest) {
            var quest = new Quest();
            quest.initFromObject($localStorage.currentQuest);
            return quest;
        } else {
            return null;
        }

    };

    User.prototype.addQuest = function(quest) {
        this.createdQuests.push(quest);
    };

    User.prototype.uploadQuest = function() {
        var deffered = $q.defer();

        if(this.currentQuest.remoteId == -1 || this.currentQuest.changed == true) {
            this.currentQuest.upload().then(function() {
                this.addQuest(this.currentQuest);
                this.upload();
                //this.currentQuest = null;
                deffered.resolve();
            }.bind(this));
        } else {
            deffered.resolve();
        }

        return deffered.promise;
    };

    User.prototype.upload = function() {
        BackendService.updateUser(BackendService.createRemoteUser(this));
    };

    return (User);
});