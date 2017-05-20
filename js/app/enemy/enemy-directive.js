/**
 * Created by Hannah on 20.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('enemy')
        .directive('enemy', enemy);

    enemy.$inject = [];

    /* @ngInject */
    function enemy() {
        var directive = {
            templateUrl: "js/app/enemy/enemy.tpl.html",
            bindToController: {
                enemy: "="
            },
            controller: "EnemyController",
            controllerAs: 'enemyCtrl',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();

