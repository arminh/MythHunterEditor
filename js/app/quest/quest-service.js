/**
 * Created by armin on 04.02.16.
 */
quest.factory('Quest', function($modal, $q, Task, HTMLText) {

    function Quest() {
        this.remoteId = -1;
        this.creatorId = -1;
        this.tasks = [];
        this.taskId = 0;
        this.name = "";
        this.description = "";
        this.startTask = null;
        this.html = new HTMLText(this);
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
            this.html.content = result.quest_content;
            this.startTask = new Task();
            this.name = result.name;

            this.startTask.parent = this;
            this.startTask.name = result.name;
            this.startTask.html.content = result.task_content;
            this.startTask.type = "start";
            this.startTask.fixed = true;
            this.startTask.drawMarker().then(function() {
                console.log(this);
                deffered.resolve(this);
            }.bind(this));

        }.bind(this));

        return deffered.promise;
    };

    Quest.prototype.init = function(config) {

    };

    Quest.prototype.changed = function() {
        this.changed = true;
    };

    Quest.prototype.addTask = function(task) {
        task.parent = this;
        this.tasks[this.taskId] = task;
        this.taskId++;
    };

    Quest.prototype.upload = function() {

        this.remoteQuest = new backend_com_wsdl_quest();
        this.remoteQuest.setCreaterId(this.creatorId);

        var promises = [];

        if(this.html.id == -1 || this.html.changed == true) {
            promises.push(this.html.upload());
        }

        if(this.startTask.remoteId == -1 || this.startTask.changed == true) {
            promises.push(this.startTask.upload());
        }

        for(var i=0; i < this.tasks.length; i++) {
            if(this.tasks[i].remoteId == -1 || this.tasks[i].changed == true) {
                promises.push(this.tasks[i].upload());
            }
        }

        var deferred = $q.defer();

        $q.all(promises).then(function(responses) {
            this.remoteQuest.setHtmlId(responses[0]);
            this.remoteQuest.setStartMarker(responses[1]);

            var taskIds = [];
            for(var i=2; i < responses.length; i++) {
                taskIds.push(responses[i].getId());
            }
            this.remoteQuest.setMarkers(taskIds);

            backend.addQuest(
                function(result) {
                    console.log(result.getReturn());
                    this.remoteId = result.getReturn().getId();
                    deferred.resolve(this.remoteId);
                }.bind(this),
                function(error) {
                    deferred.reject(error)
                },
                this.remoteQuest);
        }.bind(this));

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
