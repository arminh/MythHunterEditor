/**
 * Created by armin on 04.02.16.
 */
quest.factory('Quest', function($modal, $q, AuthenticationService, BackendService, MarkerType, TreePartType, Task, HTMLText, TreePart) {

    function Quest() {
        this.remoteId = 0;
        this.creatorId = -1;
        this.name = "";
        this.description = "";
        this.html = new HTMLText(this);
        this.changed = false;
        this.version = null;
        this.submitted = true;
        this.approved = true;

        this.tasks = [];
        this.startTask = null;
        this.treeParts = [];
        this.treePartRoot = null;

        this.treePartsToDelete = [];
        this.tasksToDelete = [];
    }

    Quest.prototype = {
        constructor: Quest,
        create: create,
        initFromObject: initFromObject,
        initFromRemote: initFromRemote,
        change: change,
        addTask: addTask,
        addTreePart: addTreePart,
        getTaskById: getTaskById,
        getTaskByRemoteId: getTaskByRemoteId,
        deleteTreePart: deleteTreePart,
        deleteTask: deleteTask,
        upload: upload
    };

    function create(creatorId) {
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
                    this.treePartRoot = new TreePart(this.startTask);
                    this.treePartRoot.type = TreePartType.Marker;
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

        var treePart = new TreePart(this.startTask);
        treePart.initFromObject(questObject.treePartRoot, this, true);
        this.treePartRoot = treePart;
    }

    function initFromRemote(remoteQuest) {

        var deffered = $q.defer();

        this.creatorId = remoteQuest.getCreaterId();
        this.description = remoteQuest.getShortDescription();
        this.name = remoteQuest.getName();
        this.remoteId = remoteQuest.getId();
        this.version = remoteQuest.getVersion();

        var promises = [];
        var treePromises = [];

        promises.push(getHtmlFromRemote(remoteQuest.getHtmlId()));
        var startPromise = getTaskFromRemote(remoteQuest.getStartMarkerId());
        promises.push(startPromise);
        treePromises.push(startPromise);

        var remoteTasks = remoteQuest.getMarkers();
        for(var i = 0; i < remoteTasks.length; i++) {
            var promise = getTaskFromRemote(remoteTasks[i]);
            promises.push(promise);
            treePromises.push(promise);
        }

        var treeDeffered = $q.defer();

        $q.all(treePromises).then(function(results) {
            BackendService.getTreePart(remoteQuest.getTreeRootId()).then(function(result) {
                var treePartRoot = new TreePart(null);

                this.treePartRoot = treePartRoot.initFromRemote(result, this, true);
                this.treePartRoot.task = results[0];
            }.bind(this));
        }.bind(this));

        promises.push(treeDeffered);

        $q.all(promises).then(function(results) {
            this.html = results[0];
            this.startTask = results[1];
            this.startTask.type = "start";

            for(var i = 2; i < results.length-1; i++) {
                this.tasks.push(results[i]);
            }

            //this.tasks = results.slice(2, results.length-1);
            this.treePartRoot = results[length-1];

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

    function getTaskById(taskId) {
        for(var i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].id == taskId) {
                return this.tasks[i];
            }
        }

        return null;
    }

    function getTaskByRemoteId(taskId) {
        for(var i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].remoteId == taskId) {
                return this.tasks[i];
            }
        }

        return null;
    }

    function deleteTreePart(index) {
        console.log("Delete " + index);
        this.deleteTask(this.treeParts[index].task.id);
        var remoteId = this.treeParts[index].remoteId;
        if(remoteId != -1) {
            this.treePartsToDelete.push(this.treeParts[index]);
        }
        this.treeParts.splice(index, 1);
        this.rewireTree(this.treePartRoot, this.treeParts);
        console.log(this.treeParts);
        this.change();
    }

    function deleteTask(id) {
        console.log("Delete Task " + id);
        for(var i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].id == id) {
                var remoteId = this.tasks[i].remoteId;
                if(remoteId != -1) {
                    this.tasksToDelete.push(remoteId);
                }
                this.tasks.splice(i, 1);
            }
        }
        console.log(this.tasks);
    }

    function change() {
        this.changed = true;
        AuthenticationService.getUser().backup();
        console.log("Quest changed");
    }

    function addTask(task) {
        this.tasks.push(task);
        var treePart = new TreePart(task);
        treePart.type = TreePartType.Marker;

        if(this.treeParts.length == 0) {
            this.treePartRoot.successors.push(treePart);
        } else {
            this.treeParts[this.treeParts.length-1].successors.push(treePart);
        }

        this.treeParts.push(treePart);
        this.change();
    }

    function addTreePart(treePart) {
        this.treeParts.push(treePart);
    }

    function upload() {

        var deferred = $q.defer();

        var promises = [];
        var treePromises = [];
        promises.push(this.html.upload());

        var startPromise = this.startTask.upload();
        promises.push(startPromise);
        treePromises.push(startPromise);

        for(var i=0; i < this.tasks.length; i++) {
            var promise = this.tasks[i].upload();
            promises.push(promise);
            treePromises.push(promise);
        }

        var treePartPromise = $q.defer();

        $q.all(treePromises).then(function(responses) {
            this.treePartRoot.upload().then(function(result) {
                treePartPromise.resolve(result.getId());
            });
        }.bind(this));

        promises.push(treePartPromise.promise);

        if(this.remoteId < 1 || this.changed) {
            this.remoteQuest = BackendService.createRemoteQuest(this);

            $q.all(promises).then(function(responses) {
                this.remoteQuest.setHtmlId(responses[0]);
                this.remoteQuest.setStartMarkerId(responses[1]);

                var taskIds = [];
                for(var i=2; i < responses.length-1; i++) {
                    taskIds.push(responses[i]);
                }
                this.remoteQuest.setMarkers(taskIds);

                this.remoteQuest.setTreeRootId(responses[responses.length-1]);


                if(this.remoteId > 0 && this.changed) {

                    BackendService.updateQuest(this.remoteQuest).then(function(result) {
                        this.version = result.getVersion();

                        for(i=0; i < this.treePartsToDelete.length; i++) {
                            this.treePartsToDelete[i].remove();
                        }

                        deferred.resolve(this);
                    }.bind(this), function(error) {
                        alert(error);
                        deferred.reject(error);
                    });
                } else {
                    BackendService.addQuest(this.remoteQuest).then(function(result) {
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

    Quest.prototype.rewireTree = function(treePartRoot, treeParts) {
        treePartRoot.successors = [];
        if(treeParts.length == 0) {
            return;
        }

        treePartRoot.successors.push(treeParts[0]);
        treePartRoot.change();

        for(var i = 0; i < treeParts.length-1; i++) {
            treeParts[i].successors = [];
            treeParts[i].successors.push(treeParts[i+1]);
            treeParts[i].change();
        }

        if(treeParts[treeParts.length-1]) {
            treeParts[treeParts.length-1].successors = [];
            treeParts[treeParts.length-1].change();
        }
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
