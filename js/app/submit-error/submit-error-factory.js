/**
 * Created by Hannah on 25.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('SubmitErrors', SubmitErrorsFactory);

    SubmitErrorsFactory.$inject = ["$mdDialog"];

    /* @ngInject */
    function SubmitErrorsFactory($mdDialog) {
        function SubmitErrors() {
            this.erroneous = false;
            this.questErrors = [];
            this.taskErrors = [];
        }

        SubmitErrors.prototype = {
            addQuestError: addQuestError,
            addTaskError: addTaskError,
            showErrorDialog: showErrorDialog,

            getErroneous: getErroneous
        };

        return (SubmitErrors);

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

        function showErrorDialog() {
            var errorDialog = $mdDialog.alert({
                templateUrl: "js/app/submit-error/submit-error-dialogue.tpl.html",
                bindToController: true,
                controller: "SubmitErrorController",
                controllerAs: "submitErrors",
                locals: {
                    errors: this
                }
            });

            $mdDialog
                .show( errorDialog );
        }

    }

})();

