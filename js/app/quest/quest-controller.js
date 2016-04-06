/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .controller('QuestController', QuestController);

    QuestController.$inject = ["$scope", "$state", "$modalInstance", "HtmlTools"];

    /* @ngInject */
    function QuestController($scope, $state, $modalInstance, HtmlTools) {
        var vm = this;

        vm.name = "";
        vm.questContent = "";
        vm.taskContent = "";
        vm.separateDescription = false;

        vm.okClicked = okClicked;
        vm.close = close;

        ////////////////

        function okClicked() {

            HtmlTools.encloseContent($scope.name, $scope.name, $scope.questContent).then(encloseSuccess);

            function encloseSuccess(questContent) {
                if (!$scope.separateDescription) {
                    closeModal(questContent, questContent);
                } else {
                    HtmlTools.encloseContent($scope.name, $scope.name, $scope.taskContent).then(function (taskContent) {
                        closeModal(questContent, taskContent);
                    });
                }
            }
        }

        function closeModal(questContent, taskContent) {
            $modalInstance.close({
                name: $scope.name,
                questContent: questContent,
                taskContent: taskContent
            });
        }

        function close() {
            $modalInstance.dismiss('cancel');
        }
    }

})();