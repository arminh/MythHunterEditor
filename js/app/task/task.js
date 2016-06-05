/**
 * Created by armin on 29.12.15.
 */

(function () {
    'use strict'

    angular
        .module("task", [])
        .constant("BLOCKELEMENTS", /^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i)
        .config(config);

    config.$inject = ["$provide"];

    function config($provide) {

        var radioGroupCounter = 0;
        var radioCounter = 0;
        var checkboxGroupCounter = 0;
        var checkboxCounter = 0;
        var textBoxCounter = 1;

        $provide.decorator('taOptions', extendTaOptions);

        extendTaOptions.$inject = ["taRegisterTool", "taSelection", "$delegate"];

        function extendTaOptions(taRegisterTool, taSelection, taOptions) { // $delegate is the taOptions we are decorating
            var toolbarQuiz = [
                ['h1', 'h2', 'h3', 'p'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
                ['insertImage', 'insertLink', 'insertVideo'],
                ['input', 'radio', 'checkbox']
            ];

            taRegisterTool('input', {
                iconclass: "fa fa-file-text-o inputBox",
                tooltiptext: "Input box",
                action: addInputBox
            });

            taRegisterTool('radio', {
                iconclass: "fa fa-dot-circle-o radioBtn",
                tooltiptext: "Radio button",
                action: addRadioGroup
            });

            taRegisterTool('checkbox', {
                iconclass: "fa fa-check-square-o checkBox",
                tooltiptext: "Checkbox",
                action: addCheckboxGroup
            });

            //taOptions.toolbar[4].push('input');
            //taOptions.toolbar[4].push('radio');
            //taOptions.toolbar[4].push('checkbox');

            return taOptions;
        }

        function addInputBox() {
            checkboxCounter = getElementCount("checkbox", this.$editor().html) + 1;

            var selection = window.getSelection().toString();

            var content = "<input ";
            content += "id='textbox" + textBoxCounter++ + "' ";
            content += "type='text' ";
            content += "value='" + selection + "' ";
            content = content + "/>";

            this.$editor().wrapSelection("insertHTML", content);
        }

        function addRadioGroup() {

            radioGroupCounter = getElementCount('name="radio', this.$editor().html) + 1;
            radioCounter = getElementCount('id="radioBtn', this.$editor().html) + 1;

            var name = "radio" + radioGroupCounter;
            var selection = window.getSelection().toString();
            var options = selection.split("\n");
            var content = "<p>";

            for (var i = 0; i < options.length; i++) {
                if (options[i] != "") {
                    var id = "radioBtn" + radioCounter++;

                    content += "<label><input ";
                    content += "id='" + id + "' ";
                    content += "type='radio' ";
                    content += "name='" + name + "' ";
                    content += "value='" + options[i] + "' ";
                    content = content + "/>" + options[i] + "</label><br>";
                }
            }

            radioCounter++;
            this.$editor().wrapSelection("insertHTML", content);

        }

        function addCheckboxGroup() {

            checkboxGroupCounter = getElementCount('name="checkbox', this.$editor().html) + 1;
            checkboxCounter = getElementCount('id="checkboxBtn', this.$editor().html) + 1;

            var name = "checkbox" + checkboxGroupCounter;
            var selection = window.getSelection().toString();
            var options = selection.split("\n");
            var content = "<p>";

            for (var i = 0; i < options.length; i++) {
                if (options[i] != "") {
                    var id = "checkboxBtn" + checkboxCounter++;

                    content += "<label><input ";
                    content += "id='" + id + "' ";
                    content += "type='checkbox' ";
                    content += "name='" + name + "' ";
                    content += "value='" + options[i] + "' ";
                    content = content + "/>" + options[i] + "</label><br>";
                }
            }

            this.$editor().wrapSelection("insertHTML", content);
        }

        function getElementCount(element, string) {
            var regexString = element + '(.)\" ';
            var regex = new RegExp(regexString, "g");

            var res = null;
            var max = 0;
            do {
                res = regex.exec(string);
                if (res) {
                    var val = parseInt(res[1]);
                    max = val > max ? val : max;
                }

            } while (res);

            return max;
        }

        function handleExercise(selectedElement, exerciseType, taSelection) {
            var $selected = angular.element(selectedElement);
            if (selectedElement !== undefined) {
                var tagName = selectedElement.tagName.toLowerCase();

                if (tagName === "input") {

                } else if (tagName.match(BLOCKELEMENTS) && !$selected.hasClass('ta-bind')) {

                } else if (tagName.match(BLOCKELEMENTS)) {
                   var  _nodes = taSelection.getOnlySelectedElements();
                    if (_nodes.length === 0) {
                        var $target = angular.element('<' + selfTag + '><li>' + selectedElement.innerHTML + '</li></' + selfTag + '>');
                        $selected.html('');
                        $selected.append($target);
                    }
                }
            }
        }
    }
})();








