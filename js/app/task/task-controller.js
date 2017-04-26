/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('TaskController', TaskController);

    TaskController.$inject = ["TaskService", "TextAngularHandler", "MarkerType", "$mdDialog"];

    /* @ngInject */
    function TaskController(TaskService, TextAngularHandler, MarkerType, $mdDialog) {
        var vm = this;

        var oldContent = "";

        vm.types = MarkerType;
        vm.name = vm.task.getName();
        vm.description = vm.task.getDescription();
        vm.content = "";
        vm.targetContent = "";
        vm.activeType = vm.task.getType();
        vm.questName = vm.task.getQuestName();
        vm.answers = vm.task.getHtml().getAnswers();
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
        vm.confirm = confirm;
        vm.cancel = cancel;
        vm.keyPressed = keyPressed;

        activate();

        ////////////////

        function activate() {
            if(vm.task.getTargetHtml()) {
                vm.targetContent = vm.task.getTargetHtml().getContent();
            }
            vm.content = vm.task.getHtml().getContent();
            vm.content = TextAngularHandler.restoreContent(vm.content, vm.answers);
        }

        function keyPressed(event) {
            if(event.which == 13) {
                TextAngularHandler.enterKeyPressed(event);
            }
        }

        function markerSelected(newType, index) {
            if(showConfirm(vm.activeType, newType)) {
                var confirm = $mdDialog.confirm()
                    .title('Change task type')
                    .htmlContent('<p>Changing the task type will discard all type related features.</p><p>Are you sure you want to change the type of the task?</p>')
                    .multiple(true)
                    .ariaLabel('Change task type')
                    .ok('Confirm')
                    .cancel('Cancel');

                $mdDialog.show(confirm).then(
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

        function confirm() {
            if(!vm.activeType) {
                vm.error = true;
            } else {
                if(vm.activeType == MarkerType.QUIZ) {
                    vm.answers = {};
                    vm.answers = TextAngularHandler.retrieveCheckedAttributes(vm.answers);
                }
                vm.content = TextAngularHandler.prepareContent(vm.content);
                $mdDialog.hide({
                    type: vm.activeType,
                    questName: vm.questName,
                    taskName: vm.name,
                    content: vm.content,
                    targetContent: vm.targetContent != "" ? vm.targetContent : null,
                    answers: vm.answers
                });
            }
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();