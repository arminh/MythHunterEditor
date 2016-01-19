/**
 * Created by armin on 14.01.16.
 */

map.directive("mapQuest", function() {
    return {
        restrict: 'E',
        scope: {
            quest: '=',
        },
        templateUrl: "js/app/map/map-quest.tpl.html"
    }
});