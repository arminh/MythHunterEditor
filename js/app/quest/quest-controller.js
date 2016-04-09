/**
 * Created by armin on 19.01.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .controller('QuestController', QuestController);

    QuestController.$inject = ["$modalInstance", "QuestService", "HtmlTools", "quest", "edit"];

    /* @ngInject */
    function QuestController($modalInstance, QuestService, HtmlTools, quest, edit) {

        var vm = this;

        vm.edit = edit;
        vm.name = quest.name;
        vm.questContent = "";
        vm.taskContent = "";
        vm.separateDescription = false;
        vm.toolbar = "[['h1', 'h2', 'h3', 'p'],['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],['insertImage','insertLink', 'insertVideo']]";

        vm.okClicked = okClicked;
        vm.close = close;

        activate();

        ////////////////

        function activate() {
            vm.questContent = HtmlTools.retrieveContent(quest.html.content);
            QuestService.setModalInstance($modalInstance);
        }

        function okClicked() {
            QuestService.createQuest(vm.name, vm.questContent, vm.taskContent, vm.separateDescription);
        }

        function close() {
            QuestService.cancelQuest();
        }
    }

})();