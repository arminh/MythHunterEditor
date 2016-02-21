/**
 * Created by armin on 18.02.16.
 */

app.controller("loginController", function($scope, $state, AuthenticationService) {

    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
        AuthenticationService.login($scope.username, $scope.password).then(function(result) {
            $state.go("profile");
        });
    };

});