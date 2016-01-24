/**
 * Created by armin on 29.12.15.
 */

var BLOCKELEMENTS = /^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i;

var radioCounter = 0;
var checkboxCounter = 0;

var taskEditor = angular.module("taskeditor", []);

taskEditor.directive('taskEditor', function() {
    console.log("taskEditor directive");
    return {
        restrict: 'E',
        scope: {
            content: "="
        },
        templateUrl: 'js/app/task/taskeditor.tpl.html',
        controller: "taskeditorController"
    };
});


taskEditor.config(function($provide) {
        $provide.decorator('taOptions', ['taRegisterTool', 'taSelection', '$delegate', function(taRegisterTool, taSelection, taOptions) { // $delegate is the taOptions we are decorating
            taOptions.toolbar = [
                ['h1', 'h2', 'h3', 'p'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
                ['insertImage','insertLink', 'insertVideo'],
                []
            ];

            taRegisterTool('inputBox', {
                iconclass: "fa fa-file-text-o inputBox",
                tooltiptext: "Input box",
                action: function(){
                }
            });
            taOptions.toolbar[4].push('inputBox');

            taRegisterTool('radio', {
                iconclass: "fa fa-dot-circle-o radioBtn",
                tooltiptext: "Radio button",
                action: function(){
                    var selection = window.getSelection().toString();

                    var options = selection.split("\n");

                    var content = "";

                    for(var i = 0; i < options.length; i++) {
                        if(options[i] != "") {
                            content = content + "<input type='radio' name='radio" + radioCounter + "' value='" + options[i] + "' ";

                            content = content + ">" + options[i] + "<br>";
                        }
                    }

                    radioCounter++;
                    this.$editor().wrapSelection("insertHTML", content);
                }
            });

            taOptions.toolbar[4].push('radio');

            taRegisterTool('checkbox', {
                iconclass: "fa fa-check-square-o checkBox",
                tooltiptext: "Checkbox",
                action: function(){

                    /*try{
                        selectedElement = taSelection.getSelectionElement();
                    }catch(e){}

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
                    }*/


                    //handleExercise(selectedElement, "checkbox", taSelection);

                    var selection = window.getSelection().toString();

                    var options = selection.split("\n");
                    var content = "";

                    for(var i = 0; i < options.length; i++) {
                        if(options[i] != "") {
                            content = content + "<input ng-model type='checkbox' name='checkbox" + checkboxCounter + "' value='" + options[i] + "' ";
                            content = content + " >" + options[i] + "<br>";
                        }
                    }

                    checkboxCounter++;

                    this.$editor().wrapSelection("insertHTML", content);
                },
            });
            taOptions.toolbar[4].push('checkbox');

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