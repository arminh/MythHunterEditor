/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('TaskController', TaskController);

    TaskController.$inject = ["$scope","$modalInstance", "TaskService", "MarkerType", "HtmlTools", "task", "ngDialog"];

    /* @ngInject */
    function TaskController($scope, $modalInstance, TaskService, MarkerType, HtmlTools, task, ngDialog) {
        var vm = this;

        vm.types = MarkerType;
        vm.name = task.name;
        vm.description = task.description;
        vm.content = "";
        vm.activeType = task.type;
        vm.questName = task.questName;
        vm.answers = task.html.answers;
        vm.error = false;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo']]";
        vm.quizToolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo'],['input','radio','checkbox']]"

        vm.markerBtnStyle = {
            "width": (100 / Object.keys(vm.types).length / 2) + '%',
            "display": "inline-block",
            "vertical-align": "top"
        };

        vm.markerSelected = markerSelected;
        vm.getMarkerIconSrc = getMarkerIconSrc;
        vm.contentChanged = contentChanged;
        vm.okClicked = okClicked;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
            TaskService.setModalInstance($modalInstance);
            vm.content = HtmlTools.retrieveContent(task.html.content);
            vm.content = TaskService.setCheckedAttributes(vm.content, vm.answers);
        }

        function markerSelected(type, index) {
            if(vm.activeType == MarkerType.QUIZ || vm.activeType == MarkerType.INVISIBLE) {
                ngDialog.openConfirm({
                    scope: $scope,
                    template: "js/app/task/change-type-dialogue.tpl.html"
                }).then(
                    function (confirm) {
                        switch(vm.activeType) {
                            case MarkerType.QUIZ:
                                vm.content = TaskService.removeQuizFeatures(vm.content);
                                break;
                            case MarkerType.INVISIBLE:
                                vm.content = TaskService.removeInvisibleFeatures(vm.content);
                                break;

                        }

                        console.log(vm.content);
                        vm.activeType = type;
                    }, function (reject) {
                    }
                );
            } else {
                vm.activeType = type;
            }
        }

        function getMarkerIconSrc(type) {
            return TaskService.getMarkerSrc(type);
        }

        function contentChanged() {
            vm.answers = {};
            var textAngular = $("text-angular");
            var inputElements = textAngular.find("input");

            vm.answers = TaskService.retrieveCheckedAttributes(inputElements, vm.answers);
        }

        function okClicked() {
            vm.content = TaskService.clearCheckedAttributes(vm.content);

            if(!vm.activeType) {
                vm.error = true;
            } else {
                TaskService.createTask(vm.questName, vm.name, vm.content, vm.answers, vm.activeType)
            }
        }

        function close() {
            TaskService.cancelTask();
        }
    }

})();