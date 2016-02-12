/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function($modal, mapService, MARKERS, Quest) {
    function User() {
        this.id = 27;
        this.currentQuest = null;
        this.createdQuests = [];
    }


    User.prototype.newQuest = function() {
        this.currentQuest = new Quest();
        this.currentQuest.creatorId = this.id;
        return this.currentQuest;
    };

    User.prototype.getCurrentQuest = function() {

        if(!this.currentQuest) {
            this.currentQuest = this.newQuest();
            this.currentQuest.creatorId = this.id;
            return this.currentQuest.create();
        } else {
            return this.currentQuest;
        }

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

    return (User);
});