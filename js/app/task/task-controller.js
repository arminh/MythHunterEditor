/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('TaskController', TaskController);

    TaskController.$inject = ["$modalInstance", "TaskService", "MarkerType", "HtmlTools", "task"];

    /* @ngInject */
    function TaskController($modalInstance, TaskService, MarkerType, HtmlTools, task) {
        var vm = this;

        vm.types = MarkerType;
        vm.name = task.name;
        vm.description = task.description;
        vm.content = HtmlTools.retrieveContent(task.html.content);
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
            vm.content = TaskService.setCheckedAttributes(vm.content, vm.answers);
        }

        function markerSelected(type, index) {
            vm.activeType = type;
            vm.selectedIndex = index;
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