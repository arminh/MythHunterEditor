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
            "/": '&#47;'
        };

        var resersedMap = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#47;": '/'
        };

        this.encloseContent = encloseContent;
        this.retrieveContent = retrieveContent;
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

        function encloseContent(content) {
            return $templateRequest("js/app/task/remoteTask.tpl.html").then(function(template) {

                var templateParts = template.split("[Quest Content]");
                var result = templateParts[0] + content + templateParts[1];
                return escape(result);
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
    }

})();

