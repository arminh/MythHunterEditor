/**
 * Created by armin on 09.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeService', QuestTreeService);

    QuestTreeService.$inject = ["$log", "$q", "$translate", "QuestService", "QuestTreeMarker", "QuestTreeLine", "QuestTreeConnector", "TreePartType", "$mdDialog"];

    /* @ngInject */
    function QuestTreeService($log, $q, $translate, QuestService, QuestTreeMarker, QuestTreeLine, QuestTreeConnector, TreePartType, $mdDialog) {
        $log = $log.getInstance("QuestTreeService", debugging);
        var canvasWidth = 960;
        var xPos = 50;
        var xOffset = 70;
        var yPos = 200;
        var yOffset = 100;

        var originalTreeRoot = null;
        var modifiedTreeRoot = null;
        var quest = null;

        var canvas = null;
        var markers = [];
        var connectors = [];
        var markerPromises = {};
        var connectorPromises = {};
        var lines = [];

        var drawing = false;
        var line = null;

        var markerId = 0;
        var lineId = 0;

        var startElement = null;
        var connectorDragging = null;
        var selectedLine = null;

        var markerImgScale = 0.05;
        var positionAnd = {
            top: 10,
            left: 830
        };
        var positionOr = {
            top: 10,
            left: 900
        };

        var service = {
            init: init,
            activateDraw: activateDraw,
            deactivateDraw: deactivateDraw,
            escapeKeyPressed: escapeKeyPressed,
            deleteKeyPressed: deleteKeyPressed,
            saveTree: saveTree
        };
        return service;

        ////////////////

        function init(userQuest) {
            originalTreeRoot = userQuest.getTreePartRoot();
            modifiedTreeRoot = angular.copy(userQuest.getTreePartRoot());
            quest = userQuest;
            markers = [];
            connectors = [];
            markerPromises = {};
            connectorPromises = {};
            lines = [];
            drawing = false;
            line = null;

            xPos = 50;
            yPos = 200;
            markerId = 0;
            lineId = 0;
            startElement = null;
            connectorDragging = null;
            selectedLine = null;

            canvas = new fabric.Canvas('questTree-canvas', {
                targetFindTolerance: 10
            });
            var domCanvas = document.getElementById("questTree-canvas");

            initRightClick();
            initDrag();
            initSelect();
            initGroups();
            initConnectors();

            return $q.when(addTreePart(modifiedTreeRoot, null)).then(activateDraw);
        }

        function escapeKeyPressed() {
            stopDrawing();
        }

        function deleteKeyPressed() {
            console.log("Remove line: ", selectedLine);
            if (selectedLine) {
                removeLine(selectedLine);
                selectedLine = null;
            }
        }

        function removeLine(line) {
            line.remove();
            for(var i = 0; i < lines.length; i++) {
                if(lines[i].getId() == line.getId()) {
                    lines.splice(i, 1);
                    return;
                }
            }
        }

        function removeConnector(connector) {
            connector.remove();
            for(var i = 0; i < connectors.length; i++) {
                if(connectors[i].getId() == connector.getId()) {
                    connectors.splice(i, 1);
                    return;
                }
            }
        }

        function initGroups() {
            canvas.on('selection:created', function (ev) {
                ev.target.set({
                    lockScalingX: true,
                    lockScalingY: true,
                    lockRotation: true
                });
            });
        }

        function initConnectors() {
            var rect = new fabric.Rect({
                fill: '',
                stroke: 'black',
                left: 800,
                top: 0,
                width: 159,
                height: 100,
                // originX: 'center',
                // originY: 'center',
                perPixelTargetFind: true
            });

            rect.hasControls = false;
            rect.hasBorders = false;
            rect.hasRotatingPoint = false;
            rect.lockMovementX = true;
            rect.lockMovementY = true;
            rect.lockScalingX = true;
            rect.lockScalingY = true;
            rect.lockRotation = true;
            rect.selectable = false;
            canvas.add(rect);

            addConnector(positionAnd.left, positionAnd.top, TreePartType.And);
            addConnector(positionOr.left, positionOr.top, TreePartType.Or);

        }

        function addConnector(x, y, type) {
            var rect = new fabric.Rect({
                fill: 'white',
                stroke: 'black',
                left: x,
                top: y,
                width: 40,
                height: 75,
                // originX: 'center',
                // originY: 'center',
                perPixelTargetFind: true
            });

            rect.type = type;
            rect.hasControls = false;
            rect.hasBorders = false;
            rect.hasRotatingPoint = false;
            rect.lockMovementX = true;
            rect.lockMovementY = true;
            rect.lockScalingX = true;
            rect.lockScalingY = true;
            rect.lockRotation = true;
            // rect.selectable = false;
            canvas.add(rect);

            var label = "";
            switch(type) {
                case TreePartType.And:
                    label = $translate.instant("LABEL_AND");
                    break;
                case TreePartType.Or:
                    label = $translate.instant("LABEL_OR");
                    break;
            }

            var markerLabel = new fabric.Text(label, {
                fontFamily: 'Arial',
                fontSize: 12,
                left: 100,
                top: 100
            });
            canvas.add(markerLabel).renderAll();
            markerLabel.hasControls = false;
            markerLabel.hasBorders = false;
            markerLabel.set({selectable: false})
            markerLabel.set("top", rect.top + rect.height / 2 - markerLabel.height / 2);
            markerLabel.set("left", rect.left + rect.width / 2 - markerLabel.width / 2);

            for (var i = 0; i < 4; i++) {
                addSlot(rect.left, rect.top + 10 + 15 * i);
            }
            addSlot(rect.left + rect.width, rect.top + rect.height / 2 - 5);
            return rect;
        }

        function addSlot(x, y) {
            var slot = new fabric.Rect({
                fill: 'black',
                stroke: 'black',
                left: x - 3,
                top: y,
                width: 6,
                height: 10,
                // originX: 'center',
                // originY: 'center',
                perPixelTargetFind: true
            });

            slot.type = "slot";
            slot.hasControls = false;
            slot.hasBorders = false;
            slot.hasRotatingPoint = false;
            slot.lockMovementX = true;
            slot.lockMovementY = true;
            slot.lockScalingX = true;
            slot.lockScalingY = true;
            slot.lockRotation = true;
            slot.selectable = false;
            canvas.add(slot);

            return slot;
        }

        function initRightClick() {
            var lineSelected = null;
            var connectorSelected = null;

            $(document).contextmenu({
                delegate: ".upper-canvas",
                menu: [
                    {title: $translate.instant("REMOVE"), cmd: "remove", uiIcon: "ui-icon-trash"},
                ],
                beforeOpen: function (e, ui) {
                    var pointer = canvas.getPointer(e.originalEvent);
                    var obj = canvas.getActiveObject();

                    var elementHit = false;
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].isHit(pointer)) {
                            elementHit = true;
                            lineSelected = lines[i];
                        }
                    }
                    for (var i = 0; i < connectors.length; i++) {
                        if (connectors[i].isHit(pointer)) {
                            elementHit = true;
                            connectorSelected = connectors[i];
                        }
                    }

                    if (!elementHit) {
                        e.preventDefault();
                    }
                },
                select: function (e, ui) {
                    switch (ui.cmd) {
                        case "remove":
                            if(lineSelected) {
                                removeLine(lineSelected);
                                lineSelected = null;
                            } else if(connectorSelected) {
                                removeConnector(connectorSelected);
                                connectorSelected = null;
                            }
                            break;
                    }
                }
            });
        }

        function addTreePart(treePart, parentQuestTreePart) {

            if (treePart.getType() == TreePartType.Marker) {
                return createMarker(treePart, treePart.getTask().getType(), treePart.getTask().getName(), treePart.getPositionX(), treePart.getPositionY()).then(drawLineFromParent);
            } else {
                var connector = createConnector(treePart, treePart.getType(), treePart.getPositionX(), treePart.getPositionY());
                return drawLineFromParent(connector);
            }

            function drawLineFromParent(questTreePart) {

                if (parentQuestTreePart) {
                    drawLineBetweenTreeParts(parentQuestTreePart, questTreePart);
                }
                return addSuccessors(treePart, questTreePart);
            }
        }

        function createMarker(treePart, type, label, x, y) {

            if (!quest.getComplex()) {
                if (xPos + xOffset < canvasWidth) {
                    x = xPos += xOffset;
                    y = yPos;
                } else {
                    x = xPos = 0;
                    y = yPos += yOffset;
                }
            }

            var treePartId = treePart.getId();
            if (markerPromises[treePartId]) {
                return markerPromises[treePartId];
            } else {
                var marker = new QuestTreeMarker(treePart, markerId++, canvas, markerImgScale);
                var promise = marker.add(type, x, y, label);
                markers.push(marker);
                markerPromises[treePartId] = promise;
                return promise;
            }
        }

        function createConnector(treePart, type, x, y) {
            var treePartId = -1;
            if (!treePart) {
                treePart = quest.createTreePartConnector(type);
                treePartId = QuestService.getTreePartId();
                treePart.setId(treePartId);
                QuestService.setTreePartId(treePartId + 1);
            } else {
                treePartId = treePart.getId();
            }
            if (connectorPromises[treePartId]) {
                return connectorPromises[treePartId];
            } else {
                var con = new QuestTreeConnector(type, treePart, treePartId, canvas);
                con.add(type, x, y);
                connectors.push(con);
                connectorPromises[treePartId] = con;
                return con;
            }
        }

        function drawLineBetweenTreeParts(fromQuestTreePart, toQuestTreePart) {
            var outLines = fromQuestTreePart.getOutLines();
            for (var i = 0; i < outLines.length; i++) {
                if (outLines[i].getToElement().getId() == toQuestTreePart.getId()) {
                    return;
                }
            }

            $log.info("Draw line between: " + fromQuestTreePart.getTreePart().getId() + " and " + toQuestTreePart.getTreePart().getId());
            var fromAnchor = fromQuestTreePart.getStartPoint();
            var toAnchor = toQuestTreePart.getEndPoint();
            var points = [fromAnchor.left, fromAnchor.top, toAnchor.left, toAnchor.top];

            var line = new QuestTreeLine(lineId++, canvas);
            line.draw(points, fromQuestTreePart, toQuestTreePart);
            line.position();
            line.drawArrowHead();
            lines.push(line);

            fromQuestTreePart.addOutLine(line);
            toQuestTreePart.addInLine(line);
        }

        function addSuccessors(treePart, parentQuestTreePart) {
            var promises = [];

            var successors = treePart.getSuccessors();
            for (var i = 0; i < successors.length; i++) {
                promises.push($q.when(addTreePart(successors[i], parentQuestTreePart)));
            }

            return $q.all(promises);
        }

        function getLineById(id) {
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].id == id) {
                    return lines[i];
                }
            }
        }

        function activateDraw() {
            canvas.off('mouse:up');
            canvas.on('mouse:down', onMouseDown);
        }

        function deactivateDraw() {
            canvas.off('mouse:down');
        }

        function onMouseDown(evt) {

            var obj = canvas.getActiveObject();

            if (!obj) {
                return;
            }

            if (obj.type == "marker" || obj.type == "connector" || obj.type == "slot") {
                var objLeft = obj.left;
                var objTop = obj.top;
                canvas.on("mouse:up", onMouseUp);
            } else if (obj.type == "head") {
                var line = getLineById(obj.lineId);
                var lineStartElement = line.getFromElement();
                removeLine(line);
                startDrawing(lineStartElement.getImage(), canvas.getPointer(evt.e));
            } else if (!drawing && obj.type == TreePartType.And) {
                deactivateDraw();
                connectorDragging = createConnector(null, TreePartType.And, positionAnd.left + 10, positionAnd.top + 10);
                canvas.on('mouse:move', moveConnector);
                canvas.on('mouse:up', addPlaceConnectorEvent);
            } else if (!drawing && obj.type == TreePartType.Or) {
                deactivateDraw();
                connectorDragging = createConnector(null, TreePartType.Or, positionOr.left + 10, positionOr.top + 10);
                canvas.on('mouse:move', moveConnector);
                canvas.on('mouse:up', addPlaceConnectorEvent);
            }

            function onMouseUp() {

                canvas.off('mouse:up');

                if (!drawing) {

                    if (obj.left == objLeft && obj.top == objTop) {  //item wasn't dragged
                        startDrawing(obj, canvas.getPointer(evt.e));
                    }
                } else {
                    finishDrawing(obj);
                }
            }
        }

        function addPlaceConnectorEvent() {
            console.log("Mouse down");

            canvas.off('mouse:up');
            canvas.on('mouse:down', placeConnector);
        }

        function placeConnector() {
            if (connectorDragging) {
                connectorDragging.getImage().setCoords();
                connectorDragging = null;
                canvas.off('mouse:move');
                canvas.off('mouse:down');
                canvas.on('mouse:up', activateDraw);
            }
        }

        function startDrawing(obj, pointer) {

            switch (obj.type) {
                case "marker":
                    startElement = obj.marker;
                    break;
                case "connector":
                    startElement = obj.connector;
                    break;
                case "slot":
                    startElement = obj.slot.connector;
            }

            var anchorPoint = startElement.getStartPoint();
            var anchorLeft = anchorPoint.left;
            var anchorTop = anchorPoint.top;
            var points = [anchorLeft, anchorTop, pointer.x, pointer.y];


            line = new QuestTreeLine(lineId++, canvas);
            line.draw(points, startElement, null);
            line.position();

            showConnectorCircles();
            showMarkerCircles();


            drawing = true;
            canvas.on('mouse:move', onMouseMove);
        }

        function onMouseMove(evt) {
            var pointer = canvas.getPointer(evt.e);
            line.setEnd({x: pointer.x, y: pointer.y});
            if (startElement.getType() == TreePartType.Marker) {
                line.position();
            }
            line.getImage().set({x2: pointer.x, y2: pointer.y});
            canvas.renderAll();
        }

        function moveConnector(evt) {
            var pointer = canvas.getPointer(evt.e);
            var img = connectorDragging.getImage();
            img.set("top", pointer.y);
            img.set("left", pointer.x);
            connectorDragging.move();
            canvas.renderAll();
        }


        function finishDrawing(obj) {
            var endElement;
            var endSlot = null;
            switch (obj.type) {
                case "marker":
                    endElement = obj.marker;
                    break;
                case "connector":
                    endElement = obj.connector;
                    break;
                case "slot":
                    if(obj.slot.getType() != "out") {
                        endElement = obj.slot.connector;
                        endSlot = obj.slot;
                    }

                    break;

            }

            if (!isConnectionAllowed(startElement, endElement)) {
                stopDrawing();
                return;
            }

            canvas.off('mouse:move');

            var anchorPoint;

            if (endSlot) {
                anchorPoint = endSlot.getAnchorPoint();
            } else {
                anchorPoint = endElement.getEndPoint();
            }

            var anchorLeft = anchorPoint.left;
            var anchorTop = anchorPoint.top;

            line.setEnd({x: anchorLeft, y: anchorTop});
            line.setFromElement(startElement);
            line.setToElement(endElement);
            lines.push(line);

            startElement.addOutLine(line);
            startElement.getTreePart().addSuccessor(endElement.getTreePart());
            if (endSlot) {
                endSlot.setLine(line);
            } else {
                endElement.addInLine(line);
            }
            line.position(true);
            line.drawArrowHead();

            canvas.renderAll();
            drawing = false;
            hideConnectorCircles();
            hideMarkerCircles();
            console.log(modifiedTreeRoot);
        }

        function showConnectorCircles() {
            for (var i = 0; i < connectors.length; i++) {
                if (isConnectionAllowed(startElement, connectors[i])) {
                    connectors[i].showSlotCircles();
                }
            }
        }

        function showMarkerCircles() {
            for (var i = 0; i < markers.length; i++) {
                if (isConnectionAllowed(startElement, markers[i])) {
                    markers[i].showCircle();
                }
            }
        }

        function hideConnectorCircles() {
            for (var i = 0; i < connectors.length; i++) {
                connectors[i].hideSlotCircles();
            }
        }

        function hideMarkerCircles() {
            for (var i = 0; i < markers.length; i++) {
                markers[i].hideCircle();
            }
        }

        function isConnectionAllowed(startElement, endElement) {
            if (endElement.getType() == startElement.getType() && endElement.getId() == startElement.getId()) {
                $log.warn("Line Start and End are the same!");
                return false;
            } else if (endElement.getId() == 0) {
                $log.warn("Connecting to start marker not allowed");
                return false;
            } else if (endElement.getTreePart().hasAncestor(startElement.getTreePart().getId())) {
                $log.warn("Loop detected!");
                return false;
            } else if (startElement.getTreePart().hasSuccessor(endElement.getTreePart().getId())) {
                $log.warn("There already exits a connection between these markers");
                return false;
            } else if (startElement.getId() == 0 && (endElement.getType() == TreePartType.And || endElement.getType() == TreePartType.Or)) {
                $log.warn("Start marker can only be connected to other markers");
                return false;
            }
            return true;
        }

        function stopDrawing() {
            if (drawing) {
                drawing = false;
                canvas.off('mouse:move');
                line.stopDrawing();
                startElement = null;
                hideConnectorCircles();
                hideMarkerCircles();
            }
        }

        function initDrag() {
            canvas.on('object:moving', function (evt) {
                var obj = evt.target;

                checkDragBounds(obj);
                switch (obj.get('type')) {
                    case "marker":
                        obj.marker.move(obj.left, obj.top);
                        break;
                    case "connector":
                        obj.connector.move();
                        break;
                    case "group":
                        var objects = obj.getObjects();
                        for (var i = 0; i < objects.length; i++) {
                            if (objects[i].get('type') == "marker") {
                                objects[i].marker.move(objects[i].left + obj.left + obj.width / 2, objects[i].top + obj.top + obj.height / 2)
                            }
                        }
                }
            });
        }

        function initSelect() {
            canvas.on('object:selected', objectSelected);

            function objectSelected(obj) {
                if (obj.target.type == "line") {
                    selectedLine = getLineById(obj.target.lineId);
                }
            }
        }

        function checkDragBounds(el) {
            var width = el.getBoundingRectWidth();
            var height = el.getBoundingRectHeight();
            var left = el.left;
            var right = left + width;
            var top = el.top;
            var bottom = top + height;

            if (left < 0) {
                el.left = 0;
            }
            if (right > canvas.width) {
                el.left = canvas.width - width;
            }
            if (top < 0) {
                el.top = 0;
            }
            if (bottom > canvas.height) {
                el.top = canvas.height - height;
            }
        }

        function saveTree(evt) {

            var treeParts = [];

            var markerError = false;
            for (var i = 0; i < markers.length; i++) {
                if(markers[i].getId() != 0) {
                    treeParts.push(markers[i].getTreePart());
                }

                if (markers[i].getId() != 0 && markers[i].getInLines().length == 0) {
                    markers[i].showErrorCircle();
                    markerError = true;
                }
            }

            if(markerError) {
                alertError(evt, "ERROR_QUESTLINE", "ERROR_QUESTLINE_MARKER_CONNECTION");
                return $q.reject();
            }

            for (var i = 0; i < connectors.length; i++) {
                if (connectors[i].getOutLines().length < 1) {
                    $log.warn("And/Or output no connected to tree");
                    alertError(evt, "ERROR_QUESTLINE", "ERROR_QUESTLINE_AND_OR_OUTPUT");
                    connectors[i].showSlotErrorCircles("out");
                    return $q.reject();
                }

                if (connectors[i].getNumInLines() == 0) {
                    $log.warn("Nothing connected to And/Or input");
                    alertError(evt, "ERROR_QUESTLINE", "ERROR_QUESTLINE_AND_OR_INPUT");
                    connectors[i].showSlotErrorCircles("in");
                    return $q.reject();
                }
            }

            for (var i = 0; i < markers.length; i++) {
                var treePart = markers[i].getTreePart();
                var image = markers[i].getImage();
                if (treePart.getPositionX() != Math.floor(image.left)) {
                    treePart.setPositionX(Math.floor(image.left));
                    treePart.change();
                }
                if (treePart.getPositionY() != Math.floor(image.top)) {
                    treePart.setPositionY(Math.floor(image.top));
                    treePart.change();
                }
            }
            for (var i = 0; i < connectors.length; i++) {
                var treePart = connectors[i].getTreePart();
                var image = connectors[i].getImage();
                if (treePart.getPositionX() != Math.floor(image.left)) {
                    treePart.setPositionX(Math.floor(image.left));
                    treePart.change();
                }
                if (treePart.getPositionY() != Math.floor(image.top)) {
                    treePart.setPositionY(Math.floor(image.top));
                    treePart.change();
                }
            }
            quest.setTreePartRoot(modifiedTreeRoot);
            quest.setTreeParts(treeParts);
            quest.checkComplexity();
            return null;

        }

        function alertError(evt, title, content) {
            var alert = $mdDialog.alert()
                .title($translate.instant(title))
                .htmlContent($translate.instant(content))
                .ariaLabel('Save Questline')
                .targetEvent(evt)
                .ok($translate.instant('BUTTON_CLOSE'));

            return $mdDialog.show(alert);
        }
    }

})();

