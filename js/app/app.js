/**
 * Created by Armin on 18.04.2014.
 */

'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ui.router',
    'ngDragDrop',
    'ui.bootstrap',
    'angularSoap'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MainController',
                templateUrl: 'js/app/main.tpl.html'
            });
});