/**
 * Created by armin on 04.02.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('Quest', QuestFactory);

    QuestFactory.$inject = ["$log", "$q", "QuestService", "AuthenticationService", "BackendService", "TreePartType", "Task", "HtmlText", "TreePart"];

    /* @ngInject */
    function QuestFactory($log, $q, QuestService, AuthenticationService, BackendService, TreePartType, Task, HtmlText, TreePart) {

        $log = $log.getInstance("Quest", debugging);
        function Quest() {
            this.remoteId = 0;
            this.creatorId = -1;
            this.name = "";
            this.description = "";
            this.html = new HtmlText(this);
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
            edit: edit,
            initFromObject: initFromObject,
            initFromRemote: initFromRemote,
            change: change,
            addTask: addTask,
            addTreePart: addTreePart,
            getTaskById: getTaskById,
            deleteTreePart: deleteTreePart,
            deleteTask: deleteTask,
            rewireTree: rewireTree,
            upload: upload,
            toString: toString
        };

        return (Quest);

        ////////////////

        function create(creatorId) {
            this.creatorId = creatorId;

            $log.info("create");
            return QuestService.openQuestDialog(this, false).then(questCreated.bind(this), createQuestCanceled);

            function questCreated(result) {
                this.name = result.name;
                this.html.content = result.questContent;
                this.startTask = new Task(this.name);
                this.name = result.name;

                this.startTask.name = result.name;
                this.startTask.html.content = result.taskContent;
                this.startTask.type = "start";
                this.startTask.fixed = true;
                this.startTask.questName = result.name;
                return this.startTask.drawMarker().then(function() {
                    this.treePartRoot = new TreePart(this.startTask);
                    this.treePartRoot.type = TreePartType.Marker;
                    $log.info("create_success: ", this);
                    return this;
                }.bind(this));
            }

            function createQuestCanceled(error) {
                $log.info("create_fail: Canceled");
                return $q.reject("Canceled");
            }
        }

        function edit() {

            $log.info("edit");
            return QuestService.openQuestDialog(this, true).then(editComplete.bind(this), editQuestCanceled);

            function editComplete(result) {
                if(this.name != result.name) {
                    this.name = result.name;
                    this.change();
                }

                if(this.html.content != result.questContent) {
                    this.html.content = result.questContent;
                    this.change();
                }
                $log.info("edit_success: ", this);
                return this;
            }

            function editQuestCanceled(error) {
                $log.info("edit_fail: Canceled");
                return $q.reject("Canceled");
            }
        }

        function initFromObject(questObject) {
            $log.info("initFromObject: ", questObject);

            this.changed = questObject.changed;
            this.creatorId = questObject.creatorId;
            this.description = questObject.description;
            this.name = questObject.name;
            this.remoteId = questObject.remoteId;
            this.version = questObject.version;

            this.html = new HtmlText();
            this.html.initFromObject(questObject.html);

            this.startTask = new Task(this.name);
            this.startTask.initFromObject(questObject.startTask);

            for(var i = 0; i < questObject.tasks.length; i++) {
                var task = new Task(this.name);
                task.initFromObject(questObject.tasks[i]);
                this.tasks.push(task);
            }

            this.treePartRoot = new TreePart(this.startTask);
            this.treePartRoot.initFromObject(questObject.treePartRoot, this, true);

            $log.info("initFromObject_success: ", this);
        }

        function initFromRemote(remoteQuest) {

            $log.info("initFromRemote: ", remoteQuest);

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

            promises.push($q.all(treePromises).then(initTreeParts.bind(this)));

            return $q.all(promises).then(initQuest.bind(this));

            function initTreeParts(tasks) {

                return BackendService.getTreePart(remoteQuest.getTreeRootId()).then(initTreePart.bind(this));

                function initTreePart(remoteTreePart) {
                    var treePartRoot = new TreePart(null);
                    treePartRoot.initFromRemote(remoteTreePart, tasks, this, true);
                    return treePartRoot;
                }
            }

            function initQuest(results) {
                this.html = results[0];
                this.startTask = results[1];
                this.startTask.type = "start";
                this.startTask.questName = this.name;

                for(var i = 2; i < results.length-1; i++) {
                    this.tasks.questName = this.name;
                    this.tasks.push(results[i]);
                }

                this.treePartRoot = results[results.length-1];

                $log.info("initFromRemote_success: ", this);
                return this;
            }
        }

        function getHtmlFromRemote(htmlId) {
            $log.info("getHtmlFromRemote: ", htmlId);
            return BackendService.getHtml(htmlId).then(function(remoteHtml) {
                var html = new HtmlText();
                if(remoteHtml) {
                    html.initFromRemote(remoteHtml);
                }
                $log.info("getHtmlFromRemote_success (id = " + html.id +  "): ", html);
                return html;
            });
        }

        function getTaskFromRemote(taskId) {

            $log.info("getTaskFromRemote: ", taskId);
            return BackendService.getTask(taskId).then(function(remoteTask) {
                var task = new Task();
                return task.initFromRemote(remoteTask).then(function(result) {
                    $log.info("getTaskFromRemote_success (id = " + result.remoteId +  "): ", result);
                    return result;
                });
            });
        }

        function addTask(task) {
            $log.info("addTask: ", task);
            this.tasks.push(task);
            var treePart = new TreePart(task);
            treePart.type = TreePartType.Marker;

            if(this.treeParts.length == 0) {
                this.treePartRoot.successors.push(treePart);
                this.treePartRoot.change();
            } else {
                this.treeParts[this.treeParts.length-1].successors.push(treePart);
                this.treeParts[this.treeParts.length-1].change();
            }

            this.treeParts.push(treePart);
            $log.info("addTreePart: ", treePart);
            this.change();
        }

        function addTreePart(treePart) {
            this.treeParts.push(treePart);
        }

        function getTaskById(taskId) {
            for(var i = 0; i < this.tasks.length; i++) {
                if(this.tasks[i].id == taskId) {
                    return this.tasks[i];
                }
            }

            return null;
        }

        function deleteTreePart(treePart) {

            var remoteId = treePart.remoteId;
            $log.info("deleteTreePart: ", treePart);

            if(remoteId != -1) {
                this.treePartsToDelete.push(treePart);
            }

            for(var i = 0; i < this.treeParts.length; i++) {
                if(this.treeParts[i].id == treePart.id) {
                    this.treeParts.splice(i, 1);
                }
            }

            this.rewireTree(this.treePartRoot, this.treeParts);
            $log.info("deleteTreePart_success: ", this.treeParts);

            this.deleteTask(treePart.task.id);
            this.change();
        }

        function deleteTask(id) {
            for(var i = 0; i < this.tasks.length; i++) {
                if(this.tasks[i].id == id) {
                    var remoteId = this.tasks[i].remoteId;

                    $log.info("deleteTask: ", remoteId);
                    if(remoteId != -1) {
                        this.tasksToDelete.push(remoteId);
                    }
                    this.tasks.splice(i, 1);
                    $log.info("deleteTask_success: ", this.tasks);
                }
            }
        }

        function change() {
            this.changed = true;
            AuthenticationService.getUser().backup();
        }

        function upload() {
            $log.info("upload: ", this);

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

                return $q.all(promises).then(function(responses) {
                    this.remoteQuest.setHtmlId(responses[0]);
                    this.remoteQuest.setStartMarkerId(responses[1]);

                    var taskIds = [];
                    for(var i=2; i < responses.length-1; i++) {
                        taskIds.push(responses[i]);
                    }
                    this.remoteQuest.setMarkers(taskIds);

                    this.remoteQuest.setTreeRootId(responses[responses.length-1]);


                    if(this.remoteId > 0 && this.changed) {
                        $log.info("upload - Updating: ", this.remoteQuest);
                        return BackendService.updateQuest(this.remoteQuest).then(function(result) {
                            this.version = result.getVersion();

                            for(i=0; i < this.treePartsToDelete.length; i++) {
                                this.treePartsToDelete[i].remove();
                            }
                            this.treePartsToDelete = [];
                            $log.info("upload_success: ", this);
                            return this;
                        }.bind(this), function(error) {
                            alert(error);
                            return $q.reject(error);
                        });
                    } else {
                        $log.info("upload - Adding: ", this.remoteQuest);
                        return BackendService.addQuest(this.remoteQuest).then(function(result) {
                            this.remoteId = result.getId();
                            $log.info("upload_success: ", this);
                            return this;
                        }.bind(this));
                    }
                }.bind(this));
            } else {
                return $q.all(promises).then(function(responses) {
                    return this;
                }.bind(this));
            }
        }

        function rewireTree(treePartRoot, treeParts) {
            $log.info("rewireTree: ", treePartRoot);
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

            $log.info("rewireTree_success: ", treePartRoot);
        }

        function toString() {
            var members = [];

            members.push("remoteId:" + this.remoteId);
            members.push("creatorId:" + this.creatorId);
            members.push("name: " + this.name);
            members.push("description: " + this.description);
            members.push("html: " + this.html.id);
            members.push("version: " + this.version);
            members.push("submitted: " + this.submitted);
            members.push("approved: " + this.approved);

            members.push("startTask: " + this.startTask.remoteId);
            var tasks = [];
            for(var i = 0; i < this.tasks.length; i++) {
                tasks.push("" + this.tasks[i].remoteId);
            }
            members.push("tasks: [" + tasks.concat[", "] + "]");

            members.push("treePartRoot: " + this.treePartRoot.remoteId);
            var treeParts = [];
            for(i = 0; i < this.treeParts.length; i++) {
                treeParts.push("" + this.treeParts[i].remoteId);
            }
            members.push("treeParts: [" + treeParts.concat[", "] + "]");

            var treePartsToDelete = [];
            for(i = 0; i < this.treePartsToDelete.length; i++) {
                treePartsToDelete.push("" + this.treePartsToDelete[i].remoteId);
            }
            members.push("treePartsToDelete: [" + treePartsToDelete.concat[", "] + "]");

            var tasksToDelete = [];
            for(i = 0; i < this.tasksToDelete.length; i++) {
                tasksToDelete.push("" + this.tasksToDelete[i].remoteId);
            }
            members.push("tasksToDelete: [" + tasksToDelete.concat[", "] + "]");

            return "" + members.concat(", ");
        }

    }

})();
