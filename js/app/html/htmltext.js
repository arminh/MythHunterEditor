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

        function HtmlText(questName, taskName) {
            this.remoteId = 0;
            this.version = -1;
            this.content = "";
            this.answers = {};

            this.loaded = false;
            this.changed = false;
            this.taskTitle = "";
            this.questTitle = questName;

        }

        HtmlText.prototype = {
            constructor: HtmlText,
            initFromObject: initFromObject,
            getFromRemote: getFromRemote,
            initFromRemote: initFromRemote,
            change: change,
            upload: upload,
            remove: remove,

            getRemoteId: getRemoteId,
            setRemoteId: setRemoteId,
            getContent: getContent,
            setContent: setContent,
            getContentHtml: getContentHtml,
            getEscapedContentHtml: getEscapedContentHtml,
            setTaskTitle: setTaskTitle,
            setQuestTitle: setQuestTitle,
            getAnswers: getAnswers,
            setAnswers: setAnswers
        };

        return (HtmlText);

        ////////////////

        function initFromObject(htmlTextObject) {
            $log.info("initFromObject: ", htmlTextObject);
            this.changed = htmlTextObject.changed;
            this.content = htmlTextObject.content;
            this.taskTitle = htmlTextObject.taskTitle;
            this.questTitle = htmlTextObject.questTitle;
            this.remoteId = htmlTextObject.remoteId;
            this.answers = htmlTextObject.answers;
            $log.info("initFromObject_success: ", this);
        }

        function getFromRemote() {
            $log.info("getFromRemote: ", this.remoteId);
            return BackendService.getHtml(this.remoteId).then(success.bind(this), fail.bind(this));

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

            function fail(error) {
                $log.info("getFromRemote_fail: ", this.remoteId);
                return $q.reject(error);
            }
        }

        function initFromRemote(remoteHtml) {
            $log.info("initFromRemote: ", remoteHtml);
            this.content = HtmlTools.retrieveContent(remoteHtml.getHtml());
            this.remoteId = remoteHtml.getId();

            var answers = remoteHtml.getAnswers();
            for (var i = 0; i < answers.length; i++) {
                this.answers[answers[i].getKey()] = answers[i].getValue();
            }
            $log.info("initFromRemote_success: ", this);
        }

        function change() {
            this.changed = true;
            AuthenticationService.getUser().backup();
        }

        function upload() {

            if (this.remoteId >= 1 && this.changed == false) {
                return this.remoteId;
            } else {
                $log.info("upload: ", this);
                return this.getEscapedContentHtml().then(uploadHtml.bind(this));
            }

            function uploadHtml(result) {
                var remoteHtml = BackendService.createRemoteHtml(this, result);

                if (this.remoteId < 1) {
                    return BackendService.addHtml(remoteHtml).then(
                        function (result) {
                            this.remoteId = result.getId();
                            $log.info("upload_success (add): ", this);
                            return this.remoteId;
                        }.bind(this),
                        function (error) {
                            $log.error("upload_error: ", this);
                            return $q.reject(error);
                        }.bind(this)
                    );
                } else {
                    return BackendService.updateHtml(remoteHtml).then(function (result) {
                        $log.info("upload_success (update): ", this);
                        return this.remoteId;
                    }.bind(this));
                }
            }
        }

        function remove() {
            $log.info("remove: ", this);
            return BackendService.deleteHtml(this.remoteId).then(function() {
                $log.info("remove_success: ", this);
                return this;
            }.bind(this));
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function setRemoteId(value) {
            this.remoteId = value;
        }

        function getContentHtml() {
            return HtmlTools.encloseContent(this.questTitle, this.taskTitle, this.content);
        }

        function getEscapedContentHtml() {
            return this.getContentHtml().then(function(result) {
                return HtmlTools.escapeContentHtml(result);
            });
        }

        function getContent() {
           return this.content;
        }

        function setContent(value) {
            this.content = value;
        }

        function setTaskTitle(value) {
            this.taskTitle = value;
        }

        function setQuestTitle(value) {
            this.questTitle = value;
        }

        function getAnswers() {
            return this.answers;
        }

        function setAnswers(value) {
            this.answers = value;
        }
    }

})();