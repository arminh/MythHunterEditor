/**
 * Created by armin on 04.02.16.
 */

(function () {
    'use strict';

    angular
        .module('html')
        .factory('HtmlText', HtmlTextFactory);

    HtmlTextFactory.$inject = ["$log", "$modal", "AuthenticationService", "BackendService", "HtmlTools"];

    /* @ngInject */
    function HtmlTextFactory($log, $modal, AuthenticationService, BackendService, HtmlTools) {
        function HtmlText() {
            this.id = 0;
            this.content = "";
            this.changed = false;
            this.answers = {};
        }

        HtmlText.prototype = {
            constructor: HtmlText,
            initFromObject: initFromObject,
            initFromRemote: initFromRemote,
            preview: preview,
            change: change,
            upload: upload
        };

        return (HtmlText);

        ////////////////

        function initFromObject(htmlTextObject) {
            this.changed = htmlTextObject.changed;
            this.content = htmlTextObject.content;
            this.id = htmlTextObject.id;
            this.answers = htmlTextObject.answers;
        }

        function initFromRemote(remoteHtml) {
            this.content = remoteHtml.getHtml();
            this.id = remoteHtml.getId();

            var answers = remoteHtml.getAnswers();
            for(var i = 0; i < answers.length; i++) {
                this.answers[answers[i].getKey()] = answers[i].getValue();
            }
        }

        function preview() {
            var modalInstance = $modal.open({
                animation: true,
                backdrop: 'static',
                size: "md",
                templateUrl: "js/app/html/htmltext-preview.tpl.html",
                controller: 'HtmlTextPreviewController',
                controllerAs: "htmlText",
                resolve: {
                    htmlContent: function () {
                        return HtmlTools.clear(this.content);
                    }.bind(this)
                }
            });

            return modalInstance.result;
        }

        function change() {
            this.changed = true;
            AuthenticationService.getUser().backup();
        }

        function upload() {
            if (this.id >= 1 && this.changed == false) {
                return this.id;
            } else {
                this.remoteHtml = BackendService.createRemoteHtml(this);

                if (this.id < 1) {
                    $log.log("Adding html: ", this.remoteHtml);
                    return BackendService.addHtml(this.remoteHtml).then(
                        function (result) {
                            this.id = result.getId();
                            $log.log("Add html success: ", this);
                            return this.id;
                        }.bind(this),
                        function (error) {
                            $log.error(error);
                        }
                    );
                } else {
                    $log.log("Updating html: ", this.remoteHtml);
                    return BackendService.updateHtml(this.remoteHtml).then(function(result) {
                        $log.log("Update html success: ", this);
                        return this.id;
                    }.bind(this));
                }
            }
        }
    }

})();