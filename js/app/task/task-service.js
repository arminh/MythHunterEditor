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
                    title = $translate.instant("TUT_MAP_START_MARKER_TITLE");
                    content = $translate.instant("TUT_MAP_START_MARKER_TEXT");
                    break;
                }
                case MarkerType.INVISIBLE: {
                    if(!invisibleTarget) {
                        title = $translate.instant("TUT_MAP_SEARCH_MARKER_TITLE");
                        content = $translate.instant("TUT_MAP_SEARCH_MARKER_TEXT");
                        break;
                    } else {
                        title = $translate.instant("TUT_MAP_SEARCH_MARKER_DEST_TITLE");
                        content =  $translate.instant("TUT_MAP_SEARCH_MARKER_DEST_TEXT");
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

