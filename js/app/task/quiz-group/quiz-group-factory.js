/**
 * Created by Hannah on 05.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('QuizGroup', QuizGroupFactory);

    QuizGroupFactory.$inject = [];

    /* @ngInject */
    function QuizGroupFactory() {
        function QuizGroup(type) {
            this.type = type;
            this.question = "";
            this.options = [new Option(), new Option()];
        }

        QuizGroup.prototype = {
            addOption: addOption,
            removeOption: removeOption,
            getType: getType,
            getQuestion: getQuestion,
            getOptions: getOptions
        };

        return (QuizGroup);

        ////////////////

        function Option() {
            this.text = "";
            this.selected = false;
        }

        function addOption() {
            this.options.push(new Option());
        }

        function removeOption(index) {
            this.options.splice(index, 1);
        }

        function getType() {
            return this.type;
        }

        function getQuestion() {
            return this.question;
        }

        function getOptions() {
            return this.options;
        }
    }

})();

