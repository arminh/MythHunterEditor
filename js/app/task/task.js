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
        var taSelection = null;
        var selected = null;

        $provide.decorator('taOptions', extendTaOptions);

        extendTaOptions.$inject = ["taRegisterTool", "taSelection", "$delegate", "$mdDialog"];

        function extendTaOptions(taRegisterTool, taSelection_, taOptions, $mdDialog) { // $delegate is the taOptions we are decorating
            taSelection = taSelection_;

            var toolbarQuiz = [
                ['h1', 'h2', 'h3', 'p'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
                ['insertImage', 'insertLink', 'insertVideo'],
                ['input', 'radio', 'checkbox']
            ];

            taRegisterTool('input', {
                iconclass: "fa fa-file-text-o inputBox",
                class: "btn btn-primary",
                tooltiptext: "Input box",
                action: function () {
                    createQuizInput($mdDialog, this.$editor());
                }
            });

            taRegisterTool('radio', {
                iconclass: "fa fa-dot-circle-o radioBtn",
                class: "btn btn-primary",
                tooltiptext: "Radio button",
                action: function (value) {
                    console.log(this.$editor);
                    console.log(this.$editor());
                    createQuizGroup("radio", $mdDialog, this.$editor());
                }
            });

            taRegisterTool('checkbox', {
                iconclass: "fa fa-check-square-o checkBox",
                class: "btn btn-primary",
                tooltiptext: "Checkbox",
                action: function (value) {
                    createQuizGroup("checkbox", $mdDialog, this.$editor());
                }
            });

            //taOptions.toolbar[4].push('input');
            //taOptions.toolbar[4].push('radio');
            //taOptions.toolbar[4].push('checkbox');

            return taOptions;
        }

        function createQuizInput($mdDialog, editor) {

            var selectedElement = taSelection.getSelectionElement();
            selected = angular.element(selectedElement);

            var promise = $mdDialog.show({
                templateUrl: 'js/app/task/quiz-input/quiz-input.tpl.html',
                controller: 'QuizInputController',
                controllerAs: "quizInputCtrl",
                bindToController: true,
                multiple: true,
            });

            promise.then(function(text) {
                var content = "<input ";
                content += "id='textbox" + textBoxCounter++ + "' ";
                content += "class='quiz-input'",
                content += "type='text' ";
                content += "value='" + text + "' ";
                content = content + "/>";


                selected.append(angular.element(content));
            });
        }

        function createQuizGroup(type, $mdDialog, editor) {

            var selectedElement = taSelection.getSelectionElement();
            selected = angular.element(selectedElement);

            var promise = $mdDialog.show({
                templateUrl: 'js/app/task/quiz-group/quiz-group.tpl.html',
                controller: 'QuizGroupController',
                controllerAs: "quizGroupCtrl",
                bindToController: true,
                multiple: true,
                locals: {
                    type: type
                }
            });

            promise.then(function(group) {

                if(type == "radio") {
                    radioGroupCounter = getNewGroupIdCount("radio", editor.html);
                    radioCounter = 0;
                } else if(type == "checkbox") {
                    checkboxGroupCounter = getNewGroupIdCount("checkbox", editor.html);
                    checkboxCounter = 0;
                }

                addGroup(group)
            });


        }

        function addGroup(group) {


            var html = "<div class='quiz-group-container'>";
            html += "<p>" + group.getQuestion() + "</p>";
            html += '<div class="' + group.getType() + '-group" style="margin-bottom: 3px;">';
            var options = group.getOptions();
            for(var i = 0; i < options.length; i++) {
                html += createQuizGroupElement(options[i].text, group.getType(), options[i].selected);
            }
            html += '</div>';
            html += '</div>';
            html += '<p><br></p>';

            if (group.getType() == "radio") {
                radioGroupCounter++;
            } else {
                checkboxGroupCounter++;
            }
            selected.append(angular.element(html));
        }

        function createQuizGroupElement(el, type, checked) {
            var id;
            var name;
            if (type == "radio") {
                id = "radio" + radioGroupCounter + "-" + radioCounter++;
                name = type + radioGroupCounter;
            } else {
                id = "checkbox" + checkboxGroupCounter + "-" + checkboxCounter++;
                name = type + checkboxGroupCounter;
            }

            var content = "";
            var value = "";

            if (el.innerHTML) {
                content = el.innerHTML;
                value = el.innerText;
            } else {
                content = el;
                value = el;
            }

            var html = '<p class="quiz-group-option"><label><input' +
                ' type="' + type + '"' + ' id="' + id + '"' + ' name="' + name + '"';
            if (checked) {
                html += ' checked';
            }
            html += ' value="' + value + '"/>' + content + '</label></p>';

            return html;
        }

        function getNewGroupIdCount(type, string) {
            var regexString = 'name="' + type + '(.)\" ';
            var regex = new RegExp(regexString, "g");

            var res = null;
            var max = 0;
            do {
                res = regex.exec(string);
                if (res) {
                    var val = parseInt(res[1]) + 1;
                    max = val > max ? val : max;
                }

            } while (res);

            return max;
        }
    }
})();