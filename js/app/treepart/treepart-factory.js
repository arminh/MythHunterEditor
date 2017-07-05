/**
 * Created by armin on 28.02.16.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .factory('TreePart', TreePartFactory);

    TreePartFactory.$inject = ["$log", "$q", "BackendService", "TreePartType", "QuestService", "Task"];

    /* @ngInject */
    function TreePartFactory($log, $q, BackendService, TreePartType, QuestService, Task) {
        $log = $log.getInstance("TreePart", debugging);

        function TreePart(type, questName) {
            this.remoteId = 0;
            this.version = 0;
            this.finished = false;
            this.active = false;
            this.opened = false;
            this.task = null;
            this.questInstanceId = 0;
            this.executedAt = null;
            this.successors = [];
            this.type = type;
            this.highlightedInvisibeMarker = false;
            this.positionX = 10;
            this.positionY = 10;

            this.questName = questName;
            this.loaded = false;
            this.id = 0;
            this.changed = false;
            this.uploadPromise = null;
        }

        TreePart.prototype = {
            constructor: TreePart,
            initTask: initTask,
            initFromObject: initFromObject,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            addSuccessor: addSuccessor,
            removeSuccessor: removeSuccessor,
            removeTreePart: removeTreePart,
            hasSuccessor: hasSuccessor,
            hasAncestor: hasAncestor,
            check: check,
            change: change,
            upload: upload,
            remove: remove,

            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getId: getId,
            setId: setId,
            getVersion: getVersion,
            getType: getType,
            setType: setType,
            getTask: getTask,
            getSuccessors: getSuccessors,
            getFinished: getFinished,
            getActive: getActive,
            getOpened: getOpened,
            getQuestInstanceId: getQuestInstanceId,
            getExecutedAt: getExecutedAt,
            getHighlightedInvisibleMarker: getHighlightedInvisibleMarker,
            getPositionX: getPositionX,
            setPositionX: setPositionX,
            getPositionY: getPositionY,
            setPositionY: setPositionY
        };

        return (TreePart);

        ////////////////

        function initTask(taskType) {
            this.task = new Task(this.questName);
            this.task.init(taskType);
        }

        function initFromObject(treePartObject, quest, isRoot) {
            $log.info("initFromObject: ", treePartObject);

            if (!isRoot && treePartObject.type == TreePartType.Marker) {
                quest.addTreePart(this);
            }

            this.id = treePartObject.id;
            this.remoteId = treePartObject.remoteId;
            this.version = treePartObject.version;
            this.type = treePartObject.type;
            this.changed = treePartObject.changed;
            this.finished = treePartObject.finished;
            this.active = treePartObject.active;
            this.opened = treePartObject.opened;
            this.executedAt = treePartObject.executedAt;
            this.questInstanceId = treePartObject.questInstanceId;
            this.highlightedInvisibeMarker = treePartObject.highlightedInvisibeMarker;
            this.positionX = treePartObject.positionX;
            this.positionY = treePartObject.positionY;
            this.questName = quest.getName();

            if (treePartObject.type == TreePartType.Marker) {
                this.task = new Task(quest.getName());
                this.task.initFromObject(treePartObject.task);
            }

            for (var i = 0; i < treePartObject.successors.length; i++) {
                var successorObject = treePartObject.successors[i];
                var treePart = quest.getTreePart(successorObject.id);
                if (!treePart) {
                    treePart = new TreePart(treePartObject.type, quest.getName());
                    treePart.initFromObject(treePartObject.successors[i], quest, false);
                }

                this.successors.push(treePart);
            }
            $log.info("initFromObject_success: ", this);
        }

        function getFromRemote(quest) {
            $log.info("getFromRemote: ", this.remoteId);

            return BackendService.getTreePart(this.remoteId).then(success.bind(this), fail.bind(this));

            function success(remoteTreePart) {
                if (remoteTreePart) {

                    return this.initFromRemote(remoteTreePart, quest).then(function () {
                        this.loaded = true;
                        $log.info("getFromRemote_success: ", this.remoteId);
                        return this;
                    }.bind(this));

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

        function initFromRemote(remoteTreePart, quest) {
            $log.info("initFromRemote: ", remoteTreePart);

            this.remoteId = remoteTreePart.getId();
            this.version = remoteTreePart.getVersion();
            this.type = TreePartType[remoteTreePart.getType()];
            this.finished = remoteTreePart.getFinished();
            this.active = remoteTreePart.getActive();
            this.opened = remoteTreePart.getOpened();
            this.executedAt = remoteTreePart.getExecutedAt();
            this.questInstanceId = remoteTreePart.getQuestInstanceId();
            this.highlightedInvisibeMarker = remoteTreePart.getHighlightedInvisibeMarker();
            this.positionX = remoteTreePart.getPosition().getX();
            this.positionY = remoteTreePart.getPosition().getY();


            var promises = [];
            if (this.type == TreePartType.Marker) {
                this.task = new Task(quest.getName());
                this.task.setRemoteId(remoteTreePart.getMarker().getId());
                promises.push(this.task.getFromRemote());
            }

            var successors = remoteTreePart.getSuccessors();
            for (var i = 0; i < successors.length; i++) {
                var successorId = successors[i].getId();
                var treePart = quest.getTreePartByRemoteId(successorId);
                if (!treePart) {
                    treePart = new TreePart(successors[i].getType(), quest.getName());
                    treePart.setRemoteId(successorId);
                    promises.push(treePart.getFromRemote(quest, false));
                    if (treePart.getType() == TreePartType.Marker) {
                        QuestService.addTreePartToQuest(quest, treePart);
                    } else {
                        var treePartId = QuestService.getTreePartId();
                        treePart.setId(treePartId);
                        QuestService.setTreePartId(treePartId + 1);
                    }
                }
                this.successors.push(treePart);
            }

            return $q.all(promises).then(function () {
                $log.info("initFromRemote_success: ", this);
                return this;
            }.bind(this))
        }

        function addSuccessor(treePart) {
            this.successors.push(treePart);
        }

        function removeSuccessor(treePartId) {
            for (var i = 0; i < this.successors.length; i++) {
                if (this.successors[i].getId() == treePartId) {
                    this.successors.splice(i, 1);
                }

            }
        }

        function removeTreePart(treePartId) {
            for (var i = 0; i < this.successors.length; i++) {
                if (this.successors[i].getId() == treePartId) {
                    var deleteTreePart = this.successors[i];
                    this.successors.splice(i, 1);
                    $log.info("=================================================================");
                    $log.info("remove successor of : ", this.getTask().getName());
                    var successors = deleteTreePart.getSuccessors();
                    $log.info("removed treeParts successors : ", successors);

                    var cachedConnectors = [];
                    for (var j = 0; j < successors.length; j++) {
                        if (successors[j].getType() == TreePartType.And || successors[j].getType() == TreePartType.Or) {
                            cachedConnectors.push(successors[j]);
                        } else {
                            $log.info("Add successors to TreePart: ");
                            this.successors.push(successors[j]);
                        }
                    }

                    for(var j = 0; j < cachedConnectors.length; j++) {
                        $log.info("removed treeParts successor AND/OR: ", cachedConnectors[j]);
                        if (this.id == 0) {
                            if(!this.hasAncestor(cachedConnectors[j].getId())) {
                                var connectorSuccessors = cachedConnectors[j].getSuccessors();
                                $log.info("And/Or as no more incoming lines: ");
                                for (var k = 0; k < connectorSuccessors.length; k++) {
                                    $log.info("Add And/Or successors to Root: ");
                                    this.successors.push(connectorSuccessors[k]);
                                }
                            }

                        } else {
                            $log.info("Add And/Or successors to TreePart: ");
                            this.successors.push(cachedConnectors[j]);
                        }
                    }
                }
            }

            for (var i = 0; i < this.successors.length; i++) {
                this.successors[i].removeTreePart(treePartId);
            }
        }

        function hasSuccessor(treePartId) {
            for (var i = 0; i < this.successors.length; i++) {
                if (this.successors[i].getId() == treePartId) {
                    return true;
                }
            }
        }

        function hasAncestor(treePartId) {
            var found = false;
            for (var i = 0; i < this.successors.length; i++) {
                if (this.successors[i].getId() == treePartId) {
                    return true;
                } else {
                    if (this.successors[i].hasAncestor(treePartId)) {
                        found = true;
                    }
                }
            }
            return found;
        }

        function check(errors) {
            this.task.check(this, errors);
        }

        function change() {
            this.changed = true;
        }

        function upload() {
            if (this.uploadPromise) {
                return this.uploadPromise;
            }

            this.remoteTreePart = BackendService.createRemoteTreePart(this);

            var promises = [];

            if (this.type == TreePartType.Marker) {
                promises.push($q.when(this.task.upload()));
            }

            for (var i = 0; i < this.successors.length; i++) {
                promises.push($q.when(this.successors[i].upload()));
            }

            this.uploadPromise = $q.all(promises).then(function (results) {
                var successors = [];
                if (this.type == TreePartType.Marker) {
                    this.remoteTreePart.setMarker(results[0]);
                    successors = results.slice(1, results.length);
                } else {
                    successors = results;
                }

                this.remoteTreePart.setSuccessors(successors);
                if (this.remoteId < 1 || this.changed) {
                    $log.info("upload: ", this);
                    return BackendService.addTreePart(this.remoteTreePart).then(function (result) {
                        this.remoteId = result.getId();
                        $log.info("upload_success: ", this.remoteTreePart);
                        return result;
                    }.bind(this));
                } else {
                    return this.remoteTreePart;
                }
            }.bind(this));
            return this.uploadPromise;
        }

        function remove() {
            $log.info("remove: ", this);

            return BackendService.deleteTreePart(this.remoteId).then(function () {
                $log.info("remove_success: ", this);
                return this.task.remove();
            }.bind(this));
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function setRemoteId(value) {
            this.remoteId = value;
        }

        function getId() {
            return this.id;
        }

        function setId(value) {
            this.id = value;
        }

        function getVersion() {
            return this.version;
        }

        function getType() {
            return this.type;
        }

        function setType(value) {
            this.type = value;
        }

        function getTask() {
            return this.task;
        }

        function getSuccessors() {
            return this.successors;
        }

        function getFinished() {
            return this.finished;
        }

        function getActive() {
            return this.active;
        }

        function getOpened() {
            return this.opened;
        }

        function getQuestInstanceId() {
            return this.questInstanceId;
        }

        function getExecutedAt() {
            return this.executedAt;
        }

        function getHighlightedInvisibleMarker() {
            return this.highlightedInvisibeMarker;
        }

        function getPositionX() {
            return this.positionX;
        }

        function setPositionX(value) {
            this.positionX = value;
        }

        function getPositionY() {
            return this.positionY;
        }

        function setPositionY(value) {
            this.positionY = value;
        }
    }

})();