/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('TaskService', TaskService);

    TaskService.$inject = ["$log", "$modal", "MarkerType"];

    /* @ngInject */
    function TaskService($log, $modal, MarkerType) {

        $log = $log.getInstance("TaskService", debugging);
        var $modalInstance = null;

        var service = {
            setModalInstance: setModalInstance,
            openTaskDialog: openTaskDialog,
            createTask: createTask,
            cancelTask: cancelTask,
            getMarkerSrc: getMarkerSrc,
            getFightTpl: getFightTpl
        };
        return service;

        ////////////////

        function setModalInstance(modalInstance) {
            $modalInstance = modalInstance;
        }



        function openTaskDialog(task) {
            var modalInstance = $modal.open({
                animation: true,
                backdrop: 'static',
                size: "lg",
                templateUrl: 'js/app/task/task.tpl.html',
                controller: 'TaskController',
                controllerAs: 'task',
                resolve: {
                    task: function () {
                        return task;
                    }
                }
            });

            return modalInstance.result;
        }

        function createTask(questName, taskName, content, targetContent, answers, type) {

                $modalInstance.close({
                    type: type,
                    questName: questName,
                    taskName: taskName,
                    content: content,
                    targetContent: targetContent != "" ? targetContent : null,
                    answers: answers
                });
        }

        function cancelTask() {
            $modalInstance.dismiss('cancel');
        }

        function getMarkerSrc(type) {
            switch(type) {
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

