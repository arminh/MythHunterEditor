/**
 * Created by Armin on 18.04.2014.
 */

'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngMaterial',
    'ui.router',
    'ui.bootstrap',
    'ui.sortable',
    'ngDialog',
    'ngDragDrop',
    'angularSoap',
    'textAngular',
    'profile',
    'map',
    'task'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'profileController',
                templateUrl: 'js/app/profile/profile.tpl.html'
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