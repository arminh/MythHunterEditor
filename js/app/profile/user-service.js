/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function($q, $modal, $localStorage, mapService, MARKERS, Quest) {
    function User() {
        this.id = -1;
        this.name = "";
        this.password = "";
        this.currentQuest = this.retrieveCurrentQuest();
        this.createdQuests = [];
    }

    User.prototype.initFromRemote = function(remoteUser) {
        this.id = remoteUser.getId();
        this.name = remoteUser.getName();
        this.password = remoteUser.getPassword();
        this.createdQuests = remoteUser.getCreatedQuestIds();
    };

    User.prototype.newQuest = function() {
        /*this.currentQuest = new Quest();
        this.currentQuest.creatorId = this.id;*/
        var quest = new Quest(this.id);
        return quest.create().then(function(result) {
            this.currentQuest = result;
            this.currentQuest.creatorId = this.id;
            this.backup();
            this.addQuest(result);
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
                console.log("upload finished");
                deffered.resolve();
            });
        } else {
            deffered.resolve();
        }

        return deffered.promise;
    };

    User.prototype.createRemoteUser = function() {
        var remoteUser = new backend_com_wsdl_user();
        remoteUser.setName(this.name);
        remoteUser.setPassword(this.password);

        return remoteUser;
    };

    return (User);
});