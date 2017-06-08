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
            addRewardsToQuest: addRewardsToQuest,

            getTreePartId: getTreePartId,
            setTreePartId: setTreePartId
        };
        return service;

        ////////////////

        function finishEditing(editQuest, originalQuest, separateDescription, editStartMarker) {
            $log.info("finishEditing: ", editQuest);

            originalQuest.getHtml().setContent(editQuest.getHtml().getContent());
            addRewardsToQuest(originalQuest, editQuest.getRewards());

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

                var startHtml = startTask.getHtml();
                startHtml.setTaskTitle(editQuest.getName());
                if(!separateDescription) {
                    startHtml.setContent(editQuest.getHtml().getContent());
                }
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

        function addRewardsToQuest(quest, newRewards) {
            var oldRewards = quest.getRewards();

            //Check if reward was removed
            for (var i = 0; i < oldRewards.length; i++) {
                if ($.inArray(oldRewards[i], newRewards) < 0) {
                    quest.change();
                }
            }

            //Check if reward was added
            for (var i = 0; i < newRewards.length; i++) {
                if ($.inArray(newRewards[i], oldRewards) < 0) {
                    quest.change();
                }
            }

            quest.clearRewards();
            for (var i = 0; i < newRewards.length; i++) {
                quest.addReward(newRewards[i]);
            }
        }
    }

})();

