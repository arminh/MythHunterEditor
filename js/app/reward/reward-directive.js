/**
 * Created by Hannah on 19.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('reward')
        .directive('reward', reward);

    reward.$inject = [];

    /* @ngInject */
    function reward() {
        var directive = {
            templateUrl: "js/app/reward/reward.tpl.html",
            bindToController: {
                rewardIds: "=",
                maxCards: "=",
                user: "="
            },
            controller: "RewardController",
            controllerAs: 'reward',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();

