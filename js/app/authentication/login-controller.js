/**
 * Created by armin on 18.02.16.
 */

app.controller("loginController", function($scope, $state, AuthenticationService, User) {

    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
        var passwordHash = CryptoJS.SHA256($scope.password);
        AuthenticationService.login($scope.username, passwordHash).then(function(result) {
            var user = new User();
            user.initFromRemote(result).then(function() {
                AuthenticationService.setUser(user);
                console.log(user);
                $state.go("app.profile");
            });
        });
    };

});