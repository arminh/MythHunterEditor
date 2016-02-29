/**
 * Created by Armin on 18.04.2014.
 */

'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngMaterial',
    'ngCookies',
    'ngStorage',
    'ngCookies',
    'ui.router',
    'ui.bootstrap',
    'ui.sortable',
    'ngDialog',
    'ngDragDrop',
    'textAngular',
    'profile',
    'quest',
    'task',
    'map'

]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/profile');
    $stateProvider
        .state('app', {
            url: '',
            controller: 'mainController',
            templateUrl: 'js/app/main.tpl.html',
            abstract: true,
            resolve: {

            }
        });
    $stateProvider
        .state('app.profile', {
            url: '/profile',
            controller: 'profileController',
            templateUrl: 'js/app/profile/profile.tpl.html',
            resolve: {
                user: ['AuthenticationService', function(AuthenticationService) {
                    return AuthenticationService.userPromise;
                }]
            }
        });
    $stateProvider
        .state('app.login', {
            url: '/login',
            controller: 'loginController',
            templateUrl: 'js/app/authentication/login.tpl.html'
        });
    $stateProvider
        .state('app.register', {
            url: '/register',
            controller: 'registerController',
            templateUrl: 'js/app/authentication/register.tpl.html'
        });
    $stateProvider
        .state('app.map', {
            url: '/quest',
            controller: 'mapController',
            templateUrl: 'js/app/map/map.tpl.html',
            resolve: {
                user: ['AuthenticationService', function(AuthenticationService) {
                    return AuthenticationService.userPromise;
                }]
            }
        });
});

app.run(function ($rootScope, $q, $location, $cookies, AuthenticationService, User) {
    var credentials = $cookies.getObject("credentials");
    AuthenticationService.setCredentials(credentials);

    $rootScope.$on('$locationChangeStart', function (event) {
        var user = AuthenticationService.getUser();
        var credentials = AuthenticationService.getCredentials();

        var path = $location.path();

        if(!user && credentials) {
            AuthenticationService.login(credentials.username, credentials.password).then(function(remoteUser) {
                var user = new User();
                user.initFromRemote(remoteUser).then(function(result) {
                    AuthenticationService.setUser(result);
                    console.log(result);
                    testAccess(result, path);
                });

            }, function(error) {
                alert("Error loging in " + credentials.username);
                $location.path('/login');
            });
        } else {
            testAccess(user, path);
        }

        function testAccess(user, path) {
            if (path == "/login" || path == "/register") {
                if(user) {
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
    });
});


app.constant("MarkerType", {
    FIGHT: "FIGHT",
    QUIZ: "QUIZ",
    INFO: "INFO"
});

app.constant("TreePartType", {
    Marker: "Marker",
    And: "And",
    Or: "Or"
});

app.constant('DefaultConfig', {
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
});