/**
 * Created by armin on 04.02.16.
 */


task.factory('HTMLText', function($q, AuthenticationService, BackendService) {

    var backend = new backend_com_wsdl_IBackend();
    backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

    function HTMLText() {
        this.id = -1;
        this.content = "";
        this.changed = false;
    }

    HTMLText.prototype = {
        constructor: HTMLText,
        initFromObject: initFromObject,
        initFromRemote: initFromRemote,
        change: change,
        upload: upload
    };


    function initFromObject(htmlTextObject) {
        this.changed = htmlTextObject.changed;
        this.content = htmlTextObject.content;
        this.id = htmlTextObject.id;
    }

        function initFromRemote(remoteHtml) {
        this.content = remoteHtml.getHtml();
        this.id = remoteHtml.getId();
    }

    function change() {
        console.log("Html changed");
        this.changed = true;
        AuthenticationService.getUser().backup();
    }

    function upload() {
        var deferred = $q.defer();

        if(this.id != -1 && this.changed == false) {
            deferred.resolve(this.id);
        } else {
            this.remoteHtml = BackendService.createRemoteHtml(this);

            if(this.id == -1) {
                console.log(this.remoteHtml);
                BackendService.addHtml(this.remoteHtml).then(function(result) {
                    this.id = result.getId();
                    deferred.resolve(this.id)
                }.bind(this));
            } else {
                BackendService.updateHtml(this.remoteHtml);
                deferred.resolve(this.id);
            }
        }

        return deferred.promise;
    }

    return (HTMLText);
});