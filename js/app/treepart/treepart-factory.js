/**
 * Created by armin on 28.02.16.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .factory('TreePart', TreePartFactory);

    TreePartFactory.$inject = ["$log", "$q", "BackendService", "TreePartType", "Task"];

    /* @ngInject */
    function TreePartFactory($log, $q, BackendService, TreePartType, Task) {
        $log = $log.getInstance("TreePart", debugging);

        function TreePart(task) {
            this.loaded = false;
            this.id = 0;
            this.remoteId = 0;
            this.version = 0;
            this.type = null;
            this.changed = false;
            this.task = task;
            this.successors = [];
        }

        TreePart.prototype = {
            constructor: TreePart,
            initFromObject: initFromObject,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            addSuccessor: addSuccessor,
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
            getSuccessors: getSuccessors
        };

        return (TreePart);

        ////////////////

        function initFromObject(treePartObject, quest, isRoot) {
            $log.info("initFromObject: ", treePartObject);

            if (!isRoot) {
                quest.addTreePart(this);
            }

            this.remoteId = treePartObject.remoteId;
            this.version = treePartObject.version;
            this.type = treePartObject.type;
            this.changed = treePartObject.changed;

            this.task = new Task(quest.getName());
            this.task.initFromObject(treePartObject.task);

            for (var i = 0; i < treePartObject.successors.length; i++) {
                var treePart = new TreePart(null);
                treePart.initFromObject(treePartObject.successors[i], quest, false);
                this.successors.push(treePart);
            }
            $log.info("initFromObject_success: ", this);
        }

        function getFromRemote(quest, isRoot) {
            $log.info("getFromRemote: ", this.remoteId);

            return BackendService.getTreePart(this.remoteId).then(success.bind(this), fail.bind(this));

            function success(remoteTreePart) {
                if(remoteTreePart) {

                    return this.initFromRemote(remoteTreePart, quest, isRoot).then(function() {
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

        function initFromRemote(remoteTreePart, quest, isRoot) {
            $log.info("initFromRemote: ", remoteTreePart);

            if (!isRoot) {
                quest.addTreePart(this);
            }

            this.remoteId = remoteTreePart.getId();
            this.version = remoteTreePart.getVersion();
            this.type = TreePartType[remoteTreePart.getType()];

            this.task = new Task();
            this.task.setRemoteId(remoteTreePart.getMarker().getId());
            this.task.setQuestName(quest.getName());

            var promises = [];
            promises.push(this.task.getFromRemote());

            var successors = remoteTreePart.getSuccessors();
            for (var i = 0; i < successors.length; i++) {
                var treePart = new TreePart(null);
                this.successors.push(treePart);
                treePart.setRemoteId(successors[i].getId());
                promises.push(treePart.getFromRemote(quest, false));
            }

            return $q.all(promises).then(function() {
                $log.info("initFromRemote_success: ", this);
                return this;
            }.bind(this))
        }

        function addSuccessor(treePart) {
            this.successors.push(treePart);
        }

        function change() {
            this.changed = true;
        }

        function upload() {
            $log.info("upload: ", this);

            var deferred = $q.defer();

            this.remoteTreePart = BackendService.createRemoteTreePart(this);

            var promises = [];

            promises.push(this.task.upload());

            for (var i = 0; i < this.successors.length; i++) {
                promises.push(this.successors[i].upload());
            }

            $q.all(promises).then(function (results) {
                this.remoteTreePart.setMarker(results[0]);
                this.remoteTreePart.setSuccessors(results.slice(1, results.length));
                if (this.remoteId < 1 || this.changed) {
                    BackendService.addTreePart(this.remoteTreePart).then(function (result) {
                        this.remoteId = result.getId();
                        $log.info("upload_success: ", this.remoteTreePart);
                        deferred.resolve(result);
                    }.bind(this));
                } else{
                    deferred.resolve(this.remoteTreePart);
                }

            }.bind(this));

            return deferred.promise;
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
    }

})();