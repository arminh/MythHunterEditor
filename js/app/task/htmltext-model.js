/**
 * Created by armin on 04.02.16.
 */


task.factory('HTMLText', function($q, AuthenticationService) {

    var backend = new backend_com_wsdl_IBackend();
    backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

    function HTMLText() {
        this.id = -1;
        this.content = "";
        this.changed = false;
    }

    HTMLText.prototype.upload = function() {
        var deferred = $q.defer();

        this.remoteHtml = new backend_com_wsdl_htmlObject();
        this.remoteHtml.setHtml(this.content);

        if(this.id == -1) {
            console.log(this.remoteHtml);
            backend.addHtml(
                function(result) {
                    this.id = result.getReturn().getId();
                    deferred.resolve(this.id)
                }.bind(this),
                function(error) { deferred.reject(error) },
                this.remoteHtml);
        } else {
            //backend.updateHtml(function(result) { deferred.resolve(result) }, function(error) { deferred.reject(error) }, remoteHtml);
        }

        return deferred.promise;
    };

    HTMLText.prototype.initFromObject = function(htmlTextObject) {
        this.changed = htmlTextObject.changed;
        this.content = htmlTextObject.content;
        this.id = htmlTextObject.id;
    };

    HTMLText.prototype.change = function() {
        console.log("Html changed");
        this.changed = true;
        AuthenticationService.getUser().backup();
    };

    return (HTMLText);
});