/**
 * Created by armin on 29.12.15.
 */
(function() {
    'use strict'

    angular
        .module("quest", [])
        .config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {
        $stateProvider
            .state('app.quest', {
                url: '/quest',
                templateUrl: 'js/app/quest/quest.tpl.html',
                resolve: {
                    user: ['AuthenticationService', function (AuthenticationService) {
                        return AuthenticationService.userPromise();
                    }]
                },
                params:{
                    quest:null,
                    edit: false,
                    tutorial: false
                },
                controller: 'QuestController',
                controllerAs: 'questCtrl'
            });
    }
})();
