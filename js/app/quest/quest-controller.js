/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .controller('QuestController', QuestController);

    QuestController.$inject = ["$mdDialog", "QuestService", "quest", "edit"];

    /* @ngInject */
    function QuestController($mdDialog, QuestService, quest, edit) {

        var vm = this;

        vm.edit = edit;
        vm.name = quest.name;
        vm.questContent = "";
        vm.taskContent = "";
        vm.separateDescription = true;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo']]";

        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            if(quest.getHtml()) {
                vm.questContent = quest.getHtml().getContent();
            }
        }

        function confirm() {
            if(!vm.separateDescription) {
                vm.taskContent = vm.questContent;
            }

            $mdDialog.hide({
                name: vm.name,
                questContent: vm.questContent,
                taskContent: vm.taskContent
            });
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();