/**
 * Created by armin on 13.11.15.
 */

profile.controller("profileController", ["$scope", "$state", function($scope, $state) {

    $scope.newQuest = function() {
        $state.go("map");
    };

}]);