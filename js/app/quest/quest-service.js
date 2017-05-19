/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('QuestService', QuestService);

    QuestService.$inject = ["$log"];

    /* @ngInject */
    function QuestService($log) {
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
            $log.info("finishEditing: ", editQuest);

            originalQuest.getHtml().setContent(editQuest.getHtml().getContent());

            if(editQuest.getName() != originalQuest.getName()) {
                originalQuest.setName(editQuest.getName());

                var startTask = originalQuest.getTreePartRoot().getTask();
                startTask.setQuestName(editQuest.getName());

                var startHtml = startTask.getHtml();
                startHtml.setQuestTitle(editQuest.getName());

                var treeParts = originalQuest.getTreeParts();

                for (var i = 0; i < treeParts.length; i++) {
                    var task = treeParts[i].getTask();
                    task.setQuestName(editQuest.getName());
                    task.change();

                    var html = task.getHtml();
                    html.setQuestTitle(editQuest.getName());
                    html.change();
                }
            }

            if(editStartMarker) {
                var startTask = originalQuest.getTreePartRoot().getTask();
                startTask.setName(editQuest.getName());
                startTask.setFixed(true);

                if(!separateDescription) {
                    startHtml.setContent(editQuest.getHtml().getContent());
                }

                var startHtml = startTask.getHtml();
                startHtml.setTaskTitle(editQuest.getName());
            }

            originalQuest.change();
            $log.info("finishEditing_success: ", originalQuest);
        }

        function addTreePartToQuest(quest, treePart, addToTree) {
            treePart.setId(treePartId++);
            if(addToTree) {
                quest.addTreePartToTree(treePart);
            }
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

