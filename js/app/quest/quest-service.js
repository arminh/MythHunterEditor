/**
 * Created by armin on 04.02.16.
 */
quest.factory('Quest', function(Task, HTMLText) {

    function Quest() {
        this.tasks = [];
        this.taskId = 0;
        this.name = "";
        this.description = "";
        this.startTask = null;
        this.html = null;
        this.tasks = [];
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

    Quest.prototype.createTask = function() {
        var task = new Task();
        task.html = new HTMLText();
        task.id = this.taskId;
        return task;
    };

    Quest.prototype.addTask = function(task) {
        this.tasks[task.id] = task;
        this.taskId++;
    };

    Quest.prototype.getTask = function(id) {
       //return this.tasks[]
    };


    return (Quest);
});
