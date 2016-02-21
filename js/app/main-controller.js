/**
 * Created by Armin on 18.04.2014.
 */



app.controller("mainController",['$scope','$state', 'MainService', function ($scope, $state, MainService) {

    $scope.login = function() {
        $state.go("login");
    }
}]);
