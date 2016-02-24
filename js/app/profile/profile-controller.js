/**
 * Created by armin on 13.11.15.
 */

profile.controller("profileController", function($scope, $state, AuthenticationService) {

    $scope.newQuest = function() {
        var user = AuthenticationService.getUser();
        user.currentQuest = null;
        $state.go("app.map");
    };
});