/**
 * Created by armin on 06.03.16.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .service('HtmlTools', HtmlTools);

    HtmlTools.$inject = ["$templateRequest"];

    /* @ngInject */
    function HtmlTools($templateRequest) {

        //Copied from "https://github.com/janl/mustache.js/blob/master/mustache.js#L82"
        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;',
            "ü": "&uuml;",
            "Ü": "&Uuml;",
            "ö": "&ouml;",
            "Ö": "&Ouml;",
            "ä": "&auml;",
            "Ä": "&Auml;",
            "ß": "&szlig;"
        };

        var resersedMap = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#47;": '/',
            "&uuml;": "ü",
            "&Uuml;": "Ü",
            "&ouml;": "ö",
            "&Ouml;": "Ö",
            "&auml;": "ä",
            "&Auml;": "Ä",
            "&szlig;": "ß"
        };

        this.encloseContent = encloseContent;
        this.retrieveContent = retrieveContent;
        this.retrieveQuestTitle = retrieveQuestTitle;
        this.retrieveTaskTitle = retrieveTaskTitle;
        this.clear = clear;

        ////////////////

        function escape(string) {
            return String(string).replace(/[&<>"'\/]/g, function (s) {
                return entityMap[s];
            });
        }

        function clear(string) {
            return String(string).replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#47;/g, function (s) {
                return resersedMap[s];
            });
        }

        function encloseContent(questTitle, taskTitle, content) {
            return $templateRequest("js/app/task/remoteTask.tpl.html").then(function(template) {
                template = template.replace("[Quest Title]", questTitle);
                template = template.replace("[Task Title]", taskTitle);
                template = template.replace("[Quest Content]", content);

/*                var templateParts = template.split("[Quest Content]");
                var result = templateParts[0] + content + templateParts[1];*/
                return escape(template);
            });
        }

        function retrieveContent(html) {
            if(!html) {
                return "";
            }

            var completeTemplate = clear(html);
            var content = String(completeTemplate).match('<div id="quest-content-text">((?:.|\n)*)<\/div><div id="quest-footer">');

            if(content) {
                return String(content[1]);
            } else {
                return "";
            }
        }

        function retrieveQuestTitle(html) {
            if(!html) {
                return "";
            }

            var completeTemplate = clear(html);
            var questTitle = String(completeTemplate).match('<div id="quest-title">(.*)</div>');

            if(questTitle) {
                return String(questTitle[1]);
            } else {
                return "";
            }
        }

        function retrieveTaskTitle(html) {
            if(!html) {
                return "";
            }

            var completeTemplate = clear(html);
            var taskTitle = String(completeTemplate).match('<div id="task-title">(.*)</div>');

            if(taskTitle) {
                return String(taskTitle[1]);
            } else {
                return "";
            }
        }
    }

})();

