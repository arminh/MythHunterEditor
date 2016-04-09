/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('QuestService', QuestService);

    QuestService.$inject = ["$log", "HtmlTools", "$modal"];

    /* @ngInject */
    function QuestService($log, HtmlTools, $modal) {
        $log = $log.getInstance("Quest", debugging);

        var $modalInstance = null;

        var service = {
            setModalInstance: setModalInstance,
            createQuest: createQuest,
            cancelQuest: cancelQuest,
            openQuestDialog: openQuestDialog
        };
        return service;

        ////////////////

        function setModalInstance(modalInstance) {
            $modalInstance = modalInstance;
        }

        function createQuest(name, questContent, taskContent, separateDescription) {
            HtmlTools.encloseContent(name, name, questContent).then(encloseSuccess);

            function encloseSuccess(enclosedQuestContent) {
                if (!separateDescription) {
                    closeModal(name, enclosedQuestContent, enclosedQuestContent);
                } else {
                    HtmlTools.encloseContent(name, name, taskContent).then(function (enclosedTaskContent) {
                        closeModal(name, enclosedQuestContent, enclosedTaskContent);
                    });
                }
            }
        }

        function closeModal(name, questContent, taskContent) {
            $modalInstance.close({
                name: name,
                questContent: questContent,
                taskContent: taskContent
            });
        }

        function cancelQuest() {
            $modalInstance.dismiss('cancel');
        }

        function openQuestDialog(quest, edit) {
            var modalInstance = $modal.open({
                animation: true,
                backdrop: 'static',
                size: "lg",
                templateUrl: 'js/app/quest/quest.tpl.html',
                controller: 'QuestController',
                controllerAs: "quest",
                resolve: {
                    quest: function () {
                        return quest;
                    },
                    edit: function () {
                        return edit;
                    }
                }
            });

            return modalInstance.result;
        }
    }

})();

