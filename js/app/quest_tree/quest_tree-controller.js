/**
 * Created by armin on 08.12.15.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .controller('QuestTreeController', QuestTreeController);

    QuestTreeController.$inject = ["$scope", "$state", "$q", 'QuestTreeService', "$stateParams", "$timeout", "$mdDialog", "user"];

    /* @ngInject */
    function QuestTreeController($scope, $state, $q, QuestTreeService, $stateParams, $timeout, $mdDialog, user) {
        var vm = this;
        vm.drawing = false;

        vm.showInstructions = showInstructions;
        vm.confirm = confirm;
        vm.cancel = cancel;

        $scope.$on("keypress:27", QuestTreeService.escapeKeyPressed);
        $scope.$on("keypress:46", QuestTreeService.deleteKeyPressed);

        $timeout(init);

        ////////////////

        function init() {
            if($stateParams.quest) {
                QuestTreeService.init($stateParams.quest);
            } else {
                $state.go("app.map");
            }
        }

        function showInstructions() {
            return $mdDialog.show({
                templateUrl: 'js/app/quest_tree/edit-storyline-dialog/edit-storyline-dialog.tpl.html',
                controller: 'EditStorylineDialogController',
                controllerAs: "editStoryline",
                bindToController: true,
                locals: {
                    chooseTutorial: false
                }
            });
        }

        function confirm(evt) {
            $q.when(QuestTreeService.saveTree(evt)).then(function() {
                user.backup();
                $state.go("app.map");
            });
        }

        function cancel() {
            $state.go("app.map");
        }
    }

})();