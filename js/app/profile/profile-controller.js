/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$log", "$q", "$state", "$mdDialog", "user"];

    /* @ngInject */
    function ProfileController($log, $q, $state, $mdDialog, user) {
        var vm = this;
        vm.user = user;
        vm.currentQuest = null;

        vm.newQuest = newQuest;
        vm.editQuest = editQuest;
        vm.editQuestCurrentQuest = editQuestCurrentQuest;
        vm.clearCurrentQuest = clearCurrentQuest;
        vm.deleteQuest = deleteQuest;
        vm.showCollection = showCollection;

        activate();

        ////////////////

        function activate() {
            vm.currentQuest = user.getCurrentQuest();
        }

        function showCollection() {
            $state.go("app.collection");
        }

        function newQuest() {
            user.clearCurrentQuest();
            $state.go("app.map");
        }

        function editQuest(quest) {
            $q.when(loadQuest(quest)).then(function() {
                user.setCurrentQuest(quest);
                $state.go("app.map");
            });
        }

        function editQuestCurrentQuest() {
            $state.go("app.map");
        }

        function loadQuest(quest) {
            if(quest.getLoaded()) {
                return quest;
            } else {
                return quest.load();
            }
        }

        function clearCurrentQuest() {
            user.clearCurrentQuest();
            vm.currentQuest = null;
        }

        function deleteQuest(evt, quest) {

            var confirm = $mdDialog.confirm()
                .title('Delete quest')
                .htmlContent('Are you sure you want to delete Quest <b>' + quest.getName() + '</b> ?')
                .ariaLabel('Delete quest')
                .targetEvent(evt)
                .ok('Confirm')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                user.deleteQuest(quest);
            });
        }
    }

})();