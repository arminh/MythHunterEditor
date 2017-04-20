/**
 * Created by armin on 09.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeService', QuestTreeService);

    QuestTreeService.$inject = ["$log", "$q", "TaskService", "QuestTreeLine"];

    /* @ngInject */
    function QuestTreeService($log, $q, TaskService, QuestTreeLine) {
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

        function Marker(treePart, id, img, label) {
            this.treePart = treePart;
            this.id = id;
            this.img = img;
            this.label = label;
            this.lineStarts = [];
            this.lineEnds = [];
        }

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
                        var lineObject = lines[i].img;
                        var lineHead = lines[i].head;
                        if (containsPoint(lineObject, pointer) || containsPoint(lineHead, pointer)) {
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
                if (parentMarker) {
                    drawLineBetweenMarkers(parentMarker, marker);
                }
                return addSuccessors(treePart, marker);
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

        function addMarker(treePart, type, label, x, y) {
            var deffered = $q.defer();

            var treePartId = treePart.getId();
            if (markerPromises[treePartId]) {
                return markerPromises[treePartId];
            } else {
                var marker = new Marker(treePart, markerId++, null, null);
                markerPromises[treePartId] = deffered.promise;
                fabric.Image.fromURL(TaskService.getMarkerSrc(type), initMarker.bind(marker));
            }

            function initMarker(img) {
                var markerImage = img.set({left: x, top: y}).scale(markerImgScale);
                markerImage.type = "marker";

                var markerLabel = addMarkerLabel(label, img.top, img.left + (img.width * markerImgScale) / 2);

                canvas.add(markerImage).renderAll();
                markerImage.hasControls = false;
                markerImage.hasBorders = false;
                markerImage.marker = marker;

                this.img = markerImage;
                this.label = markerLabel;
                markers.push(marker);
                deffered.resolve(marker);
            }

            return deffered.promise;
        }


        function addMarkerLabel(text, anchorTop, anchorLeft) {
            var markerLabel = new fabric.Text(text, {
                fontFamily: 'Arial',
                fontSize: 12,
                left: 100,
                top: 100
            });

            positionLabel(markerLabel, anchorTop, anchorLeft);

            canvas.add(markerLabel).renderAll();
            markerLabel.hasControls = false;
            markerLabel.hasBorders = false;
            markerLabel.set({selectable: false});

            return markerLabel;
        }

        function drawLineBetweenMarkers(fromMarker, toMarker) {
            $log.info("Draw line between: " + fromMarker.treePart.getId() + " and " + toMarker.treePart.getId());
            var fromAnchor = getAnchorPoint(fromMarker.img);
            var toAnchor = getAnchorPoint(toMarker.img);
            var points = [fromAnchor.left, fromAnchor.top, toAnchor.left, toAnchor.top];

            var line = new QuestTreeLine(lineId++, canvas);
            line.draw(points, fromMarker, toMarker);
            line.position();
            line.drawArrowHead();
            lines.push(line);

            fromMarker.lineStarts.push(line);
            toMarker.lineEnds.push(line);
        }

        function positionLabel(label, anchorTop, anchorLeft) {
            label.set("top", anchorTop - 20);
            label.set("left", anchorLeft - label.width / 2);
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

            curMarkerId = obj.marker.id;
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
            if (obj.marker.id == curMarkerId ||
                obj.marker.id == 0 ||
                obj.marker.treePart.hasAncestor(startMarker.treePart.getId()) ||
                startMarker.treePart.hasSuccessor(obj.marker.treePart.getId())) {

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

            if (startMarker.lineStarts) {
                startMarker.lineStarts.push(line);
            }
            startMarker.treePart.addSuccessor(obj.marker.treePart);

            if (obj.marker.lineEnds) {
                obj.marker.lineEnds.push(line);
            }

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

            /*            for (var i = 0; i < markers.length; i++) {
             markers[i].set("lockMovementX", false);
             markers[i].set("lockMovementY", false);
             }*/
        }

        function initDrag() {
            canvas.on('object:moving', function (evt) {
                if (drawing) {
                    return;
                }

                var obj = evt.target;
                switch (obj.get('type')) {
                    case "marker":
                        moveMarker(obj, obj.left, obj.top);
                        break;
                    case "group":
                        var objects = obj.getObjects();
                        for (var i = 0; i < objects.length; i++) {
                            if (objects[i].get('type') == "marker") {
                                moveMarker(objects[i], objects[i].left + obj.left + obj.width / 2, objects[i].top + obj.top + obj.height / 2);
                            }
                        }
                }
            });
        }

        function moveMarker(obj, left, top) {
            var anchorLeft;
            var anchorTop;

            if (obj.marker.lineStarts && obj.marker.lineEnds) {
                for (var i = 0; i < obj.marker.lineStarts.length; i++) {
                    var line = obj.marker.lineStarts[i];

                    anchorLeft = left + (obj.width / 2) * obj.scaleX;
                    anchorTop = top + (obj.height / 2) * obj.scaleY;
                    line.setStart({x: anchorLeft, y: anchorTop});
                    line.position();

                    line.removeArrowHead();
                    line.drawArrowHead();
                }

                for (var i = 0; i < obj.marker.lineEnds.length; i++) {
                    var line = obj.marker.lineEnds[i];

                    anchorLeft = left + (obj.width / 2) * obj.scaleX;
                    anchorTop = top + (obj.height / 2) * obj.scaleY;
                    line.setEnd({x: anchorLeft, y: anchorTop});
                    line.position();

                    line.removeArrowHead();
                    line.drawArrowHead();
                }
            }

            if (obj.marker.label) {
                var label = obj.marker.label;
                positionLabel(label, top, left + (obj.width * markerImgScale) / 2)
            }
        }

        function getAnchorPoint(obj) {
            return {
                left: obj.left + (obj.width / 2) * obj.scaleX,
                top: obj.top + (obj.height / 2) * obj.scaleY
            }
        }

        function containsPoint(object, point) {
            return !canvas.isTargetTransparent(object, point.x, point.y);
        }
    }

})();

