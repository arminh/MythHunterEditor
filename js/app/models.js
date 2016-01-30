/**
 * Created by armin on 26.01.16.
 */

app.factory('Quest', function() {
    function Quest() {
        this.name = "";
        this.description = "";
        this.startTask = null;
        this.content = "";
        this.
        this.tasks = array();
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

app.factory('Task', function() {
    function Task() {
        this.id = null;
        this.name = "";
        this.description = "";
        this.content = "";
        this.type = null;
        this.lon = null;
        this.lat = null;
        this.popupTpl = "";
        this.markerId = -1;
    }

    Task.prototype = {
        constructor: Task
    };

    Task.prototype.init = function(config) {
        if(config.id) this.id = config.id;
        if(config.name) this.name = config.name;
        if(config.description) this.description = config.description;
        if(config.content) this.content = config.content;
        if(config.type) this.type = config.type;
        if(config.lon) this.lon = config.lon;
        if(config.lat) this.lat = config.lat;
        if(config.popupTpl) this.popupTpl = config.popupTpl;
        if(config.markerId != undefined) this.markerId = config.markerId;
    };

    return (Task);
});