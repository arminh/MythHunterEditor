/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('TaskController', TaskController);

    TaskController.$inject = ["$scope","$modalInstance", "TaskService", "TextAngularHandler", "MarkerType", "task", "ngDialog"];

    /* @ngInject */
    function TaskController($scope, $modalInstance, TaskService, TextAngularHandler, MarkerType, task, ngDialog) {
        var vm = this;

        var oldContent = "";

        vm.types = MarkerType;
        vm.name = task.getName();
        vm.description = task.getDescription();
        vm.content = "";
        vm.targetContent = "";
        vm.activeType = task.getType();
        vm.questName = task.getQuestName();
        vm.answers = task.getHtml().getAnswers();
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
        // vm.contentChanged = contentChanged;
        vm.okClicked = okClicked;
        vm.close = close;
        vm.keyPressed = keyPressed;

        activate();

        ////////////////

        function activate() {
            TaskService.setModalInstance($modalInstance);
            if(task.getTargetHtml()) {
                vm.targetContent = task.getTargetHtml().getContent();
            }
            vm.content = task.getHtml().getContent();
            vm.content = TextAngularHandler.setCheckedAttributes(vm.content, vm.answers);
        }

        function keyPressed(event) {
            if(event.which == 13) {
                TextAngularHandler.enterKeyPressed(event);
            }
        }

        function markerSelected(newType, index) {
            if(showConfirm(vm.activeType, newType)) {
                ngDialog.openConfirm({
                    scope: $scope,
                    template: "js/app/task/change-type-dialogue.tpl.html"
                }).then(
                    function (confirm) {
                        switch(vm.activeType) {
                            case MarkerType.QUIZ:
                                vm.content = TextAngularHandler.removeQuizFeatures(vm.content);
                                vm.answers = [];
                                break;
                            case MarkerType.INVISIBLE:
                                vm.content = TextAngularHandler.removeInvisibleFeatures(vm.content);
                                break;
                        }

                        if(newType == MarkerType.INFO) {
                            vm.targetContent = "";
                        }

                        vm.activeType = newType;
                    }, function (reject) {
                    }
                );
            } else {
                vm.activeType = newType;
            }
        }

        function showConfirm(oldType, newType) {
            if(oldType == MarkerType.QUIZ) {
                if(newType == MarkerType.INFO) {
                    return (vm.content.indexOf("input") >= 0 || vm.targetContent != "");
                } else {
                    return (vm.content.indexOf("input") >= 0);
                }

            } else if(oldType == MarkerType.INVISIBLE) {
                return true;
            } else {
                return false;
            }
        }

        function getMarkerIconSrc(type) {
            return TaskService.getMarkerSrc(type);
        }

        // function contentChanged() {
        //     vm.answers = {};
        //     var textAngular = $("text-angular");
        //     var inputElements = textAngular.find("input");
        //
        //     vm.answers = TaskService.retrieveCheckedAttributes(inputElements, vm.answers);
        // }

        function okClicked() {
            if(!vm.activeType) {
                vm.error = true;
            } else {
                if(vm.activeType == MarkerType.QUIZ) {
                    vm.answers = {};
                    vm.answers = TextAngularHandler.retrieveCheckedAttributes(vm.answers);
                    vm.content = TextAngularHandler.clearCheckedAttributes(vm.content);
                }
                TaskService.createTask(vm.questName, vm.name, vm.content, vm.targetContent, vm.answers, vm.activeType)
            }
        }

        function close() {
            TaskService.cancelTask();
        }
    }

})();