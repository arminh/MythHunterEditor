/**
 * Created by armin on 04.02.16.
 */

(function () {
    'use strict';

    angular
        .module('html')
        .factory('HtmlText', HtmlTextFactory);

    HtmlTextFactory.$inject = ["$log", "$q", "AuthenticationService", "BackendService", "HtmlTools"];

    /* @ngInject */
    function HtmlTextFactory($log, $q, AuthenticationService, BackendService, HtmlTools) {

        $log = $log.getInstance("HtmlText", debugging);

        function HtmlText() {
            this.loaded = false;
            this.remoteId = 0;
            this.content = "";
            this.changed = false;
            this.answers = {};
        }

        HtmlText.prototype = {
            constructor: HtmlText,
            initFromObject: initFromObject,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            changeTaskTitleInContent: changeTaskTitleInContent,
            changeQuestTitleInContent: changeQuestTitleInContent,
            change: change,
            upload: upload,

            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getContent: getContent,
            setContent: setContent,
            getClearedContent: getClearedContent,
            getAnswers: getAnswers,
            setAnswers: setAnswers
        };

        return (HtmlText);

        ////////////////

        function initFromObject(htmlTextObject) {
            $log.info("initFromObject: ", htmlTextObject);
            this.changed = htmlTextObject.changed;
            this.content = htmlTextObject.content;
            this.remoteId = htmlTextObject.remoteId;
            this.answers = htmlTextObject.answers;
            $log.info("initFromObject_success: ", this);
        }

        function getFromRemote() {
            $log.info("getFromRemote: ", this.remoteId);
            return BackendService.getHtml(this.remoteId).then(success.bind(this));

            function success(remoteHtml) {
                if (remoteHtml) {
                    $log.info("getFromRemote_success: ", this.remoteId);
                    this.initFromRemote(remoteHtml);
                    this.loaded = true;
                    return this;
                } else {
                    $log.info("getFromRemote_fail: ", this.remoteId);
                    return $q.reject();
                }

            }
        }

        function initFromRemote(remoteHtml) {
            $log.info("initFromRemote: ", remoteHtml);
            this.content = remoteHtml.getHtml();
            this.remoteId = remoteHtml.getId();

            var answers = remoteHtml.getAnswers();
            for (var i = 0; i < answers.length; i++) {
                this.answers[answers[i].getKey()] = answers[i].getValue();
            }
            $log.info("initFromRemote_success: ", this);
        }

        function changeTaskTitleInContent(taskTitle) {
            var content = HtmlTools.retrieveContent(this.content);
            var questTitle = HtmlTools.retrieveQuestTitle(this.content);

            HtmlTools.encloseContent(questTitle, taskTitle, content).then(function(result) {
                this.content = result;
                this.change();
            }.bind(this));
        }

        function changeQuestTitleInContent(questTitle) {
            var content = HtmlTools.retrieveContent(this.content);
            var taskTitle = HtmlTools.retrieveTaskTitle(this.content);

            HtmlTools.encloseContent(questTitle, taskTitle, content).then(function(result) {
                this.content = result;
                this.change();
            }.bind(this));
        }

        function change() {
            this.changed = true;
            AuthenticationService.getUser().backup();
        }

        function upload() {
            $log.info("upload: ", this);
            var deffered = $q.defer();

            if (this.remoteId >= 1 && this.changed == false) {
                deffered.resolve(this.remoteId);
            } else {
                this.remoteHtml = BackendService.createRemoteHtml(this);

                if (this.remoteId < 1) {
                    BackendService.addHtml(this.remoteHtml).then(
                        function (result) {
                            this.remoteId = result.getId();
                            $log.info("upload_success (add): ", this);
                            deffered.resolve(this.remoteId);
                        }.bind(this),
                        function (error) {
                            $log.error("upload_error: ", this);
                            deffered.reject(error);
                        }.bind(this)
                    );
                } else {
                    BackendService.updateHtml(this.remoteHtml).then(function (result) {
                        $log.info("upload_success (update): ", this);
                        deffered.resolve(this.remoteId);
                    }.bind(this));
                }
            }

            return deffered.promise;
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function setRemoteId(value) {
            this.remoteId = value;
        }

        function getContent() {
           return this.content;
        }

        function setContent(value) {
            this.content = value;
        }

        function getClearedContent() {
            return HtmlTools.clear(this.content);
        }

        function getAnswers() {
            return this.answers;
        }

        function setAnswers(value) {
            this.answers = value;
        }
    }

})();