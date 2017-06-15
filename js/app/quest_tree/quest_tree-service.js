/**
 * Created by armin on 09.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeService', QuestTreeService);

    QuestTreeService.$inject = ["$log", "$q", "QuestTreeMarker", "QuestTreeLine", "QuestTreeConnector", "TreePartType", "$mdDialog"];

    /* @ngInject */
    function QuestTreeService($log, $q, QuestTreeMarker, QuestTreeLine, QuestTreeConnector, TreePartType, $mdDialog) {
        $log = $log.getInstance("QuestTreeService", debugging);
        var originalTreeRoot = null;
        var modifiedTreeRoot = null;

        var canvas = null;
        var markers = [];
        var markerPromises = {};
        var lines = [];

        var drawing = false;
        var line = null;

        var xPos = 0;
        var markerId = 0;
        var lineId = 0;

        var startElement = null;

        var markerImgScale = 0.05;

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

        function init(treeRoot) {
            originalTreeRoot = treeRoot;
            modifiedTreeRoot = angular.copy(treeRoot);
            markers = [];
            markerPromises = {};
            lines = [];
            drawing = false;
            line = null;

            xPos = 0;
            markerId = 0;
            lineId = 0;
            canvas = new fabric.Canvas('questTree-canvas', {
                targetFindTolerance: 15
            });
            initRightClick();
            initDrag();
            initGroups();

            var con = new QuestTreeConnector(canvas);
            con.add("and", 100, 100);
            return addTreePartMarker(modifiedTreeRoot, null).then(activateDraw);
        }

        function escapeKeyPressed() {
            stopDrawing();
        }

        function deleteKeyPressed() {

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

        function initRightClick() {
            var lineSelected = null;

            $(document).contextmenu({
                delegate: ".upper-canvas",
                menu: [
                    {title: "Remove", cmd: "remove", uiIcon: "ui-icon-trash"},
                ],
                beforeOpen: function (e, ui) {
                    var pointer = canvas.getPointer(e.originalEvent);
                    var lineHit = false;
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].isHit(pointer)) {
                            lineHit = true;
                            lineSelected = lines[i];
                        }
                    }
                    if (!lineHit) {
                        e.preventDefault();
                    }
                },
                select: function (e, ui) {
                    switch (ui.cmd) {
                        case "remove":
                            lineSelected.remove();
                            break;
                    }
                }
            });
        }

        function addTreePartMarker(treePart, parentMarker) {

            return addMarker(treePart, treePart.getTask().getType(), treePart.getTask().getName(), xPos += 150, 200).then(drawLineFromParent);

            function drawLineFromParent(marker) {
                markers.push(marker);
                if (parentMarker) {
                    drawLineBetweenMarkers(parentMarker, marker);
                }
                return addSuccessors(treePart, marker);
            }
        }

        function addMarker(treePart, type, label, x, y) {

            var treePartId = treePart.getId();
            if (markerPromises[treePartId]) {
                return markerPromises[treePartId];
            } else {
                var marker = new QuestTreeMarker(treePart, markerId++, canvas, markerImgScale);
                var promise = marker.add(type, x, y, label);
                markerPromises[treePartId] = promise;
                return promise;
            }
        }

        function addSuccessors(treePart, parentMarker) {
            var promises = [];

            var successors = treePart.getSuccessors();
            for (var i = 0; i < successors.length; i++) {
                promises.push(addTreePartMarker(successors[i], parentMarker));
            }

            return $q.all(promises);
        }

        function drawLineBetweenMarkers(fromMarker, toMarker) {
            $log.info("Draw line between: " + fromMarker.getTreePart().getId() + " and " + toMarker.getTreePart().getId());
            var fromAnchor = fromMarker.getStartPoint();
            var toAnchor = toMarker.getEndPoint();
            var points = [fromAnchor.left, fromAnchor.top, toAnchor.left, toAnchor.top];

            var line = new QuestTreeLine(lineId++, canvas);
            line.draw(points, fromMarker, toMarker);
            line.position();
            line.drawArrowHead();
            lines.push(line);

            fromMarker.addLineStart(line);
            toMarker.addLineEnd(line);
        }

        function getLineById(id) {
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].id == id) {
                    return lines[i];
                }
            }
        }

        function activateDraw() {
            canvas.on('mouse:down', onMouseDown);
        }

        function onMouseDown(evt) {

            var obj = canvas.getActiveObject();

            if (!obj) {
                return;
            }

            if (obj.type == "marker" || obj.type == "connector") {
                var objLeft = obj.left;
                var objTop = obj.top;
                canvas.on("mouse:up", onMouseUpMarker);
            } else if (obj.type == "head") {
                var line = getLineById(obj.lineId);
                var startMarker = line.getFromElement();
                line.remove();
                startDrawing(startMarker.getImage(), canvas.getPointer(evt.e));
            }

            function onMouseUpMarker() {
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

        function startDrawing(obj, pointer) {

            switch(obj.type) {
                case "marker":
                    startElement = obj.marker;
                    break;
                case "connector":
                    startElement = obj.connector;
                    break;
            }

            var anchorPoint = startElement.getStartPoint();
            var anchorLeft = anchorPoint.left;
            var anchorTop = anchorPoint.top;
            var points = [anchorLeft, anchorTop, pointer.x, pointer.y];


            line = new QuestTreeLine(lineId++, canvas);
            line.draw(points, null, null);
            if(startElement.getType() == TreePartType.Marker) {
                line.position();
            }

            canvas.on('mouse:move', onMouseMove);
            drawing = true;
        }

        function onMouseMove(evt) {
            var pointer = canvas.getPointer(evt.e);
            line.setEnd({x: pointer.x, y: pointer.y});
            if(startElement.getType() == TreePartType.Marker) {
                line.position();
            }
            line.getImage().set({x2: pointer.x, y2: pointer.y});
            canvas.renderAll();
        }

        function finishDrawing(obj) {
            var endElement;
            switch(obj.type) {
                case "marker":
                    endElement = obj.marker;
                    break;
                case "connector":
                    endElement = obj.connector;
                    break;
            }

            if (endElement.getId() == startElement.getId() ||
                endElement.getId() == 0 ||
                endElement.getTreePart().hasAncestor(startElement.getTreePart().getId()) ||
                startElement.getTreePart().hasSuccessor(endElement.getTreePart().getId())) {

                $log.warn("Loop detected!");
                stopDrawing();
                return;
            }

            canvas.off('mouse:move');

            var anchorPoint = endElement.getEndPoint();
            var anchorLeft = anchorPoint.left;
            var anchorTop = anchorPoint.top;

            line.setEnd({x: anchorLeft, y: anchorTop});
            line.setFromElement(startElement);
            line.setToElement(endElement);
            if(startElement.getType() == TreePartType.Marker) {
                line.position();
            }
            line.drawArrowHead();
            lines.push(line);

            startElement.addLineStart(line);
            startElement.getTreePart().addSuccessor(endElement.getTreePart());
            endElement.addLineEnd(line);

            canvas.renderAll();
            drawing = false;
        }

        function stopDrawing() {
            console.log("stopDrawing");
            if (drawing) {
                drawing = false;
                canvas.off('mouse:move');
                line.stopDrawing();
            }

        }

        function deactivateDraw() {
            canvas.off('mouse:down');
            canvas.off('mouse:move');
        }

        function initDrag() {
            canvas.on('object:moving', function (evt) {
                var obj = evt.target;
                if (drawing) {
                    return;
                }

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

            for (var i = 0; i < markers.length; i++) {
                if (markers[i].getId() != 0 && markers[i].getLineEnds().length == 0) {
                    var alert = $mdDialog.alert()
                        .title('Saving Questline failed')
                        .htmlContent('Not all marker are connected to the tree')
                        .ariaLabel('Save Questline')
                        .targetEvent(evt)
                        .multiple(true)
                        .ok('Close');

                    return $mdDialog.show(alert).then(function () {
                        return $q.reject();
                    });
                }
            }

            $mdDialog.cancel();
        }
    }

})();

