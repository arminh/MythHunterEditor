/**
 * Created by Hannah on 19.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('treePart')
        .factory('TreePartService', TreePartService);

    TreePartService.$inject = ["$log", "TextAngularHandler", "MarkerType"];

    /* @ngInject */
    function TreePartService($log, TextAngularHandler, MarkerType) {
        $log = $log.getInstance("TreePartService", debugging);

        var service = {
            getContent: getContent,
            getTargetContent: getTargetContent,
            contentChanged: contentChanged,
            keyPressed: keyPressed,
            finishEditing: finishEditing,
            saveHtmls: saveHtmls
        };
        return service;

        ////////////////

        function getContent(task) {
            var html = task.getHtml();
            var content = html.getContent();
            var answers = html.getAnswers();
            return TextAngularHandler.restoreContent(content, answers);
        }

        function getTargetContent(task) {
            if (task.getTargetHtml()) {
                var targetContent = task.getTargetHtml().getContent();
                return TextAngularHandler.restoreContent(targetContent, {});
            } else {
                return "";
            }
        }

        function keyPressed(evt) {
            if (evt.which == 13) {
                TextAngularHandler.enterKeyPressed(evt);
            }
        }

        function contentChanged(task, content) {
            if(task) {
                var html = task.getHtml();
                var answers = {};
                var result = TextAngularHandler.retrieveCheckedAttributes(answers, content);
                content = result.content;
                html.setAnswers(result.answers);
                content = TextAngularHandler.clearCheckedAttributes(content);
                content = TextAngularHandler.setCheckedAttributes(content, answers);
            }
            return content;
        }

        function finishEditing(editTreePart, originalTreePart, content, targetContent) {

            $log.info("finishEditing", editTreePart);
            var editTask = editTreePart.getTask();
            var originalTask = originalTreePart.getTask();

            originalTask.setName(editTask.getName());

            saveHtmls(content, targetContent, originalTask);

            if (editTask.getType() == MarkerType.FIGHT) {
                var editEnemy = editTask.getEnemy();
                var originalEnemy = originalTask.getEnemy();
                originalEnemy.setName(editEnemy.getName());
                originalEnemy.setImage(editEnemy.getImage());
                originalEnemy.setDescription(editEnemy.getDescription());
                originalEnemy.change();

                var originalDeck = originalEnemy.getDeck();
                var editDeck = editEnemy.getDeck();
                originalDeck.setName(editDeck.getName());

                var originalCards = originalDeck.getCardIds();
                originalCards.length = 0;
                var editCards = editDeck.getCardIds();
                for(var i = 0; i < editCards.length; i++) {
                    originalCards.push(editCards[i]);
                }
            }

            originalTask.change();
            $log.info("finishEditing_success: ", originalTreePart);
        }

        function saveHtmls(content, targetContent, task) {

            var answers = {};
            if (task.getType() == MarkerType.QUIZ) {
                var result = TextAngularHandler.retrieveCheckedAttributes(answers, content);
                answers = result.answers;
                content = result.content;
            }

            var originalHtml = task.getHtml();
            originalHtml.setContent(TextAngularHandler.prepareContent(content, answers));
            originalHtml.setAnswers(answers);
            originalHtml.setTaskTitle(task.getName());
            originalHtml.change();

            var originalTargetHtml = task.getTargetHtml();
            if (originalTargetHtml) {
                originalTargetHtml.setContent(TextAngularHandler.prepareContent(targetContent, {}));
                originalTargetHtml.setTaskTitle(task.getName());
                originalTargetHtml.change();
            }
        }
    }

})();

