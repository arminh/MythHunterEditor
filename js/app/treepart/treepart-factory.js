/**
 * Created by armin on 28.02.16.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .factory('TreePart', TreePartFactory);

    TreePartFactory.$inject = ["$log", "$q", "BackendService", "TreePartType"];

    /* @ngInject */
    function TreePartFactory($log, $q, BackendService, TreePartType) {
        $log = $log.getInstance("TreePart", debugging);

        function TreePart(task) {
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
            initFromRemote: initFromRemote,
            change: change,
            upload: upload,
            remove: remove
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

            for (var i = 0; i < treePartObject.successors.length; i++) {
                var task = quest.getTaskById(treePartObject.successors[i].task.id);
                var treePart = new TreePart(task);
                treePart.initFromObject(treePartObject.successors[i], quest, false);
                this.successors.push(treePart);
            }
            $log.info("initFromObject_success: ", this);
        }

        function initFromRemote(remoteTreePart, tasks, quest, isRoot) {
            $log.info("initFromRemote: ", remoteTreePart);

            if (!isRoot) {
                quest.addTreePart(this);
            }

            this.remoteId = remoteTreePart.getId();
            this.version = remoteTreePart.getVersion();
            this.type = TreePartType[remoteTreePart.getType()];
            this.task = angular.isArray(tasks) ? tasks[0] : tasks;

            var successors = remoteTreePart.getSuccessors();
            for (var i = 0; i < successors.length; i++) {
                var treePart = new TreePart(null);
                tasks.shift();
                this.successors.push(treePart.initFromRemote(successors[i], tasks, quest, false));
            }

            $log.info("initFromRemote_success: ", this);
            return this;
        }

        function change() {
            this.changed = true;
        }

        function upload() {
            $log.info("upload: ", this);

            var deferred = $q.defer();

            this.remoteTreePart = BackendService.createRemoteTreePart(this);

            var promises = [];
            for (var i = 0; i < this.successors.length; i++) {
                promises.push(this.successors[i].upload());
            }

            $q.all(promises).then(function (results) {
                this.remoteTreePart.setSuccessors(results);
                if (this.remoteId < 1 || this.changed) {
                    BackendService.addTreePart(this.remoteTreePart).then(function (result) {
                        this.remoteId = result.getId();
                        $log.log("upload_success: ", this.remoteTreePart);
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
            BackendService.deleteTreePart(this.remoteId).then(function () {
                $log.info("remove_success: ", this);
                this.task.remove();
            }.bind(this));
        }
    }

})();