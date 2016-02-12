/**
 * Created by armin on 13.11.15.
 */

profile.controller("profileController", ["$scope", "$state", '$modal', "MainService", function($scope, $state, $modal, MainService) {

    $scope.newQuest = function() {
        $state.go("map");
    };





}]);