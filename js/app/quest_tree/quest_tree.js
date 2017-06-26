/**
 * Created by armin on 29.12.15.
 */
(function() {
    'use strict'

    angular
        .module("questTree", [])
        .config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {
        $stateProvider
            .state('app.storyline', {
                url: '/storyline',
                templateUrl: 'js/app/quest_tree/quest_tree.tpl.html',
                controller: 'QuestTreeController',
                controllerAs: "questTree",
                resolve: {
                    user: ['AuthenticationService', function (AuthenticationService) {
                        return AuthenticationService.userPromise();
                    }]
                },
                params:{
                    quest:null
                }
            });
    }
})();
