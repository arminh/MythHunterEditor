/**
 * Created by Armin on 18.04.2014.
 */

app.controller("MainController",['$scope','$state', '$soap', function ($scope, $state, $soap) {

	var backend = new backend_com_wsdl_IBackend();
	backend.url = "http://localhost:8080/Backend/webservices/Backend";
	//backend.fillDB(function() { console.log("success"); }, function() { console.log("fail"); });
	backend.getUser(function() { console.log("success"); }, function() { console.log("fail"); }, "1");
}]);
