/**
 * Created by Armin on 18.04.2014.
 */

'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngMaterial',
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
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'mainController',
            templateUrl: 'js/app/main.tpl.html'
        });
    $stateProvider
        .state('profile', {
            url: '/profile',
            controller: 'profileController',
            templateUrl: 'js/app/profile/profile.tpl.html'
        });
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'loginController',
            templateUrl: 'js/app/authentication/login.tpl.html'
        });
    $stateProvider
        .state('register', {
            url: '/register',
            controller: 'registerController',
            templateUrl: 'js/app/authentication/register.tpl.html'
        });
    $stateProvider
        .state('map', {
            url: '/quest',
            controller: 'mapController',
            templateUrl: 'js/app/map/map.tpl.html'
        });
});

app.run(function ($rootScope, $location, $cookies, AuthenticationService) {
    var user = $cookies.getObject("user");
    if(user) {
        user = AuthenticationService.initUser(user);
    }

    if (user) {
        //TODO: set http header
    }

    $rootScope.$on('$locationChangeStart', function () {
        var user = AuthenticationService.getUser();

        var restricted = false;
        if ($location.path() != "/login" && $location.path() != "/register") {
            restricted = true;
        }

        if (restricted && !user) {
            $location.path('/login');
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