/**
 * Created by armin on 29.12.15.
 */

var radioCounter = 0;
var checkboxCounter = 0;

var gaptext = angular.module("gaptext", [])
    .config(function($provide) {
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
                    this.$editor().wrapSelection("insertHTML", "<input type='text' value='" + window.getSelection().toString() + "'></input>", true);
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

                    var selection = window.getSelection().toString();

                    if(selection == "") {
                        content = content + "<input ng-model type='checkbox' name='checkbox" + checkboxCounter + "' value='' ";
                    }

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