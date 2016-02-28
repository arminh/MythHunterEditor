/**
 * Created by armin on 14.01.16.
 */

map.directive("mapTask", function() {
    return {
        restrict: 'E',
        scope: {
            task: '=',
            edit: "&",
            delete: "&"
        },
        templateUrl: "js/app/map/map_task/map-task.tpl.html",
        controller: "mapTaskController"
    }
});