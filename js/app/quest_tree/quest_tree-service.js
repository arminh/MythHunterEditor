/**
 * Created by armin on 09.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeService', QuestTreeService);

    QuestTreeService.$inject = ["$q", "TaskService"];

    /* @ngInject */
    function QuestTreeService($q, TaskService) {
        var canvas = null;
        var markers = [];
        var lines = [];

        var drawing = false;
        var line = null;

        var xPos = 0;
        var markerId = 0;
        var curMarkerId = -1;
        var lineId = 0;

        var service = {
            init: init,
            activateDraw: activateDraw,
            deactivateDraw: deactivateDraw
        };
        return service;

        ////////////////

        function Marker(id, img) {
            this.id = id;
            this.img = img;
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
            lines = [];
            canvas = new fabric.Canvas('myCanvas');
            initDrag();
            return addTreePartMarker(treeRoot, null).then(activateDraw);
        }

        function addTreePartMarker(treePart, parentTreePart) {
            var promises = [];

            promises.push(addMarker(treePart.getTask().getType(), xPos += 100, 50));

            var successors = treePart.getSuccessors();
            for (var i = 0; i < successors.length; i++) {
                promises.push(addTreePartMarker(successors[i]));
            }

            return $q.all(promises);
        }

        function addMarker(type, x, y) {
            var deffered = $q.defer();

            fabric.Image.fromURL(TaskService.getMarkerSrc(type), function (img) {
                var markerImage = img.set({left: x, top: y}).scale(0.05);
                canvas.add(markerImage).renderAll();
                markerImage.hasControls = false;
                markerImage.hasBorders = false;

                var marker = new Marker(markerId++, markerImage);
                markers.push(marker);
                markerImage.marker = marker;
                deffered.resolve(marker);
            });

            return deffered.promise;
        }

        function addLine(points) {
            var lineImage = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'red',
                stroke: 'red',
                originX: 'center',
                originY: 'center',
                perPixelTargetFind: true
            });

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

        function addArrowHead(line) {

            var width = 15;
            var height = 20;

            var anchorLeft = line.img.x2;
            var anchorTop = line.img.y2;

            var triangle = new fabric.Triangle({
                fill: 'red',
                left: anchorLeft,
                top: anchorTop,
                height: 10,
                width: 8
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
            var anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
            var anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
            var points = [anchorLeft, anchorTop, pointer.x, pointer.y];
            canvas.on("mouse:up", onMouseUp);

            function onMouseUp() {
                canvas.off('mouse:up');

                if (!drawing) {
                    if(obj.left != objLeft || obj.top != objTop) {  //item was dragged
                        return;
                    }

                    curMarkerId = obj.marker.id;
                    line = addLine(points);
                    line.start = {x: anchorLeft, y: anchorTop};
                    line.end = {x: pointer.x, y: pointer.y};
                    positionLine(line);

                    if (obj.marker.lineStarts) {
                        obj.marker.lineStarts.push(line);
                    }

                    canvas.on('mouse:move', onMouseMove);
                    drawing = true;
                } else {
                    if (obj.marker.id == curMarkerId) {
                        return;
                    }

                    canvas.off('mouse:move');

                    anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                    anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                    line.end = {x: anchorLeft, y: anchorTop};

                    positionLine(line);
                    addArrowHead(line);

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

                var anchorLeft;
                var anchorTop;

                if (obj.marker.lineStarts && obj.marker.lineEnds) {
                    for (var i = 0; i < obj.marker.lineStarts.length; i++) {

                        anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                        anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                        obj.marker.lineStarts[i].start = {x: anchorLeft, y: anchorTop};
                        positionLine(obj.marker.lineStarts[i]);

                        canvas.remove(obj.marker.lineStarts[i].head);
                        addArrowHead(obj.marker.lineStarts[i]);
                    }

                    for (var i = 0; i < obj.marker.lineEnds.length; i++) {

                        anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                        anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                        obj.marker.lineEnds[i].end = {x: anchorLeft, y: anchorTop};
                        positionLine(obj.marker.lineEnds[i]);

                        canvas.remove(obj.marker.lineEnds[i].head);
                        addArrowHead(obj.marker.lineEnds[i]);
                    }
                }

            });
        }
    }

})();

