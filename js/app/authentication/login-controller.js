/**
 * Created by armin on 18.02.16.
 */

app.controller("loginController", function($scope, $state, AuthenticationService, User) {

    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
        AuthenticationService.login($scope.username, $scope.password).then(function(result) {
            var user = new User();
            user.initFromRemote(result);
            AuthenticationService.setUser(user);
            $state.go("app.profile");
        });
    };

});