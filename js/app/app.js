/**
 * Created by Armin on 18.04.2014.
 */

'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ui.router',
    'ngDragDrop',
    'ui.bootstrap',
    'angularSoap',
    'map'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'map': {
                        controller: 'mapController',
                        templateUrl: 'js/app/map/map.tpl.html'
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