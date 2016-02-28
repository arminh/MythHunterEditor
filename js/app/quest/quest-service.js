/**
 * Created by armin on 04.02.16.
 */
quest.factory('Quest', function($modal, $q, AuthenticationService, BackendService, MarkerType, Task, HTMLText) {

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
        this.version = null;

        this.tasksToDelete = [];
    }

    Quest.prototype = {
        constructor: Quest,
        create: create,
        initFromObject: initFromObject,
        initFromRemote: initFromRemote,
        change: change,
        addTask: addTask,
        deleteTask: deleteTask,
        upload: upload
    };

    function create(creatorId) {
        console.log(this);
        var deffered = $q.defer();
        this.creatorId = creatorId;
        openQuestDialog(this).then(
            function(result) {
                this.name = result.name;
                this.html.content = result.quest_content;
                this.startTask = new Task();
                this.name = result.name;

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
    }


    function initFromObject(questObject) {
        this.changed = questObject.changed;
        this.creatorId = questObject.creatorId;
        this.description = questObject.description;
        this.name = questObject.name;
        this.remoteId = questObject.remoteId;
        this.version = questObject.version;

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
    }

    function initFromRemote(remoteQuest) {

        var deffered = $q.defer();

        this.creatorId = remoteQuest.getCreaterId();
        this.description = remoteQuest.getShortDescription();
        this.name = remoteQuest.getName();
        this.remoteId = remoteQuest.getId();
        this.version = remoteQuest.getVersion();

        var promises = [];

        promises.push(getHtmlFromRemote(remoteQuest.getHtmlId()));
        promises.push(getTaskFromRemote(remoteQuest.getStartMarkerId()));

        var remoteTasks = remoteQuest.getMarkers();
        for(var i = 0; i < remoteTasks.length; i++) {
            promises.push(getTaskFromRemote(remoteTasks[i]));
        }

        $q.all(promises).then(function(results) {
            this.html = results[0];
            this.startTask = results[1];
            this.startTask.type = "start";
            this.tasks = results.slice(2, results.length);

            deffered.resolve(this);
        }.bind(this));

        return deffered.promise;
    }

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

    function deleteTask(taskIndex) {
        var remoteId = this.tasks[taskIndex].remoteId;
        if(remoteId != -1) {
            this.tasksToDelete.push(remoteId);
        }
        this.tasks.splice(taskIndex, 1);
        this.change();
    }

    function change() {
        this.changed = true;
        AuthenticationService.getUser().backup();
        console.log("Quest changed");
    }

    function addTask(task) {
        this.tasks.push(task);
        this.change();
    }

    function upload() {

        var deferred = $q.defer();

        var promises = [];
        promises.push(this.html.upload());
        promises.push(this.startTask.upload());

        for(var i=0; i < this.tasks.length; i++) {
            promises.push(this.tasks[i].upload());
        }

        for(i=0; i < this.tasksToDelete.length; i++) {
            BackendService.deleteTask(this.tasksToDelete[i]);
        }

        if(this.remoteId == -1 || this.changed) {
            this.remoteQuest = BackendService.createRemoteQuest(this);

            $q.all(promises).then(function(responses) {
                this.remoteQuest.setHtmlId(responses[0]);
                this.remoteQuest.setStartMarkerId(responses[1]);

                var taskIds = [];
                for(var i=2; i < responses.length; i++) {
                    taskIds.push(responses[i]);
                }
                this.remoteQuest.setMarkers(taskIds);

                if(this.remoteId != -1 && this.changed) {
                    console.log("Update Quest:");
                    console.log(this.remoteQuest);
                    BackendService.updateQuest(this.remoteQuest).then(function(result) {
                        this.version = result.getVersion();
                        deferred.resolve(this);
                    }.bind(this), function(error) {
                        alert(error);
                        deferred.reject(error);
                    });
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
    }

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
