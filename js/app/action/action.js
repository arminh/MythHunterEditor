/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module("action", [])
        .config(config);

    config.$inject = ["$stateProvider"];

    /* @ngInject */
    function config($stateProvider) {
        // $stateProvider
        //     .state('app.card', {
        //         url: '/card',
        //         templateUrl: 'js/app/card/card.tpl.html',
        //         resolve: {
        //         },
        //         controller: 'CardController',
        //         controllerAs: 'card'
        //     });
    }

})();