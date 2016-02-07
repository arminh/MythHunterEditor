/**
 * Created by armin on 13.11.15.
 */

profile.controller("profileController", ["$scope", "$state", "MainService", function($scope, $state, MainService) {

    $scope.newQuest = function() {
        var user = MainService.getUser();
        user.createQuest();
        console.log(user);
        $state.go("map");
    };

}]);