/**
 * Created by armin on 04.02.16.
 */
quest.factory('Quest', function() {
    function Quest() {
        this.name = "";
        this.description = "";
        this.startTask = null;
        this.html = null;
        this.tasks = array();
        this.changed = false;
    }

    Quest.prototype = {
        constructor: Quest
    };

    Quest.prototype.addTask = function(task) {
        task.push(task);
    };

    Quest.prototype.init = function(config) {

    };

    return (Quest);
});
