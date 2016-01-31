/**
 * Created by Armin on 18.04.2014.
 */

app.controller("MainController",['$scope','$state', function ($scope, $state) {
	var backend = new backend_com_wsdl_IBackend();
	backend.url = "http://192.168.178.67:8080/Backend/webservices/Backend?wsdl";
	backend.addPlayer(function() { console.log("success"); }, function() { console.log("fail"); }, new backend_com_wsdl_player());
}]);
