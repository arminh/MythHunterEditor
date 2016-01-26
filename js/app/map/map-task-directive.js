/**
 * Created by armin on 14.01.16.
 */

map.directive("mapTask", function() {
    return {
        restrict: 'E',
        scope: {
            task: '=',
            edit: "&"
        },
        templateUrl: "js/app/map/map-task.tpl.html"
    }
});