/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .controller('QuestController', QuestController);

    QuestController.$inject = ["$state", "$stateParams", "QuestService", "user"];

    /* @ngInject */
    function QuestController($state, $stateParams, QuestService, user) {

        var vm = this;
        vm.editStartMarker = false;
        vm.questContent = "";
        vm.taskContent = "";
        vm.separateDescription = true;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo']]";

        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            if($stateParams.quest) {
                vm.originalQuest = $stateParams.quest;
                vm.quest = angular.copy($stateParams.quest);
            } else {
                $state.go("app.map");
            }

            if($stateParams.editStartMarker) {
                vm.editStartMarker = $stateParams.editStartMarker;
            }

        }

        function confirm() {
            QuestService.finishEditing(vm.quest, vm.originalQuest, vm.separateDescription, vm.editStartMarker);
            user.backup();
            $state.go("app.map");
        }

        function cancel() {
            $state.go("app.map");
        }
    }

})();