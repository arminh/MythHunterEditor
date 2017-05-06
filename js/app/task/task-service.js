/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('TaskService', TaskService);

    TaskService.$inject = ["$log", "$mdDialog", "MarkerType"];

    /* @ngInject */
    function TaskService($log, $mdDialog, MarkerType) {

        $log = $log.getInstance("TaskService", debugging);

        var service = {
            openTaskDialog: openTaskDialog,
            showPreview: showPreview,
            getMarkerSrc: getMarkerSrc,
            getFightTpl: getFightTpl
        };
        return service;

        ////////////////

        function openTaskDialog(task, edit, evt) {

            return $mdDialog.show({
                templateUrl: 'js/app/task/task.tpl.html',
                controller: 'TaskController',
                controllerAs: 'task',
                bindToController: true,
                targetEvent: evt,
                locals: {
                    task: task,
                    edit: edit
                }
            });
        }

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
    }

})();

