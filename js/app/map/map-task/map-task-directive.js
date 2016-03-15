/**
 * Created by armin on 14.01.16.
 */

map.directive("mapTask", function() {
    return {
        restrict: 'E',
        scope: {
            task: '=',
            edit: "&",
            delete: "&",
            preview: "&"
        },
        templateUrl: "js/app/map/map-task/map-task.tpl.html",
        controller: "mapTaskController"
    }
});