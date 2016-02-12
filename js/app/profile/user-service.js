/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function($modal, mapService, MARKERS, Quest) {
    function User() {
        this.id = -1;
        this.currentQuest = null;
        this.createdQuests = [];
    }

    User.prototype.newQuest = function() {
        this.currentQuest = new Quest();
        return this.currentQuest;
    };

    User.prototype.getCurrentQuest = function() {

        if(!this.currentQuest) {
            this.currentQuest = this.newQuest();
            return this.currentQuest.create();
        } else {
            return this.currentQuest;
        }

    };

    User.prototype.addQuest = function(quest) {
        this.createdQuests.push(quest);
    };



    return (User);
});