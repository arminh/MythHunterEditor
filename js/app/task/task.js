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

        $provide.decorator('taOptions', extendTaOptions);

        extendTaOptions.$inject = ["taRegisterTool", "taSelection", "$delegate"];

        function extendTaOptions(taRegisterTool, taSelection_, taOptions) { // $delegate is the taOptions we are decorating
            console.log(taSelection);
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

            addGroup("radio", radioCounter, radioGroupCounter);
        }

        function addCheckboxGroup() {

            checkboxGroupCounter = getElementCount('name="checkbox', this.$editor().html) + 1;
            checkboxCounter = getElementCount('id="checkboxBtn', this.$editor().html) + 1;

            addGroup("checkbox", checkboxCounter, checkboxGroupCounter);
        }


        function addGroup(type) {
            var i, $target, html, _nodes, next, optionsTagName, selectedElement, ourSelection;
            ourSelection = taSelection.getSelection();
            selectedElement = taSelection.getSelectionElement();
            var $selected = angular.element(selectedElement);
            var tagName = (selectedElement && selectedElement.tagName && selectedElement.tagName.toLowerCase());
            var quizToSameQuiz = false;

            var elType = getQuizGroupType(selectedElement);
            if (elType == "radio") {
                if (type == "radio") {
                    quizToSameQuiz = true;
                }
            } else if (elType == "checkbox") {
                if (type == "checkbox") {
                    quizToSameQuiz = true;

                }
            }

            var selectedElements = taSelection.getOnlySelectedElements();

            var selfTag = "fieldset";
            var taDefaultWrap = "p";

            if (selectedElements.length > 1 && tagName == "fieldset") {
                return listElementsToSelfTag($selected, selectedElements, type, quizToSameQuiz, taDefaultWrap);
            }

            if (quizToSameQuiz) {
                // if all selected then we should remove the list
                // grab all li elements and convert to taDefaultWrap tags
                //console.log('tagName===selfTag');
                if ($selected[0].childNodes.length !== selectedElements.length) {
                    $selected = angular.element(selectedElements[0]);
                    return listElementToSelfTag($selected.parent(), $selected, type, true, taDefaultWrap);
                } else {
                    return listToDefault($selected, taDefaultWrap);
                }
            } else if (tagName === 'label') {
                var group = $selected.parent().parent();
                if (group.children().length === 1) {
                    var groupType = getQuizGroupType(group[0]);
                    if (groupType == "radio") {
                        if (type == "radio") {
                            return listToDefault(group, taDefaultWrap);
                        } else {
                            return listToList(group, type);
                        }
                    } else if (groupType == "checkbox") {
                        if (type == "checkbox") {
                            return listToDefault(group, taDefaultWrap);
                        } else {
                            return listToList(group, type);
                        }
                    }
                } else {
                    listElementToSelfTag(group, $selected.parent(), type, getQuizGroupType(group[0]) == type, taDefaultWrap);
                }
                // catch for the previous statement if only one li exists

            } else if (tagName.match(BLOCKELEMENTS) && !$selected.hasClass('ta-bind')) {
                // if it's one of those block elements we have to change the contents
                // if it's a ol/ul we are changing from one to the other
                if (selectedElements.length) {
                    if ($selected[0].childNodes.length !== selectedElements.length && selectedElements.length === 1) {
                        //console.log('&&&&&&&&&&&&&&& --------- &&&&&&&&&&&&&&&&', selectedElements[0], $selected[0].childNodes);
                        $selected = angular.element(selectedElements[0]);
                        return listElementToSelfTag($selected.parent(), $selected, type, quizToSameQuiz, taDefaultWrap);
                    }
                }
                if (tagName == "fieldset") {
                    // now if this is a set of selected elements... behave diferently
                    return listToList($selected, selfTag);
                } else {
                    var childBlockElements = false;
                    angular.forEach($selected.children(), function (elem) {
                        if (elem.tagName.match(BLOCKELEMENTS)) {
                            childBlockElements = true;
                        }
                    });
                    if (childBlockElements) {
                        return childElementsToList($selected.children(), $selected, type);
                    } else {
                        return childElementsToList([angular.element('<div>' + selectedElement.innerHTML + '</div>')[0]], $selected, type);
                    }
                }
            } else if (tagName.match(BLOCKELEMENTS)) {
                // if we get here then the contents of the ta-bind are selected
                _nodes = taSelection.getOnlySelectedElements();
                //console.log('_nodes', _nodes, tagName);
                if (_nodes.length === 0) {
                    // here is if there is only text in ta-bind ie <div ta-bind>test content</div>
                    $target = angular.element(encloseQuizGroupElements(newQuizGroupElement(selectedElement, type)));
                    $selected.html('');
                    $selected.append($target);
                } else if (_nodes.length === 1 && (_nodes[0].tagName.toLowerCase() === 'ol' || _nodes[0].tagName.toLowerCase() === 'ul')) {
                    //TODO
                    if (_nodes[0].tagName.toLowerCase() === selfTag) {
                        // remove
                        return listToDefault(angular.element(_nodes[0]), taDefaultWrap);
                    } else {
                        return listToList(angular.element(_nodes[0]), type);
                    }
                } else {
                    html = '';
                    var $nodes = [];
                    for (i = 0; i < _nodes.length; i++) {
                        /* istanbul ignore else: catch for real-world can't make it occur in testing */
                        if (_nodes[i].nodeType !== 3) {
                            var $n = angular.element(_nodes[i]);
                            /* istanbul ignore if: browser check only, phantomjs doesn't return children nodes but chrome at least does */
                            if (_nodes[i].tagName.toLowerCase() === 'label') continue;
                            else if (getQuizGroupType(_nodes[i]) == "radio" || getQuizGroupType(_nodes[i]) == "checkbox") {
                                // if it's a list, add all it's children
                                var children = $n[0].children;
                                for(var j = 0; j < children.length; j++) {
                                    html += newQuizGroupElement(stripQuizGroupElement(children[j]), type);
                                }
                            } else if (_nodes[i].tagName.toLowerCase() === 'span' && (_nodes[i].childNodes[0].tagName.toLowerCase() === 'ol' || _nodes[i].childNodes[0].tagName.toLowerCase() === 'ul')) {
                                html += $n[0].childNodes[0].innerHTML; // if it's a list, add all it's children
                            } else {
                                html += newQuizGroupElement($n[0], type);
                            }
                            $nodes.unshift($n);
                        }
                    }
                    //console.log('$nodes', $nodes);
                    $target = angular.element(encloseQuizGroupElements(html, type));
                    $nodes.pop().replaceWith($target);
                    angular.forEach($nodes, function ($node) {
                        $node.remove();
                    });
                }
                taSelection.setSelectionToElementEnd($target[0]);
                return;
            }
        }

        function childElementsToList(elements, listElement, type) {
            var html = "";

            for (var i = 0; i < elements.length; i++) {
                html += newQuizGroupElement(elements[0], type);
            }
            html = encloseQuizGroupElements(html, type);
            radioCounter++;
            var $target = angular.element(html);
            listElement.after($target);
            listElement.remove();
            taSelection.setSelectionToElementEnd($target.find('label')[0]);
        }

        function encloseQuizGroupElements(elements, type) {
            var html = '<fieldset class="' + type + '-group" style="background-color: lightblue; margin-bottom: 3px;">';
            html += elements;
            html += '</fieldset>';

            if (type == "radio") {
                radioGroupCounter++;
            } else {
                checkboxGroupCounter++;
            }
            return html;
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

        function newQuizGroupElement(el, type) {
            var id;
            var name;
            if (type == "radio") {
                id = "radioBtn" + radioCounter++;
                name = type + radioGroupCounter;
            } else {
                id = "checkboxBtn" + checkboxCounter++;
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

            var html = '<p style="text-indent: 20px;"><label style="font-weight: normal"><input' +
                ' type="' + type + '"' +
                ' id="' + id + '"' +
                ' name="' + name + '"' +
                ' value="' + value + '"/>' +
                content +
                '</label></p>';

            return html;
        }

        function stripQuizGroupElement(groupEl) {
            var el = $(groupEl);
            var label = $(el.find("label")[0]);
            if(!label) {
                return el;
            }
            var input = $(label.find("input")[0]);
            input.remove();
            var html = label.text();

            label.remove();
            return html;
        }

        var listToDefault = function (listElement, defaultWrap) {
            var $target, i;
            // if all selected then we should remove the list
            // grab all li elements and convert to taDefaultWrap tags
            var children = listElement.find('p');
            for (i = children.length - 1; i >= 0; i--) {
                $target = angular.element('<' + defaultWrap + '>' + stripQuizGroupElement(children[i]) + '</' + defaultWrap + '>');
                listElement.after($target);
            }
            listElement.remove();
            taSelection.setSelectionToElementEnd($target[0]);
        };

        var listElementToSelfTag = function (list, listElement, type, bDefault, defaultWrap) {
            var $target, i;
            // if all selected then we should remove the list
            // grab all li elements
            var priorElement;
            var nextElement;
            var children = list.find('p');
            var foundIndex;
            for (i = 0; i < children.length; i++) {
                if (children[i].outerHTML === listElement[0].outerHTML) {
                    // found it...
                    foundIndex = i;
                    if (i > 0) {
                        priorElement = children[i - 1];
                    }
                    if (i + 1 < children.length) {
                        nextElement = children[i + 1];
                    }
                    break;
                }
            }
            //console.log('listElementToSelfTag', list, listElement, selfTag, bDefault, priorElement, nextElement);
            // un-list the listElement
            var html = '';
            if (bDefault) {
                html += '<' + defaultWrap + '>' + stripQuizGroupElement(listElement[0]) + '</' + defaultWrap + '>';
            } else {
                var content = newQuizGroupElement(stripQuizGroupElement(listElement[0]), type);
                html += encloseQuizGroupElements(content, type)
            }
            $target = angular.element(html);
            //console.log('$target', $target[0]);
            if (!priorElement) {
                // this is the first the list, so we just remove it...
                listElement.remove();
                //list.after(angular.element(list[0].outerHTML));
                list.after($target);
                list.remove();
                taSelection.setSelectionToElementEnd($target[0]);
                return;
            } else if (!nextElement) {
                // this is the last in the list, so we just remove it..
                listElement.remove();
                list.after($target);
                taSelection.setSelectionToElementEnd($target[0]);
            } else {
                var html1 = '';
                var type = getQuizGroupType(list[0]);
                for (i = 0; i < foundIndex; i++) {
                    html1 += newQuizGroupElement(stripQuizGroupElement(children[i]), type);
                }
                html1 = encloseQuizGroupElements(html1, type);
                var html2 = '';
                for (i = foundIndex + 1; i < children.length; i++) {
                    html2 += newQuizGroupElement(stripQuizGroupElement(children[i]), type);
                }
                html2 = encloseQuizGroupElements(html2, type);
                list.after(angular.element(html2));
                list.after($target);
                list.after(angular.element(html1));
                list.remove();
                //console.log('parent ******XXX*****', p[0]);
                taSelection.setSelectionToElementEnd($target[0]);
            }
        };


        var listElementsToSelfTag = function (list, listElements, type, bDefault, defaultWrap) {
            var $target, i, j, p;
            // grab all li elements
            var priorElement;
            var afterElement;
            //console.log('list:', list, 'listElements:', listElements, 'selfTag:', selfTag, 'bDefault:', bDefault);
            var children = list.find('p');
            var foundIndexes = [];
            for (i = 0; i < children.length; i++) {
                for (j = 0; j < listElements.length; j++) {
                    if (children[i].isEqualNode(listElements[j])) {
                        // found it...
                        foundIndexes[j] = i;
                    }
                }
            }
            if (foundIndexes[0] > 0) {
                priorElement = children[foundIndexes[0] - 1];
            }
            if (foundIndexes[listElements.length - 1] + 1 < children.length) {
                afterElement = children[foundIndexes[listElements.length - 1] + 1];
            }
            //console.log('listElementsToSelfTag', list, listElements, selfTag, bDefault, !priorElement, !afterElement, foundIndexes[listElements.length-1], children.length);
            // un-list the listElements
            var html = '';
            if (bDefault) {
                for (j = 0; j < listElements.length; j++) {
                    html += '<' + defaultWrap + '>' + stripQuizGroupElement(listElements[j]) + '</' + defaultWrap + '>';
                    listElements[j].remove();
                }
            } else {
                for (j = 0; j < listElements.length; j++) {
                    html += newQuizGroupElement(stripQuizGroupElement(listElements[j]), type);
                    listElements[j].remove();
                }
                html = encloseQuizGroupElements(html, type);
            }
            $target = angular.element(html);
            if (!priorElement) {
                // this is the first the list, so we just remove it...
                // list.after(angular.element(list[0].outerHTML));
                list.after($target);
                list.remove();
                taSelection.setSelectionToElementEnd($target[0]);
                return;
            } else if (!afterElement) {
                // this is the last in the list, so we just remove it..
                list.after($target);
                taSelection.setSelectionToElementEnd($target[0]);
                return;
            } else {
                // okay it was some where in the middle... so we need to break apart the list...
                var html1 = '';
                var type = getQuizGroupType(list[0]);
                for (i = 0; i < foundIndexes[0]; i++) {
                    html1 += newQuizGroupElement(stripQuizGroupElement(children[i]), type);
                }
                html1 = encloseQuizGroupElements(html1, type);
                var html2 = '';
                for (i = foundIndexes[listElements.length - 1] + 1; i < children.length; i++) {
                    html2 += newQuizGroupElement(stripQuizGroupElement(children[i]), type);
                }
                html2 = encloseQuizGroupElements(html2, type);
                list.after(angular.element(html2));
                list.after($target);
                list.after(angular.element(html1));
                list.remove();
                //console.log('parent ******YYY*****', list.parent()[0]);
                taSelection.setSelectionToElementEnd($target[0]);
            }
        };

        function selectLi(liElement) {
            if (/(<br(|\/)>)$/i.test(liElement.innerHTML.trim())) taSelection.setSelectionBeforeElement(angular.element(liElement).find("br")[0]);
            else taSelection.setSelectionToElementEnd(liElement);
        }

        var listToList = function(listElement, type){
            var group = listElement[0];
            var children = group.children;

            var html = "";
            for (i = 0; i < children.length; i++) {
                var childText = stripQuizGroupElement(children[0]);
                html += newQuizGroupElement(childText, type);
            }
            var newGroup = angular.element(encloseQuizGroupElements(html, type));

            listElement.after(newGroup);
            listElement.remove();
            var firstElement = newGroup.find('label')[0];
            selectLi(firstElement);
        };

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
                    var _nodes = taSelection.getOnlySelectedElements();
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








