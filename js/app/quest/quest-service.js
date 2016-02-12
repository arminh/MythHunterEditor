/**
 * Created by armin on 04.02.16.
 */
quest.factory('Quest', function($modal, $q, Task, HTMLText) {

    function Quest() {
        this.creatorId = -1;
        this.tasks = [];
        this.taskId = 0;
        this.name = "";
        this.description = "";
        this.content = "";
        this.startTask = null;
        this.currentTask = null;
        this.html = null;
        this.tasks = [];
        this.changed = false;
    }

    Quest.prototype = {
        constructor: Quest
    };

    Quest.prototype.create = function() {
        var deffered = $q.defer();

        openQuestDialog(this).then(function(result) {
            this.name = result.name;
            this.html = new HTMLText(result.quest_content);
            this.startTask = new Task();
            this.name = result.name;

            this.startTask.name = result.name;
            this.startTask.html.content = result.task_content;
            this.startTask.type = "start";
            this.startTask.fixed = true;
            this.startTask.drawMarker().then(function() {
            }.bind(this));
            deffered.resolve(this);
        }.bind(this));

        return deffered.promise;
    };

    Quest.prototype.init = function(config) {

    };

    Quest.prototype.createTask = function() {
        this.currentTask = new Task();
        this.currentTask.id = this.taskId;
        this.currentTask.create();
    };

    Quest.prototype.addTask = function(task) {
        this.tasks[this.taskId] = task;
        this.taskId++;
    };

    Quest.prototype.getTask = function(id) {
       //return this.tasks[]
    };

    Quest.prototype.upload = function() {
        var deferred = $q.defer();

        this.remoteQuest = new backend_com_wsdl_quest();
        this.remoteQuest.setCreaterId(this.creatorId);

        return deferred.promise;
    };

    var openQuestDialog = function(quest) {
        var modalInstance = $modal.open({
            animation: true,
            backdrop: 'static',
            size: "lg",
            templateUrl: 'js/app/quest/quest.tpl.html',
            controller: 'QuestController',
            resolve: {
                quest: function () {
                    return quest;
                }
            }
        });

        return modalInstance.result;
    };

    return (Quest);
});
