/**
 * Created by armin on 29.12.15.
 */

(function () {
    'use strict';

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

        $provide.decorator('taTranslations', extendTaTranslation);

        extendTaTranslation.inject = ["$delegate", "$translate"];

        function extendTaTranslation($delegate) {
            $delegate.heading.tooltip = "{{'TOOLTIP_H' | translate}}";
            $delegate.redo.tooltip = "{{'TOOLTIP_REDO' | translate}}";
            $delegate.undo.tooltip = "{{'TOOLTIP_UNDO' | translate}}";
            $delegate.justifyLeft.tooltip = "{{'TOOLTIP_ALIGN_LEFT' | translate}}";
            $delegate.justifyCenter.tooltip = "{{'TOOLTIP_ALIGN_CENTER' | translate}}";
            $delegate.justifyRight.tooltip = "{{'TOOLTIP_ALIGN_RIGHT' | translate}}";
            $delegate.bold.tooltip = "{{'TOOLTIP_B' | translate}}";
            $delegate.italic.tooltip = "{{'TOOLTIP_I' | translate}}";
            $delegate.underline.tooltip = "{{'TOOLTIP_U' | translate}}";
            $delegate.insertLink.tooltip = "{{'TOOLTIP_LINK' | translate}}";
            // $delegate.insertLink.dialogPrompt = "{{'TOOLTIP_LINK_DIALOG' | translate}}";
            $delegate.insertVideo.tooltip = "{{'TOOLTIP_VIDEO' | translate}}";
            // $delegate.insertVideo.dialogPrompt = "{{'TOOLTIP_VIDEO_PROMPT' | translate}}";
            $delegate.insertImage.tooltip = "{{'TOOLTIP_IMAGE' | translate}}";
            // $delegate.insertImage.dialogPrompt = "{{'TOOLTIP_IMAGE_DIALOG' | translate}}";
            $delegate.indent.tooltip = "{{'TOOLTIP_INCREASE_INDENT' | translate}}";
            $delegate.outdent.tooltip = "{{'TOOLTIP_DECREASE_INDENT' | translate}}";
            $delegate.clear.tooltip = "{{'TOOLTIP_CLEAR' | translate}}";
            return $delegate;
        }

        $provide.decorator('taOptions', extendTaOptions);

        extendTaOptions.$inject = ["textAngularManager", "taRegisterTool", "taSelection", "taTranslations", "taToolFunctions", "$window", "$delegate", "$mdDialog", "$translate"];

        function extendTaOptions(textAngularManager, taRegisterTool, taSelection_ , taTranslations, taToolFunctions, $window, taOptions, $mdDialog, $translate) { // $delegate is the taOptions we are decorating
            taSelection = taSelection_;

            taRegisterTool('insertPicture', {
                iconclass: 'fa fa-picture-o',
                tooltiptext: "{{'TOOLTIP_IMAGE' | translate}}",
                action: function(){
                    var imageLink;
                    imageLink = $window.prompt(taTranslations.insertImage.dialogPrompt, 'http://');
                    if(imageLink && imageLink !== '' && imageLink !== 'http://'){
                        imageLink = imageLink.replace(/\?.*/, "");
                        /* istanbul ignore next: don't know how to test this... since it needs a dialogPrompt */
                        // block javascript here
                        if (!blockJavascript(imageLink)) {
                            if (taSelection.getSelectionElement().tagName && taSelection.getSelectionElement().tagName.toLowerCase() === 'a') {
                                // due to differences in implementation between FireFox and Chrome, we must move the
                                // insertion point past the <a> element, otherwise FireFox inserts inside the <a>
                                // With this change, both FireFox and Chrome behave the same way!
                                taSelection.setSelectionAfterElement(taSelection.getSelectionElement());
                            }
                            // In the past we used the simple statement:
                            //return this.$editor().wrapSelection('insertImage', imageLink, true);
                            //
                            // However on Firefox only, when the content is empty this is a problem
                            // See Issue #1201
                            // Investigation reveals that Firefox only inserts a <p> only!!!!
                            // So now we use insertHTML here and all is fine.
                            // NOTE: this is what 'insertImage' is supposed to do anyway!
                            var embed = '<img class="task-image" src="' + imageLink + '">';
                            return this.$editor().wrapSelection('insertHTML', embed, true);
                        }
                    }
                },
                // onElementSelect: {
                //     element: 'img',
                //     action: taToolFunctions.imgOnSelectAction
                // }
            });

            /* istanbul ignore next: if it's javascript don't worry - though probably should show some kind of error message */
            var blockJavascript = function (link) {
                if (link.toLowerCase().indexOf('javascript')!==-1) {
                    return true;
                }
                return false;
            };

            // taRegisterTool('insertPicture', {
            //     iconclass: 'fa fa-picture-o',
            //     tooltiptext: taTranslations.insertImage.tooltip,
            //     action: function(){
            //         var imageLink;
            //         imageLink = $window.prompt(taTranslations.insertImage.dialogPrompt, 'http://');
            //         if(imageLink && imageLink !== '' && imageLink !== 'http://'){
            //             imageLink = imageLink.replace(/\?.*/, "");
            //             return this.$editor().wrapSelection('insertImage', imageLink, true);
            //         }
            //     },
            //     // onElementSelect: {
            //     //     element: 'img',
            //     //     action: taToolFunctions.imgOnSelectAction
            //     // }
            // });

            taRegisterTool('input', {
                iconclass: "fa fa-file-text-o inputBox",
                buttontext: " Gap-fill",
                class: "btn btn-primary task-input",
                tooltiptext: "{{'TOOLTIP_INPUT' | translate}}",
                action: function () {
                    createQuizInput($mdDialog, this.$editor()).then(function() {
                        textAngularManager.refreshEditor('task-editor-quiz');
                    });
                }
            });

            taRegisterTool('radio', {
                iconclass: "fa fa-dot-circle-o radioBtn",
                buttontext: " Single Choice",
                class: "btn btn-primary task-radio",
                tooltiptext: "{{'TOOLTIP_RADIO_BUTTON' | translate}}",
                action: function (value) {
                    console.log(this.$editor);
                    console.log(this.$editor());
                    createQuizGroup("radio", $mdDialog, this.$editor()).then(function() {
                        textAngularManager.refreshEditor('task-editor-quiz');
                    });
                }
            });

            taRegisterTool('checkbox', {
                iconclass: "fa fa-check-square-o checkBox",
                buttontext: " Multiple Choice",
                class: "btn btn-primary task-checkbox",
                tooltiptext: "{{'TOOLTIP_CHECKBOX' | translate}}",
                action: function (value) {
                    createQuizGroup("checkbox", $mdDialog, this.$editor()).then(function() {
                        textAngularManager.refreshEditor('task-editor-quiz');
                    });
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
                multiple: true
            });

            promise.then(function(parts) {
                var content = "<p>";
                for(var i = 0; i < parts.length; i++) {
                    if(parts[i].type == "text") {
                        content += parts[i].text;
                    } else {
                        content += "<input ";
                        content += "id='textbox" + textBoxCounter++ + "' ";
                        content += "class='quiz-input'";
                        content += "type='text' ";
                        content += "value='" + parts[i].text + "' ";
                        content += "/>";
                    }
                }
                content += "</p><br>";
                var element = angular.element(content);
                selected.after(element);
                taSelection.setSelectionToElementEnd(element[0]);
                return null;
            });

            return promise;
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

                addGroup(group);
                return null;
            });

            return promise;
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

            var html = '<p class="quiz-group-option"><label style="font-weight: normal"><input' +
                ' type="' + type + '"' +
                ' id="' + id + '"' +
                ' name="' + name + '"';

            if(checked) {
                html += ' checked';
            }

            html += ' value="' + value + '"/>' +
                content +
                '</label></p>';

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