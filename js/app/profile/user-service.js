/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function($modal, mapService, MARKERS, Quest) {
    function User() {
        this.id = -1;
        this.name = "";
        this.password = "";
        this.currentQuest = null;
        this.createdQuests = [];
    }

    User.prototype.initFromRemote = function(remoteUser) {
        this.id = remoteUser.getId();
        this.name = remoteUser.getName();
        this.password = remoteUser.getPassword();
        this.createdQuests = remoteUser.getCreatedQuestIds();
    };

    User.prototype.initFromCookie = function(cookieUser) {
        this.id = cookieUser.id;
        this.name = cookieUser.name;
        this.password = cookieUser.password;
        this.currentQuest = cookieUser.currentQuest;
        this.createdQuests = cookieUser.createdQuests;
    };

    User.prototype.newQuest = function() {
        this.currentQuest = new Quest();
        this.currentQuest.creatorId = this.id;
        return this.currentQuest.create();
    };

    User.prototype.getCurrentQuest = function() {

        return this.currentQuest;
    };

    User.prototype.addQuest = function(quest) {
        this.createdQuests.push(quest);
    };

    User.prototype.uploadQuest = function() {
        if(this.currentQuest.remoteId == -1 || this.currentQuest.changed == true) {
            this.currentQuest.upload().then(function() {
                console.log("upload finished");
            });
        }
    };

    User.prototype.createRemoteUser = function() {
        var remoteUser = new backend_com_wsdl_user();
        remoteUser.setName(this.name);
        remoteUser.setPassword(this.password);

        return remoteUser;
    };

    return (User);
});