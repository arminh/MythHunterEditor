/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module("profile", [])
        .config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {
        $stateProvider
            .state('app.profile', {
                url: '/profile',
                controller: 'ProfileController',
                controllerAs: 'profile',
                templateUrl: 'js/app/profile/profile.tpl.html',
                resolve: {
                    user: ['AuthenticationService', function (AuthenticationService) {
                        return AuthenticationService.userPromise();
                    }]
                }
            });
    }

})();
