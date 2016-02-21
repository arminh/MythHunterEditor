/**
 * Created by armin on 18.02.16.
 */

app.controller("registerController", function($scope, $state,  AuthenticationService) {

    $scope.forename = "";
    $scope.surename = "";
    $scope.username = "";
    $scope.password = "";

    $scope.register = function() {
        AuthenticationService.register($scope.username, $scope.password).then(function(result) {
            if(result != null) {
                $state.go("login");
            } else {
                alert("error");
            }

        }, function(error) {
            alert("error");
        });
    }
});