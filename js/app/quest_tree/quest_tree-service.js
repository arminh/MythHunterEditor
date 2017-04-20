/**
 * Created by armin on 09.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeService', QuestTreeService);

    QuestTreeService.$inject = ["$log", "$q", "TaskService", "QuestTreeMarker", "QuestTreeLine"];

    /* @ngInject */
    function QuestTreeService($log, $q, TaskService, QuestTreeMarker, QuestTreeLine) {
        $log = $log.getInstance("QuestTreeService", debugging);
        var canvas = null;
        var markers = [];
        var markerPromises = {};
        var lines = [];

        var startMarker = null;
        var drawing = false;
        var line = null;

        var xPos = 0;
        var markerId = 0;
        var curMarkerId = -1;
        var lineId = 0;

        var markerImgScale = 0.05;

        var service = {
            init: init,
            activateDraw: activateDraw,
            deactivateDraw: deactivateDraw,
            escapeKeyPressed: escapeKeyPressed,
            deleteKeyPressed: deleteKeyPressed
        };
        return service;

        ////////////////

        function init(treeRoot) {
            markers = [];
            markerPromises = {};
            lines = [];
            drawing = false;
            line = null;

            xPos = 0;
            markerId = 0;
            curMarkerId = -1;
            lineId = 0;
            canvas = new fabric.Canvas('myCanvas', {
                targetFindTolerance: 15
            });
            initRightClick();
            initDrag();
            return addTreePartMarker(treeRoot, null).then(activateDraw);
        }

        function escapeKeyPressed() {
            stopDrawing();
        }

        function deleteKeyPressed() {

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
            var fromAnchor = getAnchorPoint(fromMarker.getImage());
            var toAnchor = getAnchorPoint(toMarker.getImage());
            var points = [fromAnchor.left, fromAnchor.top, toAnchor.left, toAnchor.top];

            var line = new QuestTreeLine(lineId++, canvas);
            line.draw(points, fromMarker, toMarker);
            line.position();
            line.drawArrowHead();
            lines.push(line);

            fromMarker.addLineStart(line);
            toMarker.addLineEnd(line);
        }

        function activateDraw() {
            canvas.on('mouse:down', onMouseDown);
        }

        function onMouseDown(evt) {

            var obj = canvas.getActiveObject();

            if (!obj) {
                return;
            }
            var objLeft = obj.left;
            var objTop = obj.top;
            canvas.on("mouse:up", onMouseUp);

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

        function startDrawing(obj, pointer) {

            var anchorPoint = getAnchorPoint(obj);
            var anchorLeft = anchorPoint.left;
            var anchorTop = anchorPoint.top;
            var points = [anchorLeft, anchorTop, pointer.x, pointer.y];

            curMarkerId = obj.marker.getId();
            startMarker = obj.marker;

            line = new QuestTreeLine(lineId++, canvas);
            line.draw(points, null, null);
            line.position();

            canvas.on('mouse:move', onMouseMove);
            drawing = true;
        }

        function onMouseMove(evt) {
            var pointer = canvas.getPointer(evt.e);
            line.setEnd({x: pointer.x, y: pointer.y});
            line.position();
            line.getImage().set({x2: pointer.x, y2: pointer.y});
            canvas.renderAll();
        }

        function finishDrawing(obj) {
            if (obj.marker.getId() == curMarkerId ||
                obj.marker.getId() == 0 ||
                obj.marker.getTreePart().hasAncestor(startMarker.getTreePart().getId()) ||
                startMarker.getTreePart().hasSuccessor(obj.marker.getTreePart().getId())) {

                $log.warn("Loop detected!");
                stopDrawing();
                return;
            }

            canvas.off('mouse:move');

            var anchorPoint = getAnchorPoint(obj);
            var anchorLeft = anchorPoint.left;
            var anchorTop = anchorPoint.top;

            line.setEnd({x: anchorLeft, y: anchorTop});
            line.setFromMarker(startMarker);
            line.setToMarker(obj.marker);
            line.position();
            line.drawArrowHead();
            lines.push(line);

            startMarker.addLineStart(line);
            startMarker.getTreePart().addSuccessor(obj.marker.getTreePart());
            obj.marker.addLineEnd(line);

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
                if (drawing) {
                    return;
                }

                var obj = evt.target;
                switch (obj.get('type')) {
                    case "marker":
                        obj.marker.move(obj.left, obj.top);
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

        function getAnchorPoint(obj) {
            return {
                left: obj.left + (obj.width / 2) * obj.scaleX,
                top: obj.top + (obj.height / 2) * obj.scaleY
            }
        }
    }

})();

