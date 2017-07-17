/**
 * Created by armin on 04.02.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('Quest', QuestFactory);

    QuestFactory.$inject = ["$log", "$q", "AuthenticationService", "BackendService", "HtmlText",  "TreePart", "TreePartType", "DifficultyLevel", "SubmitErrors"];

    /* @ngInject */
    function QuestFactory($log, $q, AuthenticationService, BackendService, HtmlText, TreePart, TreePartType, DifficultyLevel, SubmitErrors) {

        $log = $log.getInstance("Quest", debugging);
        function Quest(creatorId) {
            this.remoteId = 0;
            this.version = null;
            this.name = "";
            this.description = "";
            this.diffulty = DifficultyLevel.LOW;
            this.qualityRating = 0;
            this.difficultyRating = 0;
            this.html = null;
            this.creatorId = creatorId;
            this.approved = true;
            this.submitted = false;
            this.specialCards = [];

            this.loaded = false;
            this.editing = false;
            this.complex = false;
            this.treeParts = [];
            this.treePartRoot = null;
            this.treePartsToDelete = [];
        }

        Quest.prototype = {
            constructor: Quest,
            init: init,
            initFromObject: initFromObject,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            load: load,
            change: change,
            checkComplexity: checkComplexity,
            createTreePartMarker: createTreePartMarker,
            createTreePartConnector: createTreePartConnector,
            addTreePart: addTreePart,
            addTreePartToTree: addTreePartToTree,
            deleteTreePart: deleteTreePart,
            getTreePart: getTreePart,
            getTreePartByRemoteId: getTreePartByRemoteId,
            rewireTree: rewireTree,
            check: check,
            upload: upload,
            remove: remove,


            addReward: addReward,
            getRewards: getRewards,
            clearRewards: clearRewards,
            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getVersion: getVersion,
            getCreatorId: getCreatorId,
            getName: getName,
            setName: setName,
            getDescription: getDescription,
            getHtml: getHtml,
            getTreePartRoot: getTreePartRoot,
            setTreePartRoot: setTreePartRoot,
            getTreeParts: getTreeParts,
            setTreeParts: setTreeParts,
            getSubmitted: getSubmitted,
            setSubmitted: setSubmitted,
            getApproved: getApproved,
            getLoaded: getLoaded,
            setLoaded: setLoaded,
            getSpecialCards: getSpecialCards,
            getDifficulty: getDifficulty,
            getDifficultyRating: getDifficultyRating,
            getQualityRating: getQualityRating,
            getComplex: getComplex,
            setComplex: setComplex,
            getEditing: getEditing,
            setEditing: setEditing
        };

        return (Quest);

        ////////////////

        function init(name) {
            this.name = name;
            this.html = new HtmlText(name, "");
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
            this.complex = questObject.complex;

            this.specialCards = questObject.specialCards;
            this.diffulty = questObject.diffulty;
            this.qualityRating = questObject.qualityRating;
            this.difficultyRating = questObject.difficultyRating;

            this.html = new HtmlText(questObject.name, "");
            this.html.initFromObject(questObject.html);

            if(questObject.treePartRoot) {
                this.treePartRoot = new TreePart(TreePartType.Marker, this.name);
                this.treePartRoot.initFromObject(questObject.treePartRoot, this, true);
            }

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
            this.difficultyRating = remoteQuest.getDifficultyRating();

            this.html = new HtmlText(remoteQuest.getName(), "");
            this.html.setRemoteId(remoteQuest.getHtmlId());

            this.treePartRoot = new TreePart(TreePartType.Marker, this.name);
            this.treePartRoot.setRemoteId(remoteQuest.getTreeRootId());

            $log.info("initFromRemote_success: ", this);
            return this;
        }

        function load() {
            $log.info("load: ", this);
            BackendService.abortCardRequests();

            var promises = [];
            promises.push(this.html.getFromRemote());
            promises.push(this.treePartRoot.getFromRemote(this));

            return $q.all(promises).then(function () {
                this.treePartRoot.getTask().setType("start");
                this.loaded = true;
                this.checkComplexity();
                AuthenticationService.getUser().backup();

                $log.info("load_success: ", this);
                return this;
            }.bind(this));
        }

        function checkComplexity() {
            for(var i = 0; i < this.treeParts.length; i++) {
                var successors = this.treeParts[i].getSuccessors();
                if(successors.length > 1) {
                    this.complex = true;
                }
                for(var j = 0; j < successors.length; j++) {
                    if(successors[j].getType() == TreePartType.And || successors[j].getType() == TreePartType.Or ) {
                        this.complex = true;
                    }
                }

            }
        }

        function createTreePartMarker(markerType) {
            var treePart = new TreePart(TreePartType.Marker, this.name);
            treePart.initTask(markerType);
            return treePart;
        }

        function createTreePartConnector(type) {
            var treePart = new TreePart(type, this.name);
            return treePart;
        }

        function addTreePart(treePart) {
            this.treeParts.push(treePart);
        }

        function addTreePartToTree(treePart) {
            $log.info("addTreePartToTree: ", treePart);
            if (this.treeParts.length == 0) {
                this.treePartRoot.addSuccessor(treePart);
                this.treePartRoot.change();
            } else {
                this.treeParts[this.treeParts.length - 1].addSuccessor(treePart);
                this.treeParts[this.treeParts.length - 1].change();
            }
            this.change();
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

            // this.rewireTree(this.treePartRoot, treePart.getId());
            this.treePartRoot.removeTreePart(treePart.getId());
            $log.info("deleteTreePart_success: ", this.treeParts);

            this.change();
        }

        function getTreePart(treePartId) {
            var treePart = null;
            for (var i = 0; i < this.treeParts.length; i++) {
                if (this.treeParts[i].id == treePartId) {
                    treePart = this.treeParts[i];
                }
            }
            return treePart;
        }

        function getTreePartByRemoteId(treePartRemoteId) {
            var treePart = null;
            for (var i = 0; i < this.treeParts.length; i++) {
                if (this.treeParts[i].remoteId == treePartRemoteId) {
                    treePart = this.treeParts[i];
                }
            }
            return treePart;
        }

        function change() {
            this.changed = true;
            AuthenticationService.getUser().backup();
        }

        function check() {
            var errors = new SubmitErrors();

            this.treePartRoot.check(errors);
            for (var i = 0; i < this.treeParts.length; i++) {
                this.treeParts[i].check(errors);
            }

            return errors;
        }

        function upload() {

            BackendService.abortCardRequests();
            var promises = [];

            promises.push($q.when(this.html.upload()));
            promises.push(this.treePartRoot.upload());

            if (this.remoteId < 1 || this.changed) {
                // $log.info("upload: ", this);
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

            if (!this.loaded) {
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

        function addReward(cardId) {
            this.specialCards.push(cardId);
        }

        function getRewards() {
            return this.specialCards;
        }

        function clearRewards() {
            this.specialCards = [];
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function setRemoteId(value) {
            this.remoteId = value;
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

        function setName(value) {
            this.name = value;
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

        function setTreePartRoot(value) {
            this.treePartRoot = value;
        }

        function getTreeParts() {
            return this.treeParts;
        }

        function setTreeParts(value) {
            this.treeParts = value;
        }

        function getSubmitted() {
            return this.submitted;
        }

        function setSubmitted(value) {
            this.submitted = value;
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

        function getComplex() {
            return this.complex;
        }

        function setComplex(value) {
            this.complex = value;
        }

        function getEditing() {
            return this.editing;
        }

        function setEditing(value) {
            this.editing = value;
        }
    }

})();
