/**
 * Created by armin on 13.11.15.
 */
(function () {
    'use strict';

    angular
        .module("map", [])
        .config(config);

    config.$inject = ["$stateProvider"];

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app.map', {
                url: '/map',
                templateUrl: 'js/app/map/map.tpl.html',
                resolve: {
                    user: ['AuthenticationService', function (AuthenticationService) {
                        return AuthenticationService.userPromise();
                    }]
                },
                params: {
                    tutorial: false,
                    treePart: null
                },
                controller: 'MapController',
                controllerAs: 'map'
            });
    }

})();