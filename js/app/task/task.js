/**
 * Created by armin on 29.12.15.
 */

var BLOCKELEMENTS = /^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i;

var radioCounter = 1;
var checkboxCounter = 1;
var textBoxCounter = 1;

var task = angular.module("task", []);

task.config(function($provide) {

        $provide.decorator('taOptions', ['taRegisterTool', 'taSelection', '$delegate', function(taRegisterTool, taSelection, taOptions) { // $delegate is the taOptions we are decorating
            var toolbarQuiz = [
                ['h1', 'h2', 'h3', 'p'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
                ['insertImage','insertLink', 'insertVideo'],
                ['input','radio','checkbox']
            ];

            taRegisterTool('input', {
                iconclass: "fa fa-file-text-o inputBox",
                tooltiptext: "Input box",
                action: function(){
                    var selection = window.getSelection().toString();

                    var content = "<input ";
                    content += "id='textbox" + textBoxCounter++ + "' ";
                    content += "type='text' ";
                    content += "value='" + selection + "' ";
                    content = content + "/>";

                    this.$editor().wrapSelection("insertHTML", content);
                }
            });
            //taOptions.toolbar[4].push('inputBox');

            taRegisterTool('radio', {
                iconclass: "fa fa-dot-circle-o radioBtn",
                tooltiptext: "Radio button",
                action: function(){
                    var name = "radio" + radioCounter;
                    radioCounter++;
                    var pointCounter = 1;

                    var selection = window.getSelection().toString();

                    var options = selection.split("\n");

                    var content = "<p>";

                    for(var i = 0; i < options.length; i++) {
                        if(options[i] != "") {
                            var id = "radio" + pointCounter++;

                            content += "<label><input ";
                            content += "id='" + id + "' ";
                            content += "type='radio' ";
                            content += "name='" + name + "' ";
                            content += "value='" + options[i] + "' ";
                            console.log(content);
                            content = content + "/>" + options[i] + "</label><br>";
                        }
                    }

                    radioCounter++;
                    this.$editor().wrapSelection("insertHTML", content);
                }
            });

            //taOptions.toolbar[4].push('radio');

            taRegisterTool('checkbox', {
                iconclass: "fa fa-check-square-o checkBox",
                tooltiptext: "Checkbox",
                action: function(){

                    var name = "checkbox" + checkboxCounter;
                    checkboxCounter++;

                    var pointCounter = 1;

                    var selection = window.getSelection().toString();

                    var options = selection.split("\n");

                    var content = "<p>";

                    for(var i = 0; i < options.length; i++) {
                        if(options[i] != "") {
                            var id = "checkbox" + pointCounter++;

                            content += "<label><input ";
                            content += "id='" + id + "' ";
                            content += "type='checkbox' ";
                            content += "name='" + name + "' ";
                            content += "value='" + options[i] + "' ";
                            console.log(content);
                            content = content + "/>" + options[i] + "</label><br>";
                        }
                    }

                    checkboxCounter++;
                    this.$editor().wrapSelection("insertHTML", content);
                },
            });
            //taOptions.toolbar[4].push('checkbox');

            return taOptions;
        }]);
    });

var handleExercise = function(selectedElement, exerciseType, taSelection) {
    var $selected = angular.element(selectedElement);
    if(selectedElement !== undefined) {
        var tagName = selectedElement.tagName.toLowerCase();

        if(tagName === "input") {

        } else if(tagName.match(BLOCKELEMENTS) && !$selected.hasClass('ta-bind')){

        } else if(tagName.match(BLOCKELEMENTS)){
            _nodes = taSelection.getOnlySelectedElements();
            if(_nodes.length === 0){
                $target = angular.element('<' + selfTag + '><li>' + selectedElement.innerHTML + '</li></' + selfTag + '>');
                $selected.html('');
                $selected.append($target);
            }
        }
    }
};