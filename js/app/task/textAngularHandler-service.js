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
            setCheckedAttributes: setCheckedAttributes,
            retrieveCheckedAttributes: retrieveCheckedAttributes,
            clearCheckedAttributes: clearCheckedAttributes,
            removeQuizFeatures: removeQuizFeatures,
            removeInvisibleFeatures: removeInvisibleFeatures,
            enterKeyPressed: enterKeyPressed
        };
        return service;

        ////////////////

        function setCheckedAttributes(content, answers) {
            angular.forEach(answers, function(val, key) {
                if(val == true) {
                    content = content.replace('id="' + key + '"', 'id="' + key + '"  checked');
                }
            });

            return content;
        }

        function retrieveCheckedAttributes(inputElements, answers) {

            for(var i = 0; i < inputElements.length; i++) {
                if(inputElements[i].id != "") {
                    answers[inputElements[i].id] = inputElements[i].checked;
                }
            }
            return answers;
        }

        function clearCheckedAttributes(content) {
            return content.replace(" checked","");
        }


        function removeQuizFeatures(content) {
            var regex = new RegExp("<label><input.*?>(.*?)<\/label>", "g");
            var regexInputBox = new RegExp("<input.*? value\=\"(.*?)\"\/>", "g");

            content = content.replace(regex, "$1");
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

            if(tagName == "label" || (tagName == "p" && $selected.children()[0].tagName.toLowerCase() == "label")) {
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
                } else {
                    label = $selected.find("label");
                    p = $selected;
                    group = $selected.parent();
                    inputField = $selected.find("input");
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
                    var name = inputField.attr("name");
                    var html = angular.element(newQuizGroupElement("", type, name));

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

        function newQuizGroupElement(el, type, name) {

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
                // ' id="' + id + '"' +
                ' name="' + name + '"' +
                ' value="' + value + '"/>' +
                content +
                '</label></p>';

            return html;
        }
    }

})();

