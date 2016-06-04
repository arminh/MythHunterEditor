/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('TaskService', TaskService);

    TaskService.$inject = ["$log", "$q", "HtmlTools", "$modal", "MarkerType"];

    /* @ngInject */
    function TaskService($log, $q, HtmlTools, $modal, MarkerType) {

        $log = $log.getInstance("TaskService", debugging);
        var $modalInstance = null;

        var service = {
            setModalInstance: setModalInstance,
            setCheckedAttributes: setCheckedAttributes,
            retrieveCheckedAttributes: retrieveCheckedAttributes,
            clearCheckedAttributes: clearCheckedAttributes,
            removeQuizFeatures: removeQuizFeatures,
            removeInvisibleFeatures: removeInvisibleFeatures,
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

        function setCheckedAttributes(content, answers) {
            angular.forEach(answers, function(val, key) {
                if(val == true) {
                    content = content.replace('id="' + key + '"', 'id="' + key + '"  checked');
                }
            });

            return content;
        }

        function retrieveCheckedAttributes(inputElements, answers) {

            for(var i = 0; i < inputElements.length; i++) {
                if(inputElements[i].id != "") {
                    answers[inputElements[i].id] = inputElements[i].checked;
                }
            }
            return answers;
        }

        function clearCheckedAttributes(content) {
            return content.replace(" checked","");
        }


        function removeQuizFeatures(content) {
            var regex = new RegExp("<label><input.*?>(.*?)<\/label>", "g");
            var regexInputBox = new RegExp("<input.*? value\=\"(.*?)\"\/>", "g");

            content = content.replace(regex, "$1");
            content = content.replace(regexInputBox, "$1");
            content = content.replace("<label>", "");
            return content.replace("</label>", "");
        }

        function removeInvisibleFeatures(content) {
            return content;
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

