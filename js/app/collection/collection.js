/**
 * Created by Hannah on 03.11.2016.
 */

(function () {
    'use strict';

    angular
        .module("collection", [])
        .config(config);

    config.$inject = ["$stateProvider"];

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app.collection', {
                url: '/collection',
                templateUrl: 'js/app/collection/collection.tpl.html',
                resolve: {
                    user: ['AuthenticationService', function (AuthenticationService) {
                        return AuthenticationService.userPromise();
                    }]
                },
                params:{
                    enemy:null,
                    originalTreePart: null,
                    treePart: null
                },
                controller: 'CollectionController',
                controllerAs: 'collectionCtrl'
            });
    }

})();