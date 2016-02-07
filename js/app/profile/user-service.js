/**
 * Created by armin on 07.02.16.
 */

profile.factory("User", function(Quest) {
    function User() {
        this.id = -1;
        this.currentQuest = null;
        this.createdQuests = [];
    }

    User.prototype.createQuest = function() {
        this.currentQuest = new Quest();
        return this.currentQuest;
    };

    User.prototype.getCurrentQuest = function() {
        return this.currentQuest;
    };

    User.prototype.addQuest = function(quest) {
        this.createdQuests.push(quest);
    };

    return (User);
});