/**
 * Created by armin on 02.02.16.
 */

var backend = new backend_com_wsdl_IBackend();
backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";

app.factory('backendService', function($q) {

    return {

    };
});
