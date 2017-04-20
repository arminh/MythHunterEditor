/**
 * Created by armin on 09.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeService', QuestTreeService);

    QuestTreeService.$inject = ["$log", "$q", "TaskService"];

    /* @ngInject */
    function QuestTreeService($log, $q, TaskService) {
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

        function Line(img, start, end) {
            this.img = img;
            this.start = start;
            this.end = end;
            this.head = null;
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
            console.log(treeRoot);
            return addTreePartMarker(treeRoot, null).then(activateDraw);
        }

        function escapeKeyPressed() {
            stopDrawing();
        }

        function deleteKeyPressed() {

        }

        function initRightClick() {
            $(".upper-canvas").bind('contextmenu', function (e) {
                var pointer = canvas.getPointer(e.originalEvent);
                e.preventDefault();

                for(var i = 0; i < lines.length; i++) {
                    var lineObject = lines[i].img;
                    var lineHead = lines[i].head;
                    if (containsPoint(lineObject, pointer) || containsPoint(lineHead, pointer)) {
                    }
                }
                return false;
            });
        }

        function addTreePartMarker(treePart, parentMarker) {


            return addMarker(treePart, treePart.getTask().getType(), treePart.getTask().getName(), xPos += 150, 200).then(drawLineFromParent);

            function drawLineFromParent(marker) {
                if(parentMarker) {
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
            if(markerPromises[treePartId]) {
                return markerPromises[treePartId];
            } else {
                var marker = new Marker(treePart, markerId++, null, null);
                markerPromises[treePartId] = deffered.promise;
                fabric.Image.fromURL(TaskService.getMarkerSrc(type), initMarker.bind(marker));
            }

            function initMarker(img) {
                var markerImage = img.set({left: x, top: y}).scale(markerImgScale);
                markerImage.type = "marker";

                var markerLabel = addMarkerLabel(label, img.top, img.left + (img.width * markerImgScale)/2);

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
            var line = addLine(points);
            positionLine(line);
            addArrowHead(line);

            fromMarker.lineStarts.push(line);
            toMarker.lineEnds.push(line);
        }

        function addLine(points) {
            var lineImage = new fabric.Line(points, {
                strokeWidth: 4,
                fill: 'red',
                stroke: 'red',
                originX: 'center',
                originY: 'center',
                perPixelTargetFind: true
            });

            lineImage.type = "line";
            lineImage.hasControls = false;
            lineImage.hasBorders = false;
            lineImage.set({selectable: false});
            canvas.add(lineImage);

            var lineStart = {x: points[0], y: points[1]};
            var lineEnd = {x: points[2], y: points[3]};
            var line = new Line(lineImage, lineStart, lineEnd);

            return line;
        }

        function positionLine(line) {

            var vy = (line.end.y - line.start.y);
            var vx = (line.end.x - line.start.x);

            var len = Math.sqrt(vx * vx + vy * vy);

            vy = vy / len;
            vx = vx / len;

            var x1 = line.start.x + vx * 20;
            var y1 = line.start.y + vy * 20;

            var x2 = line.end.x - vx * 20;
            var y2 = line.end.y - vy * 20;

            line.img.set({x1: x1, y1: y1, x2: x2, y2: y2});
        }
        
        function positionLabel(label, anchorTop, anchorLeft) {
            label.set("top", anchorTop - 20);
            label.set("left", anchorLeft - label.width/2);
        }

        function addArrowHead(line) {

            var width = 15;
            var height = 20;

            var anchorLeft = line.img.x2;
            var anchorTop = line.img.y2;

            var triangle = new fabric.Triangle({
                fill: 'red',
                left: anchorLeft,
                top: anchorTop,
                height: 18,
                width: 10
            });

            triangle.set({selectable: false});
            canvas.add(triangle);
            line.head = triangle;

            positionArrowHead(line, triangle);
        }

        function positionArrowHead(line, head) {

            var angle = getLineAngle(line);

            var angleRad = angle * (Math.PI / 180);
            head.top = head.top - Math.cos(angleRad) * head.width / 2;
            head.left = head.left - Math.sin(angleRad) * head.width / 2;

            head.set({"angle": 90 - angle});
        }

        function getLineAngle(line) {
            var dy = (line.img.y1 - line.img.y2);
            var dx = (line.img.x2 - line.img.x1);

            var angle;

            if (dx == 0) {
                angle = 90;
            } else {
                angle = Math.atan(dy / dx);
                angle = angle * (180 / Math.PI); // rad --> deg
            }


            //first quadrant
            if (line.img.x1 <= line.img.x2 && line.img.y1 > line.img.y2) {
                angle = angle + 0;

            }

            //second quadrant
            if (line.img.x1 > line.img.x2 && line.img.y1 >= line.img.y2) {
                angle = angle + 180;
            }

            //third quadrant
            if (line.img.x1 >= line.img.x2 && line.img.y1 < line.img.y2) {
                angle = angle + 180;
            }

            //fourth quadrant
            if (line.img.x1 < line.img.x2 && line.img.y1 <= line.img.y2) {
                angle = angle + 360;
            }

            return angle;
        }


        function activateDraw() {
            canvas.on('mouse:down', onMouseDown);
        }

        function onMouseDown(evt) {

            var obj = canvas.getActiveObject();

            if (!obj) {
                return;
            }

            var pointer = canvas.getPointer(evt.e);

            var objLeft = obj.left;
            var objTop = obj.top;
            var anchorPoint = getAnchorPoint(obj);
            var anchorLeft = anchorPoint.left;
            var anchorTop = anchorPoint.top;
            var points = [anchorLeft, anchorTop, pointer.x, pointer.y];
            canvas.on("mouse:up", onMouseUp);

            function onMouseUp() {
                canvas.off('mouse:up');

                if (!drawing) {
                    if(obj.left != objLeft || obj.top != objTop) {  //item was dragged
                        return;
                    }

                    curMarkerId = obj.marker.id;
                    startMarker = obj.marker;

                    line = addLine(points);
                    line.start = {x: anchorLeft, y: anchorTop};
                    line.end = {x: pointer.x, y: pointer.y};
                    positionLine(line);

                    canvas.on('mouse:move', onMouseMove);
                    drawing = true;
                } else {
                    if (obj.marker.id == curMarkerId || obj.marker.treePart.hasAncestor(startMarker.treePart.getId())) {
                        $log.warn("Loop detected!");
                        stopDrawing();
                        return;
                    }

                    canvas.off('mouse:move');

                    anchorPoint = getAnchorPoint(obj);
                    anchorLeft = anchorPoint.left;
                    anchorTop = anchorPoint.top;
                    line.end = {x: anchorLeft, y: anchorTop};

                    positionLine(line);
                    addArrowHead(line);

                    if (startMarker.lineStarts) {
                        startMarker.lineStarts.push(line);
                    }
                    startMarker.treePart.addSuccessor(obj.marker.treePart);

                    if (obj.marker.lineEnds) {
                        obj.marker.lineEnds.push(line);
                    }

                    lines.push(line);
                    canvas.renderAll();
                    drawing = false;
                }
            }
        }

        function onMouseMove(evt) {
            //if (!isDown) return;
            var pointer = canvas.getPointer(evt.e);

            line.end = {x: pointer.x, y: pointer.y};
            positionLine(line);
            line.img.set({x2: pointer.x, y2: pointer.y});
            canvas.renderAll();
        }

        function stopDrawing() {
            console.log("stopDrawing");
            if(drawing) {
                drawing = false;
                canvas.off('mouse:move');
                line.img.remove();
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
                if(drawing) {
                    return;
                }

                var obj = evt.target;
                switch(obj.get('type')) {
                    case "marker":
                        moveMarker(obj, obj.left, obj.top);
                        break;
                    case "group":
                        var objects = obj.getObjects();
                        for(var i = 0; i < objects.length; i++) {
                            if(objects[i].get('type') == "marker") {
                                moveMarker(objects[i], objects[i].left + obj.left + obj.width/2, objects[i].top + obj.top  + obj.height/2);
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
                    line.start = {x: anchorLeft, y: anchorTop};
                    positionLine(line);

                    canvas.remove(line.head);
                    addArrowHead(line);
                }

                for (var i = 0; i < obj.marker.lineEnds.length; i++) {
                    var line = obj.marker.lineEnds[i];

                    anchorLeft = left + (obj.width / 2) * obj.scaleX;
                    anchorTop = top + (obj.height / 2) * obj.scaleY;
                    line.end = {x: anchorLeft, y: anchorTop};
                    positionLine(line);

                    canvas.remove(line.head);
                    addArrowHead(line);
                }
            }

            if(obj.marker.label) {
                var label = obj.marker.label;
                positionLabel(label, top, left + (obj.width * markerImgScale)/2)
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

