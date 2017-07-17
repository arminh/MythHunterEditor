/**
 * Created by armin on 06.04.16.
 */

(function() {
    'use strict';

    angular
        .module('treePart',[])
        .config(config);

    config.inject = ["$stateProvider"];

    function config($stateProvider) {
        $stateProvider
            .state('app.task', {
                url: '/task',
                templateUrl: 'js/app/treepart/treepart.tpl.html',
                resolve: {
                    user: ['AuthenticationService', function (AuthenticationService) {
                        return AuthenticationService.userPromise();
                    }]
                },
                params:{
                    originalTreePart: null,
                    treePart:null,
                    tutorial: false
                },
                controller: 'TreePartController',
                controllerAs: 'treePartCtrl'
            });
    }

})();