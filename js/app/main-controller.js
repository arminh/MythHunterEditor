/**
 * Created by Armin on 18.04.2014.
 */



app.controller("mainController", function ($scope, $state, AuthenticationService) {
    $scope.logout = function() {
        AuthenticationService.logout();
        $state.go("app.login");
    };

    $scope.login = function() {
        $state.go("app.login");
    }
});
