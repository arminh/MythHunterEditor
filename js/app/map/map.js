/**
 * Created by armin on 13.11.15.
 */

var map = angular.module("map", []);

map.constant("MARKERS", {
    fight: {
        type: "fight",
        name: "Fight",
        path: "media/fight_marker.png",
        description: "Fight against a monster"
    },
    quiz: {
        type: "quiz",
        name: "Quiz",
        path: "media/quiz_marker.png",
        description: "Solving a quiz"
    },
    info: {
        type: "info",
        name: "Info",
        path: "media/info_marker.png",
        description: "Displaying information"
    }
});

map.config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('map', {
        url: '/quest',
        controller: 'mapController',
        templateUrl: 'js/app/map/map.tpl.html'
    });
});