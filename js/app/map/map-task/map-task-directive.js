/**
 * Created by armin on 14.01.16.
 */
(function () {
    'use strict';

    angular
        .module("map")
        .directive("mapTask", function () {
            return {
                restrict: 'E',
                templateUrl: "js/app/map/map-task/map-task.tpl.html",
                scope: { },
                bindToController: {
                    treepart: '=',
                    quest: "="
                },
                controller: "MapTaskController",
                controllerAs: "mapTask",
                link: link
            }
        });

        function link(scope, element, attrs, vm) {
            vm.task = vm.treepart.getTask();
            vm.complex = vm.quest.getComplex();
        }
})();