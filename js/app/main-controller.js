/**
 * Created by Armin on 18.04.2014.
 */

app.controller("MainController",['$scope','$state', '$soap', function ($scope, $state, $soap) {

	
	 // Get a sessionid
     	var backend = new backend_com_wsdl_IBackend();
	backend.url = "http://localhost:8080/Backend/webservices/Backend";
	//backend.fillDB(function() { console.log("success"); }, function() { console.log("fail"); });
	backend.getUser(function() { console.log("success"); }, function() { console.log("fail"); }, "1");


	//backend_com_wsdl_fillDB_op(function() { console.log("success"); }, function() { console.log("fail"); });

       //var base_url = "http://localhost:8080/Backend/webservices/Backend";


	/*$soap.post(base_url,"fillDB").then(function(response){
		$scope.response = response;
		console.log(response);
	});*/

	/*$soap.post(base_url,"getUser", {arg0: "1"}).then(function(response){
		$scope.response = response;
		console.log(response);
	});

	IBackend.fillDB(function(response) { console.log("success"); }, function(response) { console.log("success"); });*/

    
}]);
