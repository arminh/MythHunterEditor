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

    HTMLText.prototype.initFromObject = function(htmlTextObject) {
        this.changed = htmlTextObject.changed;
        this.content = htmlTextObject.content;
        this.id = htmlTextObject.id;
    };

    HTMLText.prototype.initFromRemote = function(remoteHtml) {
        this.content = remoteHtml.getHtml();
        this.id = remoteHtml.getId();
    };

    HTMLText.prototype.change = function() {
        console.log("Html changed");
        this.changed = true;
        AuthenticationService.getUser().backup();
    };

    HTMLText.prototype.upload = function() {
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
                //backend.updateHtml(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, remoteHtml);
            }
        }

        return deferred.promise;
    };

    return (HTMLText);
});