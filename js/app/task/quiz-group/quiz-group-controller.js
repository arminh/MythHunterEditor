/**
 * Created by Hannah on 05.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .controller('QuizGroupController', QuizGroupController);

    QuizGroupController.$inject = ["QuizGroup", "$mdDialog", "$translate"];

    /* @ngInject */
    function QuizGroupController(QuizGroup, $mdDialog, $translate) {
        var vm = this;
        vm.selected = -1;

        vm.addOption = addOption;
        vm.removeOption = removeOption;
        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            vm.group = new QuizGroup(vm.type);
        }

        function addOption() {
            vm.group.addOption();
        }

        function removeOption(index) {
            vm.group.removeOption(index);
        }

        function confirm(evt) {
            if(vm.group.getOptions().length < 2) {
                var alert = $mdDialog.alert()
                    .title($translate.instant('ERROR_QUIZ'))
                    .htmlContent($translate.instant('ERROR_QUIZ_OPTIONS'))
                    .ariaLabel('Create quiz')
                    .targetEvent(evt)
                    .multiple(true)
                    .ok('Close');

                $mdDialog.show(alert);
            } else if(vm.type == "radio" && vm.selected < 0){
                var alert = $mdDialog.alert()
                    .title($translate.instant('ERROR_QUIZ'))
                    .htmlContent($translate.instant('ERROR_QUIZ_SELECTED'))
                    .ariaLabel('Create quiz')
                    .targetEvent(evt)
                    .multiple(true)
                    .ok('Close');

                $mdDialog.show(alert);

            } else {
                if(vm.type == "radio") {
                    vm.group.options[vm.selected].selected = true;
                }
                $mdDialog.hide(vm.group);
            }
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

