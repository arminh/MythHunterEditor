/**
 * Created by Hannah on 16.03.2017.
 */

(function () {
    'use strict';

    angular
        .module('task')
        .factory('TextAngularHandler', TextAngularHandler);

    TextAngularHandler.$inject = ["taSelection"];

    /* @ngInject */
    function TextAngularHandler(taSelection) {
        var service = {
            restoreContent: restoreContent,
            prepareContent: prepareContent,
            retrieveCheckedAttributes: retrieveCheckedAttributes,
            removeQuizFeatures: removeQuizFeatures,
            removeInvisibleFeatures: removeInvisibleFeatures,
            enterKeyPressed: enterKeyPressed
        };
        return service;

        ////////////////

        function restoreContent(content, answers) {
            content = restoreTags(content);
            return setCheckedAttributes(content, answers);
        }

        function setCheckedAttributes(content, answers) {
            angular.forEach(answers, function(val, key) {
                if(val == true) {
                    content = content.replace('id="' + key + '"', 'id="' + key + '" checked');
                }
            });

            return content;
        }

        function restoreTags(content) {
            content = content.replace(/<div (class=\"(?:radio|checkbox)-group\")/g, "<fieldset $1");
            return content.replace(/<\/div>/g, "<\/fieldset>");
        }

        function prepareContent(content) {
            content = clearCheckedAttributes(content);
            content = replaceTags(content);
            return content;
        }

        function retrieveCheckedAttributes(answers) {
            var textAngular = $('text-angular#task-editor-quiz div[id^="taTextElement"]');
            var inputElements = textAngular.find("input");
            if(inputElements.length == 0) {
                return answers;
            }

            for(var i = 0; i < inputElements.length; i++) {
                if(inputElements[i].id != "") {
                    answers[inputElements[i].id] = inputElements[i].checked;
                }
            }
            return answers;
        }

        function clearCheckedAttributes(content) {
            var checked = new RegExp(' checked=""', "g");
            var checked2 = new RegExp(' checked', "g");
            var content = content.replace(checked,"").replace(checked2,"");
            return content;
        }

        function replaceTags(content) {
            content = content.replace(/<fieldset/g, "<div");
            content = content.replace(/<\/fieldset>/g, "<\/div>");
            return content;
        }


        function removeQuizFeatures(content) {
            var group = new RegExp("<fieldset.*?>(.*?)<\/fieldset>", "g");
            var quizItem = new RegExp("<label><input.*?>(.*?)<\/label>", "g");
            var regexInputBox = new RegExp("<input.*? value\=\"(.*?)\"\/>", "g");

            content = content.replace(group, "$1");
            content = content.replace(quizItem, "$1");
            content = content.replace(regexInputBox, "$1");
            content = content.replace("<label>", "");
            return content.replace("</label>", "");
        }

        function removeInvisibleFeatures(content) {
            return content;
        }

        function enterKeyPressed(event) {

            var selectedElement = taSelection.getSelectionElement();
            var $selected = angular.element(selectedElement);
            var tagName = (selectedElement && selectedElement.tagName && selectedElement.tagName.toLowerCase());

            if(tagName == "label" || (tagName == "p" && $selected.find("label").length > 0) || tagName == "fieldset") {
                var group;
                var inputField;
                var label;
                var p;

                event.preventDefault();
                event.stopPropagation();

                if(tagName == "label") {
                    label = $selected;
                    p = $selected.parent();
                    group = $selected.parent().parent();
                    inputField = $selected.find("input");
                } else if(tagName == "p") {
                    label = $selected.find("label");
                    p = $selected;
                    group = $selected.parent();
                    inputField = $selected.find("input");
                } else if(tagName == "fieldset") {
                    group = $selected;
                    p = group.find("p").last();
                    label = p.find("label");
                    inputField = label.find("input");
                }

                if (label.text().trim() == "") {
                    // if last element is blank, pull element outside.
                    p.remove();
                    var newEl =  angular.element("<p><br></p>");
                    group.after(newEl);

                    if (group.children().length === 0) group.remove();
                    taSelection.setSelectionToElementStart(newEl[0]);
                } else {
                    var type = getQuizGroupType(group[0]);
                    var id = type + getGroupId(inputField) + "-" + (getHighestElementId(group) + 1);
                    var name = inputField.attr("name");
                    var html = angular.element(newQuizGroupElement("", type, name, id));

                    p.after(html);
                    taSelection.setSelectionToElementEnd(html[0]);
                }
            }
        }

        function getQuizGroupType(el) {
            var classNames = el.className.split(' ');
            var type;
            for (var i = 0; i < classNames.length; i++) {
                var className = classNames[i];
                if (className.match("radio-group")) {
                    type = "radio";
                } else if (className.match("checkbox-group")) {
                    type = "checkbox";
                }
            }

            return type;
        }

        function getGroupId(inputField) {
            var name = inputField.attr("name");

            if(name.match(/radio/)) {
                return parseInt(name.match(/radio([0-9]*)/)[1]);
            } else if(name.match(/checkbox/)) {
                return parseInt(name.match(/checkbox([0-9]*)/)[1]);
            }
        }

        function getHighestElementId(group) {
            var elements = group.children();

            var maxId = -1;
            for(var i = 0; i < elements.length; i++) {
                var p = elements[i];
                var label = angular.element(p).find("label");
                var inputField = label.find("input");

                var idName = inputField.attr("id");
                var id = -1;
                if(idName.match(/radio/)) {
                    id = parseInt(idName.match(/radio[0-9]*-([0-9]*)/)[1]);
                } else if(idName.match(/checkbox/)) {
                    id = parseInt(idName.match(/checkbox[0-9]*-([0-9]*)/)[1]);
                }
                maxId = id > maxId ? id : maxId;
            }
            return maxId;
        }

        function newQuizGroupElement(el, type, name, id) {

            var content = "";
            var value = "";

            if (el.innerHTML) {
                content = el.innerHTML;
                value = el.innerText;
            } else {
                content = el;
                value = el;
            }

            var html = '<p style="text-indent: 20px;"><label style="font-weight: normal"><input' +
                ' type="' + type + '"' +
                 ' id="' + id + '"' +
                ' name="' + name + '"' +
                ' value="' + value + '"/>' +
                content +
                '</label></p>';

            return html;
        }
    }

})();

