/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .controller('QuestController', QuestController);

    QuestController.$inject = ["$state", "$stateParams", "QuestService", "user", "REWARD_MAX_CARDS"];

    /* @ngInject */
    function QuestController($state, $stateParams, QuestService, user, REWARD_MAX_CARDS) {

        var vm = this;
        vm.user = user;
        vm.editStartMarker = false;
        vm.questContent = "";
        vm.taskContent = "";
        vm.sameDescription = false;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo']]";
        vm.maxCards = REWARD_MAX_CARDS;

        vm.showQuestDescriptionTooltip = showQuestDescriptionTooltip;
        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            if($stateParams.quest) {
                vm.originalQuest = $stateParams.quest;
                vm.quest = angular.copy($stateParams.quest);
            } else {
                if(user.getCurrentQuest()) {
                    $state.go("app.map");
                } else {
                    $state.go("app.profile");
                }
            }

            if($stateParams.editStartMarker) {
                vm.editStartMarker = $stateParams.editStartMarker;
            }
        }

        function showQuestDescriptionTooltip() {
            vm.questDescriptionTooltipVisible = true;
        }

        function confirm() {
            QuestService.finishEditing(vm.quest, vm.originalQuest, vm.separateDescription, vm.editStartMarker);
            user.backup();
            $state.go("app.map", { tutorial: $stateParams.tutorial });
        }

        function cancel() {
            $state.go("app.map", { tutorial: $stateParams.tutorial });
        }
    }

})();