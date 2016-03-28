/**
 * Created by armin on 27.03.16.
 */

(function () {
    'use strict';

    angular
        .module('authentication', [])
        .config(config);

    config.$inject = ["$stateProvider"];

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app.login', {
                url: '/login',
                templateUrl: 'js/app/authentication/login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });

        $stateProvider
            .state('app.register', {
                url: '/register',
                templateUrl: 'js/app/authentication/register.tpl.html',
                controller: 'RegisterController',
                controllerAs: 'register'
            });
    }
})();


