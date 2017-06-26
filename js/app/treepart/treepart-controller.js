/**
 * Created by Hannah on 19.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .controller('TreePartController', TreePartController);

    TreePartController.$inject = ["$log", "$state", "$stateParams", "TreePartService", "MarkerType", "user"];

    /* @ngInject */
    function TreePartController($log, $state, $stateParams, TreePartService, MarkerType, user) {
        var vm = this;
        vm.types = MarkerType;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo']]";
        vm.quizToolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertPicture','insertLink', 'insertVideo'],['input','radio','checkbox']]"
        vm.enemyDeckPromise = null;

        vm.editEnemyDeck = editEnemyDeck;
        vm.keyPressed = keyPressed;
        vm.contentChanged = contentChanged;
        vm.confirm = confirm;
        vm.cancel = cancel;

       // $scope.$watch("treePartCtrl.content", contentChanged);

        activate();

        ////////////////

        function activate() {
            if($stateParams.treePart) {
                vm.originalTreePart = $stateParams.originalTreePart;
                vm.treePart = $stateParams.treePart;
                vm.task = vm.treePart.getTask();

                vm.content = TreePartService.getContent(vm.task);
                vm.targetContent = TreePartService.getTargetContent(vm.task);

                if(vm.task.getType() == MarkerType.FIGHT) {
                    var enemy = vm.task.getEnemy();
                    vm.enemyDeckPromise = enemy.loadStandardDeck(user, user.getCollection());
                }

            } else {
                if(user.getCurrentQuest()) {
                    $state.go("app.map");
                } else {
                    $state.go("app.profile");
                }
            }
        }

        function editEnemyDeck() {

            TreePartService.saveHtmls(vm.content, vm.targetContent, vm.task);
            vm.enemyDeckPromise.then(function () {
                $state.go("app.collection", {enemy: vm.task.getEnemy(), originalTreePart: vm.originalTreePart, treePart: vm.treePart});
            });
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

