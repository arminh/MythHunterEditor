/**
 * Created by Armin on 18.04.2014.
 */

app.controller("MainController",['$scope','$state', '$soap', function ($scope, $state, $soap) {

	var base_url = "http://localhost:8080/Backend/webservices/Backend";

	$soap.post(base_url,"fillDB").then(function(response){
		$scope.response = response;
		console.log(response);
	});
    
}]);
