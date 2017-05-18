/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('QuestService', QuestService);

    QuestService.$inject = ["$log", "$state"];

    /* @ngInject */
    function QuestService($log, $state) {
        $log = $log.getInstance("QuestService", debugging);

        var treePartId = 1;
        var service = {
            finishEditing: finishEditing,
            addTreePartToQuest: addTreePartToQuest,

            getTreePartId: getTreePartId,
            setTreePartId: setTreePartId
        };
        return service;

        ////////////////

        function finishEditing(editQuest, originalQuest, separateDescription, editStartMarker) {
            originalQuest.setName(editQuest.getName());
            originalQuest.getHtml().setContent(editQuest.getHtml().getContent());

            if(editStartMarker) {
                var startTask = originalQuest.getTreePartRoot().getTask();
                startTask.setName(editQuest.getName());
                startTask.setQuestName(editQuest.getName());
                startTask.setFixed(true);

                var startHtml = startTask.getHtml();
                if(!separateDescription) {
                    startHtml.setContent(editQuest.getHtml().getContent());
                }
                startHtml.setQuestTitle(editQuest.getName());
                startHtml.setTaskTitle(editQuest.getName());
            }

            originalQuest.change();
        }

        function addTreePartToQuest(quest, treePart) {
            treePart.setId(treePartId++);
            quest.addTreePart(treePart);
        }

        function getTreePartId() {
            return treePartId;
        }

        function setTreePartId(value) {
            treePartId = value;
        }
    }

})();

