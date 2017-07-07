/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('TaskService', TaskService);

    TaskService.$inject = ["$log", "$mdDialog", "$translate", "MarkerType"];

    /* @ngInject */
    function TaskService($log, $mdDialog, $translate, MarkerType) {

        $log = $log.getInstance("TaskService", debugging);

        var service = {
            showPreview: showPreview,
            getMarkerSrc: getMarkerSrc,
            getFightTpl: getFightTpl,
            showCreationTutorial: showCreationTutorial
        };
        return service;

        ////////////////

        function showPreview(html, evt) {
            return $mdDialog.show({
                templateUrl: 'js/app/task/task-preview/task-preview.tpl.html',
                controller: 'TaskPreviewController',
                controllerAs: 'taskPreview',
                bindToController: true,
                targetEvent: evt,
                locals: {
                    htmlContent: html.getContentHtml(),
                    targetContent: null
                }
            });
        }

        function getMarkerSrc(type) {
            switch (type) {
                case MarkerType.FIGHT:
                    return "media/fight_marker.png";
                case MarkerType.QUIZ:
                    return "media/quiz_marker.png";
                case MarkerType.INFO:
                    return "media/info_marker.png";
                case MarkerType.INVISIBLE:
                    return "media/invisible_marker.png";
                case "start":
                    return "media/start_marker.png";
                default:
                    $log.warn("getMarkerSrc: No valid marker type");
            }
        }

        function getFightTpl(lon, lat) {
            return "<div><p>lon: " + lon + "</p><p>lat: " + lat + "</p></div>";
        }

        function showCreationTutorial(type, invisibleTarget) {
            var title = "";
            var content = "";

            switch (type) {
                case "start": {
                    title = "Place StartMarker";
                    content = "You are now on the map interface with the first marker in hand. <br> Place the marker where you want players to find your quest";
                    break;
                }
                case MarkerType.INVISIBLE: {
                    if(!invisibleTarget) {
                        title = "Place search start marker";
                        content = "Place the first of two markers for the search task on the map.<br>It marks the location of the start of the search.";
                        break;
                    } else {
                        title = "Place search target marker";
                        content = "Place the second marker at the destination of your search task.";
                        break;
                    }
                }
            }

            var alert = $mdDialog.alert()
                .title(title)
                .htmlContent(content)
                .ariaLabel('Place start')
                .ok($translate.instant('BUTTON_OK'));

            return $mdDialog.show(alert);
        }
    }

})();

