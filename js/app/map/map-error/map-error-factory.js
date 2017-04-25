/**
 * Created by Hannah on 25.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('UploadErrors', UploadErrorsFactory);

    UploadErrorsFactory.$inject = [];

    /* @ngInject */
    function UploadErrorsFactory() {
        function UploadErrors() {
            this.erroneous = false;
            this.questErrors = [];
            this.taskErrors = [];
        }

        UploadErrors.prototype = {
            addQuestError: addQuestError,
            addTaskError: addTaskError,

            getErroneous: getErroneous
        };

        return (UploadErrors);

        ////////////////

        function QuestError(quest, nameMissing, descriptionMissing) {
            this.quest = quest;
            this.nameMissing = nameMissing;
            this.descriptionMissing = descriptionMissing;
        }

        function TaskError(task, nameMissing, descriptionMissing) {
            this.task = task;
            this.nameMissing = nameMissing;
            this.descriptionMissing = descriptionMissing;
        }

        function addQuestError(quest, nameMissing, descriptionMissing) {
            this.erroneous = true;
            this.questErrors.push(new QuestError(quest, nameMissing, descriptionMissing));
        }

        function addTaskError(task, nameMissing, descriptionMissing) {
            this.erroneous = true;
            this.taskErrors.push(new TaskError(task, nameMissing, descriptionMissing));
        }

        function getErroneous() {
            return this.erroneous;
        }

    }

})();

