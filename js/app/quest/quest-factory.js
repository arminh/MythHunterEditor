/**
 * Created by armin on 04.02.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('Quest', QuestFactory);

    QuestFactory.$inject = ["$log", "$q", "QuestService", "AuthenticationService", "BackendService", "TreePartType", "Task", "HtmlText", "TreePart", "DifficultyLevel"];

    /* @ngInject */
    function QuestFactory($log, $q, QuestService, AuthenticationService, BackendService, TreePartType, Task, HtmlText, TreePart, DifficultyLevel) {

        $log = $log.getInstance("Quest", debugging);
        function Quest() {
            this.remoteId = 0;
            this.version = null;
            this.name = "";
            this.description = "";
            this.diffulty = DifficultyLevel.LOW;
            this.qualityRating = 0;
            this.difficultyRating = 0;
            this.html = null;
            this.creatorId = -1;
            this.approved = true;
            this.submitted = true;
            this.specialCards = [];

            this.loaded = false;
            this.specialCards = [];
            this.treeParts = [];
            this.treePartRoot = null;
            this.treePartsToDelete = [];
        }

        Quest.prototype = {
            constructor: Quest,
            create: create,
            edit: edit,
            initFromObject: initFromObject,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            load: load,
            change: change,
            newTreePart: newTreePart,
            addTreePart: addTreePart,
            deleteTreePart: deleteTreePart,
            getTreePart: getTreePart,
            getTreePartByRemoteId: getTreePartByRemoteId,
            rewireTree: rewireTree,
            upload: upload,
            remove: remove,

            getRemoteId: getRemoteId,
            getVersion: getVersion,
            getCreatorId: getCreatorId,
            getName: getName,
            getDescription: getDescription,
            getHtml: getHtml,
            getTreePartRoot: getTreePartRoot,
            getTreeParts: getTreeParts,
            getSubmitted: getSubmitted,
            getApproved: getApproved,
            getLoaded: getLoaded,
            setLoaded: setLoaded,
            getSpecialCards: getSpecialCards,
            getDifficulty: getDifficulty,
            getDifficultyRating: getDifficultyRating,
            getQualityRating: getQualityRating
        };

        return (Quest);

        ////////////////

        function create(creatorId) {
            this.creatorId = creatorId;

            $log.info("create");
            return QuestService.openQuestDialog(this, false).then(questCreated.bind(this), createQuestCanceled);

            function questCreated(result) {
                this.name = result.name;

                this.html = new HtmlText();
                this.html.setContent(result.questContent);

                var startTask = new Task(this.name);
                startTask.setName(result.name);
                startTask.setType("start");
                startTask.setQuestName(result.name);
                startTask.setFixed(true);

                var startHtml = new HtmlText();
                startHtml.setContent(result.taskContent);
                startHtml.setQuestTitle(this.name);
                startHtml.setTaskTitle(this.name);
                startTask.setHtml(startHtml);

                return startTask.drawMarker().then(function () {
                    this.treePartRoot = new TreePart(startTask);
                    this.treePartRoot.setType(TreePartType.Marker);
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
                if (this.name != result.name) {
                    this.name = result.name;
                    this.html.setQuestTitle(result.name);
                    this.treePartRoot.getTask().getHtml().setQuestTitle(result.name);
                    for (var i = 0; i < this.treeParts.length; i++) {
                        this.treeParts[i].getTask().getHtml().setQuestTitle(result.name);
                    }
                    this.change();
                }

                if (this.html.getContent() != result.questContent) {
                    this.html.setContent(result.questContent);
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
            this.loaded = questObject.loaded;

            this.specialCards = questObject.specialCards;
            this.diffulty = questObject.diffulty;
            this.qualityRating = questObject.qualityRating;
            this.difficultyRating = questObject.difficultyRating;

            this.html = new HtmlText();
            this.html.initFromObject(questObject.html);

            this.treePartRoot = new TreePart(null);
            this.treePartRoot.initFromObject(questObject.treePartRoot, this, true);


            $log.info("initFromObject_success: ", this);
        }

        function getFromRemote() {
            $log.info("getFromRemote: ", this.remoteId);
            return BackendService.getQuest(this.remoteId).then(success.bind(this), fail.bind(this));

            function success(remoteQuest) {
                if (remoteQuest) {
                    $log.info("getFromRemote_success: ", this.remoteId);
                    return this.initFromRemote(remoteQuest);
                } else {
                    $log.info("getFromRemote_fail: ", this.remoteId);
                    return $q.reject();
                }
            }

            function fail(error) {
                $log.info("getFromRemote_fail: ", this.remoteId);
                return $q.reject(error);
            }
        }

        function initFromRemote(remoteQuest) {

            $log.info("initFromRemote: ", remoteQuest);

            this.remoteId = remoteQuest.getId();
            this.name = remoteQuest.getName();
            this.creatorId = remoteQuest.getCreaterId();
            this.description = remoteQuest.getShortDescription();
            this.version = remoteQuest.getVersion();
            this.specialCards = remoteQuest.getSpecialCards();
            this.diffulty = remoteQuest.getDifficulty();
            this.qualityRating = remoteQuest.getQualityRating();
            this.difficultyRating= remoteQuest.getDifficultyRating();

            this.html = new HtmlText();
            this.html.setRemoteId(remoteQuest.getHtmlId());

            this.treePartRoot = new TreePart(null);
            this.treePartRoot.setRemoteId(remoteQuest.getTreeRootId());

            $log.info("initFromRemote_success: ", this);
            return this;
        }

        function load() {
            $log.info("load: ", this);

            var promises = [];
            promises.push(this.html.getFromRemote());
            promises.push(this.treePartRoot.getFromRemote(this));

            return $q.all(promises).then(function () {
                this.treePartRoot.getTask().setType("start");
                this.loaded = true;
                AuthenticationService.getUser().backup();

                $log.info("load_success: ", this);
                return this;
            }.bind(this));
        }

        function newTreePart(task) {
            $log.info("newTreePart: ", task);
            var treePart = new TreePart(task);
            treePart.setType(TreePartType.Marker);

            if (this.treeParts.length == 0) {
                this.treePartRoot.addSuccessor(treePart);
                this.treePartRoot.change();
            } else {
                this.treeParts[this.treeParts.length - 1].addSuccessor(treePart);
                this.treeParts[this.treeParts.length - 1].change();
            }

            QuestService.addTreePartToQuest(this, treePart);
            $log.info("newTreePart_success: ", treePart);
            this.change();
        }

        function addTreePart(treePart) {
            this.treeParts.push(treePart);
        }

        function deleteTreePart(treePart) {

            var remoteId = treePart.getRemoteId();
            $log.info("deleteTreePart: ", treePart);

            if (remoteId != -1) {
                this.treePartsToDelete.push(treePart);
            }

            for (var i = 0; i < this.treeParts.length; i++) {
                if (this.treeParts[i].getId() == treePart.getId()) {
                    this.treeParts.splice(i, 1);
                }
            }

            this.rewireTree(this.treePartRoot, this.treeParts);
            $log.info("deleteTreePart_success: ", this.treeParts);

            this.change();
        }

        function getTreePart(treePartId) {
            var treePart = null;
            for(var i = 0; i < this.treeParts.length; i++) {
                if(this.treeParts[i].id == treePartId) {
                    treePart = this.treeParts[i];
                }
            }
            return treePart;
        }

        function getTreePartByRemoteId(treePartRemoteId) {
            var treePart = null;
            for(var i = 0; i < this.treeParts.length; i++) {
                if(this.treeParts[i].remoteId == treePartRemoteId) {
                    treePart = this.treeParts[i];
                }
            }
            return treePart;
        }

        function change() {
            this.changed = true;
            AuthenticationService.getUser().backup();
        }

        function upload() {
            $log.info("upload: ", this);

            var promises = [];

            promises.push(this.html.upload());
            promises.push(this.treePartRoot.upload());

            if (this.remoteId < 1 || this.changed) {
                this.remoteQuest = BackendService.createRemoteQuest(this);

                return $q.all(promises).then(function (responses) {
                    this.remoteQuest.setHtmlId(responses[0]);
                    this.remoteQuest.setTreeRootId(responses[1].getId());
                    this.remoteQuest.setStartMarkerId(responses[1].getMarker().getId());

                    if (this.remoteId > 0 && this.changed) {
                        $log.info("upload - Updating: ", this.remoteQuest);
                        return BackendService.updateQuest(this.remoteQuest).then(function (result) {
                            this.version = result.getVersion();

                            for (var i = 0; i < this.treePartsToDelete.length; i++) {
                                this.treePartsToDelete[i].remove();
                            }
                            this.treePartsToDelete = [];
                            $log.info("upload_success: ", this);
                            return this;
                        }.bind(this), function (error) {
                            alert(error);
                            return $q.reject(error);
                        });
                    } else {
                        $log.info("upload - Adding: ", this.remoteQuest);
                        return BackendService.addQuest(this.remoteQuest).then(function (result) {
                            this.remoteId = result.getId();
                            $log.info("upload_success: ", this);
                            return this;
                        }.bind(this));
                    }
                }.bind(this));
            } else {
                return $q.all(promises).then(function (responses) {
                    return this;
                }.bind(this));
            }
        }

        function remove() {
            $log.info("remove: ", this);

            if(!this.loaded) {
                return this.load().then(deleteQuest.bind(this));
            } else {
                return deleteQuest.bind(this)();
            }

            function deleteQuest() {
                return BackendService.deleteQuest(this.remoteId).then(function () {
                    $log.info("remove_success: ", this);
                    this.treePartRoot.remove();

                    for (var i = 0; i < this.treeParts.length; i++) {
                        this.treeParts[i].remove();
                    }

                    return this;
                }.bind(this));
            }

        }

        function rewireTree(treePartRoot, treeParts) {
            $log.info("rewireTree: ", treePartRoot);
            treePartRoot.successors = [];
            if (treeParts.length == 0) {
                return;
            }

            treePartRoot.successors.push(treeParts[0]);
            treePartRoot.change();

            for (var i = 0; i < treeParts.length - 1; i++) {
                treeParts[i].successors = [];
                treeParts[i].successors.push(treeParts[i + 1]);
                treeParts[i].change();
            }

            if (treeParts[treeParts.length - 1]) {
                treeParts[treeParts.length - 1].successors = [];
                treeParts[treeParts.length - 1].change();
            }

            $log.info("rewireTree_success: ", treePartRoot);
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function getVersion() {
            return this.version;
        }

        function getCreatorId() {
            return this.creatorId
        }

        function getName() {
            return this.name;
        }

        function getDescription() {
            return this.description;
        }

        function getHtml() {
            return this.html;
        }

        function getTreePartRoot() {
            return this.treePartRoot;
        }

        function getTreeParts() {
            return this.treeParts;
        }

        function getSubmitted() {
            return this.submitted;
        }

        function getApproved() {
            return this.approved;
        }

        function getLoaded() {
            return this.loaded;
        }

        function setLoaded(value) {
            this.loaded = value;
        }

        function getSpecialCards() {
            return this.specialCards;
        }

        function getDifficulty() {
            return this.diffulty;
        }

        function getQualityRating() {
            return this.qualityRating;
        }

        function getDifficultyRating() {
            return this.difficultyRating;
        }
    }

})();
