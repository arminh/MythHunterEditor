/**
 * Created by armin on 19.01.16.
 */

map.controller("createMarkerController", ["$scope", "ngDialog", function($scope, ngDialog) {
    $scope.close = function() {
        ngDialog.close();
    };
}]);