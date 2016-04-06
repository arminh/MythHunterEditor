/**
 * Created by armin on 28.02.16.
 */

task.factory("TreePart", function ($log, $q, BackendService, TreePartType) {

    $log = $log.getInstance("TreePart", debugging);

    function TreePart(task) {
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

    function initFromObject(treePartObject, quest, isRoot) {
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
    }

    function initFromRemote(remoteTreePart, quest, isRoot) {

        if (!isRoot) {
            quest.addTreePart(this);
        }

        this.remoteId = remoteTreePart.getId();
        this.version = remoteTreePart.getVersion();
        this.type = TreePartType[remoteTreePart.getType()];
        this.task = quest.getTaskByRemoteId(remoteTreePart.getMarker().getId());

        var successors = remoteTreePart.getSuccessors();
        for (var i = 0; i < successors.length; i++) {
            var treePart = new TreePart(null);
            this.successors.push(treePart.initFromRemote(successors[i], quest, false));
        }

        $log.log("Restored remote treePart: ", this);
        return this;
    }

    function change() {
        this.changed = true;
    }

    function upload() {
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
                    deferred.resolve(result);
                }.bind(this));
            } else{
                deferred.resolve(this.remoteTreePart);
            }

        }.bind(this));

        return deferred.promise;
    }

    function remove() {
        BackendService.deleteTreePart(this.remoteId).then(function () {
            this.task.remove();
        }.bind(this));
    }

    return (TreePart);
});