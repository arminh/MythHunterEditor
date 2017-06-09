/**
 * Created by Hannah on 19.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .controller('TreePartController', TreePartController);

    TreePartController.$inject = ["$scope", "$state", "$stateParams", "TreePartService", "MarkerType", "user"];

    /* @ngInject */
    function TreePartController($scope, $state, $stateParams, TreePartService, MarkerType, user) {
        var vm = this;
        vm.types = MarkerType;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo']]";
        vm.quizToolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo'],['input','radio','checkbox']]"

        vm.keyPressed = keyPressed;
        vm.contentChanged = contentChanged;
        vm.confirm = confirm;
        vm.cancel = cancel;

       // $scope.$watch("treePartCtrl.content", contentChanged);

        activate();

        ////////////////

        function activate() {
            if($stateParams.treePart) {
                vm.originalTreePart = $stateParams.treePart;
                vm.treePart = angular.copy($stateParams.treePart);
                vm.task = vm.treePart.getTask();

                vm.content = TreePartService.getContent(vm.task);
                vm.targetContent = TreePartService.getTargetContent(vm.task);

            } else {
                if(user.getCurrentQuest()) {
                    $state.go("app.map");
                } else {
                    $state.go("app.profile");
                }
            }
        }

        function contentChanged() {
            vm.content = TreePartService.contentChanged(vm.task, vm.content);
        }

        function keyPressed(evt) {
            TreePartService.keyPressed(evt);
        }

        function confirm() {
            TreePartService.finishEditing(vm.treePart, vm.originalTreePart, vm.content, vm.targetContent);
            user.backup();
            $state.go("app.map");
        }

        function cancel() {
            $state.go("app.map");
        }
    }

})();

