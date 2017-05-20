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

        function QuestError(quest) {
            this.quest = quest;
        }

        function TaskError(treePart, nameMissing) {
            this.treePart = treePart;
            this.nameMissing = nameMissing;
        }

        function addQuestError(quest) {
            this.erroneous = true;
            this.questErrors.push(new QuestError(quest));
        }

        function addTaskError(treePart, nameMissing) {
            this.erroneous = true;
            this.taskErrors.push(new TaskError(treePart, nameMissing));
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

