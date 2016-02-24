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
            abstract: true
        });
    $stateProvider
        .state('app.profile', {
            url: '/profile',
            controller: 'profileController',
            templateUrl: 'js/app/profile/profile.tpl.html'
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
            templateUrl: 'js/app/map/map.tpl.html'
        });
});

app.run(function ($rootScope, $q, $location, $cookies, AuthenticationService, User) {
    var credentials = $cookies.getObject("credentials");
    AuthenticationService.setCredentials(credentials);

    $rootScope.$on('$locationChangeStart', function () {
        var user = AuthenticationService.getUser();
        var credentials = AuthenticationService.getCredentials();

        if(!user && credentials) {
            AuthenticationService.login(credentials.username, credentials.password).then(function(result) {
                var user = new User();
                user.initFromRemote(result);
                AuthenticationService.setUser(user);
                testAccess(user);
            });
        } else {
            testAccess(user);
        }

        function testAccess(user) {
            var restricted = false;
            if ($location.path() != "/login" && $location.path() != "/register") {
                restricted = true;
            }

            if (restricted && !user) {
                $location.path('/login');
            }
        }
    });
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