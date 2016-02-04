/**
 * Created by armin on 04.02.16.
 */


task.factory('HTMLText', function($q) {

    var backend = new backend_com_wsdl_IBackend();
    backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

    function HTMLText(content) {
        this.id = -1;
        this.content = content;
        this.changed = false;
    }

    HTMLText.prototype.upload = function() {
        var deferred = $q.defer();

        this.remoteHtml = new backend_com_wsdl_htmlObject();
        this.remoteHtml.setHtml(this.content);

        if(this.id == -1) {
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

    return (HTMLText);
});