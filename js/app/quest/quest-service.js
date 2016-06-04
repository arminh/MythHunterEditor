/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('QuestService', QuestService);

    QuestService.$inject = ["$log", "$modal"];

    /* @ngInject */
    function QuestService($log, $modal) {
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
            if(!separateDescription) {
                taskContent = questContent;
            }

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

