/**
 * Created by armin on 04.02.16.
 */


angular
    .module("html")
    .factory('HTMLText', function ($q, $modal, $compile, AuthenticationService, BackendService, HtmlTools) {

        var backend = new backend_com_wsdl_IBackend();
        backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

        function HTMLText() {
            this.id = 0;
            this.content = "";
            this.changed = false;
            this.answers = {};
        }

        HTMLText.prototype = {
            constructor: HTMLText,
            initFromObject: initFromObject,
            initFromRemote: initFromRemote,
            preview: preview,
            change: change,
            upload: upload
        };

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
            console.log("Html changed");
            this.changed = true;
            AuthenticationService.getUser().backup();
        }

        function upload() {
            var deferred = $q.defer();

            if (this.id >= 1 && this.changed == false) {
                deferred.resolve(this.id);
            } else {
                this.remoteHtml = BackendService.createRemoteHtml(this);

                if (this.id < 1) {
                    console.log(this.remoteHtml);
                    BackendService.addHtml(this.remoteHtml).then(function (result) {
                        this.id = result.getId();
                        deferred.resolve(this.id)
                    }.bind(this));
                } else {
                    BackendService.updateHtml(this.remoteHtml).then(function(result) {
                        deferred.resolve(this.id);
                    }.bind(this));
                }
            }

            return deferred.promise;
        }

        return (HTMLText);
    });