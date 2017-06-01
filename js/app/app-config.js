/**
 * Created by armin on 06.04.16.
 */

var debugging = true;

(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(run)
        .constant('DefaultConfig', {
            // Default for Maps
            defaultZoom: 15,
            defaultPosition: {
                coords: {
                    longitude: 12.4830619,
                    latitude: 41.8932575
                }
            },
            // Default for Geolocation
            defaultEnableHighAccuracy: true,
            defaultTimeout: 8000, // 8 seconds
            defaultMaximumAge: 0 // 0 seconds, no-cache
        })
        .constant('MAX_STARS', 10)
        .constant('MAX_CARD_IN_DECK', 2)
        .constant('MIN_DECK_CARDS', 20)
        .constant('MAX_DECK_CARDS', 30);

    ////////////////

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/profile');
        $stateProvider
            .state('app', {
                url: '',
                controller: 'MainController',
                controllerAs: "main",
                templateUrl: 'js/app/main.tpl.html',
                abstract: true,
                resolve: {}
            });
    }

    run.$inject = ["$rootScope", "$location", "$cookies", "$modalStack", "AuthenticationService", "User"];

    function run($rootScope, $location, $cookies, $modalStack, AuthenticationService, User) {
        var credentials = $cookies.getObject("credentials");
        AuthenticationService.setCredentials(credentials);

        $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);
        $rootScope.$on('$locationChangeStart', locationChangeStart);

        function locationChangeSuccess() {
            var path = $location.path();

            if (path != "/quest") {
                $modalStack.dismissAll();
            }
        }

        function locationChangeStart() {
            var user = AuthenticationService.getUser();
            var credentials = AuthenticationService.getCredentials();

            var path = $location.path();

            if (!user && credentials) {
                AuthenticationService.login(credentials.username, credentials.password).then(loginSuccess, loginFail);
            } else {
                testAccess(user, path);
            }

            function loginSuccess(remoteUser) {
                var user = new User();
                user.initFromRemote(remoteUser).then(function (result) {
                    AuthenticationService.setUser(result);
                    testAccess(result, path);
                });
            }

            function loginFail() {
                alert("Error loging in " + credentials.username);
                $location.path('/login');
            }
        }

        function testAccess(user, path) {
            if (path == "/login" || path == "/register") {
                if (user) {
                    $location.path('/profile');
                }
            } else {
                if (!user) {
                    $location.path('/login');
                } else {
                    $location.path(path);
                }
            }
        }
    }

})();