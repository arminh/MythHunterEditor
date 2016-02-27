/**
 * Created by armin on 04.02.16.
 */
quest.factory('Quest', function($modal, $q, AuthenticationService, BackendService, Task, HTMLText) {

    function Quest() {
        this.remoteId = -1;
        this.creatorId = -1;
        this.tasks = [];
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

    Quest.prototype.create = function(creatorId) {
        console.log(this);
        var deffered = $q.defer();
        this.creatorId = creatorId;
        openQuestDialog(this).then(
            function(result) {
                this.name = result.name;
                this.html.content = result.quest_content;
                this.startTask = new Task();
                this.name = result.name;

                //this.startTask.quest = this;
                this.startTask.name = result.name;
                this.startTask.html.content = result.task_content;
                this.startTask.type = "start";
                this.startTask.fixed = true;
                this.startTask.drawMarker().then(function() {
                    console.log(this);
                    deffered.resolve(this);
                }.bind(this));

            }.bind(this),
            function(error) {
                deffered.reject("Canceled");
            });

        return deffered.promise;
    };

    Quest.prototype.init = function(config) {

    };

    Quest.prototype.initFromObject = function(questObject) {
        this.changed = questObject.changed;
        this.creatorId = questObject.creatorId;
        this.description = questObject.description;
        this.name = questObject.name;
        this.remoteId = questObject.remoteId;

        var html = new HTMLText();
        html.initFromObject(questObject.html);
        this.html = html;

        var task = new Task();
        task.initFromObject(questObject.startTask);
        this.startTask = task;

        for(var i = 0; i < questObject.tasks.length; i++) {
            task = new Task();
            task.initFromObject(questObject.tasks[i]);
            this.tasks.push(task);
        }
    };

    Quest.prototype.initFromRemote = function(remoteQuest) {

        var deffered = $q.defer();

        this.creatorId = remoteQuest.getCreaterId();
        this.description = remoteQuest.getShortDescription();
        this.name = remoteQuest.getName();
        this.remoteId = remoteQuest.getId();

        var promises = [];

        promises.push(getHtmlFromRemote(remoteQuest.getHtmlId()));
        promises.push(getTaskFromRemote(remoteQuest.getStartMarker().getId()));

        var remoteTasks = remoteQuest.getMarkers();
        for(var i = 0; i < remoteTasks.length; i++) {
            promises.push(getTaskFromRemote(remoteTasks[i]));
        }

        $q.all(promises).then(function(results) {
            this.html = results[0];
            this.startTask = results[1];
            this.startTask.type = "start";
            this.tasks = results.slice(2, results.length-1);

            deffered.resolve(this);
        }.bind(this));

        return deffered.promise;
    };

    function getHtmlFromRemote(htmlId) {
        var deffered = $q.defer();

        BackendService.getHtml(htmlId).then(function(remoteHtml) {
            var html = new HTMLText();
            html.initFromRemote(remoteHtml);
            deffered.resolve(html);
        });

        return deffered.promise;
    }

    function getTaskFromRemote(taskId) {
        var deffered = $q.defer();

        BackendService.getTask(taskId).then(function(remoteTask) {
            var task = new Task();
            task.initFromRemote(remoteTask).then(function(result) {
                deffered.resolve(result);
            });
        });

        return deffered.promise;
    }

    Quest.prototype.change = function() {
        this.changed = true;
        AuthenticationService.getUser().backup();
        console.log("Quest changed");
    };

    Quest.prototype.addTask = function(task) {
        this.tasks.push(task);
        this.change();
    };

    Quest.prototype.upload = function() {

        var deferred = $q.defer();

        var promises = [];
        promises.push(this.html.upload());
        promises.push(this.startTask.upload());

        for(var i=0; i < this.tasks.length; i++) {
            promises.push(this.tasks[i].upload());
        }

        if(this.remoteId == -1 || this.changed) {
            this.remoteQuest = BackendService.createRemoteQuest(this);

            $q.all(promises).then(function(responses) {
                this.remoteQuest.setHtmlId(responses[0]);
                this.remoteQuest.setStartMarker(responses[1]);

                var taskIds = [];
                for(var i=2; i < responses.length; i++) {
                    taskIds.push(responses[i].getId());
                }
                this.remoteQuest.setMarkers(taskIds);

                if(this.remoteId != -1 && this.changed) {
                    console.log(this.remoteQuest);
                    BackendService.updateQuest(this.remoteQuest);
                    deferred.resolve(this);
                } else {
                    BackendService.addQuest(this.remoteQuest).then(function(result) {
                        console.log(result);
                        this.remoteId = result.getId();
                        deferred.resolve(this);
                    }.bind(this));
                }
            }.bind(this));
        } else {
            $q.all(promises).then(function(responses) {
                deferred.resolve(this);
            }.bind(this));
        }

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
