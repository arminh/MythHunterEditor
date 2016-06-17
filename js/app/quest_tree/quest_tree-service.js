/**
 * Created by armin on 09.06.16.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeService', QuestTreeService);

    QuestTreeService.$inject = ["$q","TaskService"];

    /* @ngInject */
    function QuestTreeService($q, TaskService) {
        var canvas = null;
        var drawing = false;
        var markers = [];
        var lines = [];

        var service = {
            init: init,
            activateDraw: activateDraw,
            deactivateDraw: deactivateDraw
        };
        return service;

        ////////////////

        function init(treeRoot) {
            markers = [];
            lines = [];
            canvas = new fabric.Canvas('myCanvas');
            initDrag();
            return createTreePartMarker(treeRoot);

        }

        function createTreePartMarker(treePart) {
            var promises = [];

            promises.push(createMarker(treePart.getTask().getType(), 10, 10));

            var successors = treePart.getSuccessors();
            for(var i = 0; i < successors.length; i++) {
                promises.push(createTreePartMarker(successors[i]));
            }

            return $q.all(promises);
        }

        function createMarker(type, x, y) {
            var deffered = $q.defer();

            fabric.Image.fromURL(TaskService.getMarkerSrc(type), function (img) {
                var marker = img.set({left: x, top: y}).scale(0.05);
                canvas.add(marker).renderAll();
                marker.hasControls = false;
                marker.hasBorders = false;
                marker.lineStarts = [];
                marker.lineEnds = [];
                markers.push(marker);
                deffered.resolve(marker);
            });

            return deffered.promise;
        }

        function createLine(points) {
            var line = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'red',
                stroke: 'red',
                originX: 'center',
                originY: 'center',
                perPixelTargetFind: true
            });

            line.hasControls = false;
            line.hasBorders = false;
            line.set({selectable: false});
            canvas.add(line);

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

            line.set({x1: x1, y1: y1, x2: x2, y2: y2});
        }

        function createArrowHead(line) {

            var width = 15;
            var height = 20;

            var anchorLeft = line.x2;
            var anchorTop = line.y2;

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
            var dy = (line.y1 - line.y2);
            var dx = (line.x2 - line.x1);

            var angle;

            if (dx == 0) {
                angle = 90;
            } else {
                angle = Math.atan(dy / dx);
                angle = angle * (180 / Math.PI); // rad --> deg
            }


            //first quadrant
            if (line.x1 <= line.x2 && line.y1 > line.y2) {
                angle = angle + 0;

            }

            //second quadrant
            if (line.x1 > line.x2 && line.y1 >= line.y2) {
                angle = angle + 180;
            }

            //third quadrant
            if (line.x1 >= line.x2 && line.y1 < line.y2) {
                angle = angle + 180;
            }

            //fourth quadrant
            if (line.x1 < line.x2 && line.y1 <= line.y2) {
                angle = angle + 360;
            }

            return angle;
        }


        function activateDraw() {
            console.log(markers);
            for (var i = 0; i < markers.length; i++) {
                markers[i].set("lockMovementX", true);
                markers[i].set("lockMovementY", true);
            }

            canvas.on('mouse:down', function (evt) {

                var obj = canvas.getActiveObject();
                if (!obj) {
                    return;
                }
                var pointer = canvas.getPointer(evt.e);

                var anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                var anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                var points = [anchorLeft, anchorTop, pointer.x, pointer.y];

                if (!drawing) {

                    var line = createLine(points);
                    line.start = {x: anchorLeft, y: anchorTop};
                    line.end = {x: pointer.x, y: pointer.y};
                    positionLine(line);

                    if (obj.lineStarts) {
                        obj.lineStarts.push(line);
                    }


                    canvas.on('mouse:move', function (evt) {
                        //if (!isDown) return;
                        var pointer = canvas.getPointer(evt.e);

                        line.end = {x: pointer.x, y: pointer.y};
                        positionLine(line);
                        line.set({x2: pointer.x, y2: pointer.y});
                        canvas.renderAll();
                    });

                    drawing = true;
                } else {
                    if (obj == line.start) {
                        return;
                    }

                    canvas.off('mouse:move');

                    anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                    anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                    line.end = {x: anchorLeft, y: anchorTop};

                    positionLine(line);
                    createArrowHead(line);

                    if (obj.lineEnds) {
                        obj.lineEnds.push(line);
                    }

                    lines.push(line);
                    canvas.renderAll();
                    drawing = false;
                }
            });
        }

        function deactivateDraw() {
            canvas.off('mouse:down');
            canvas.off('mouse:move');

            for (var i = 0; i < markers.length; i++) {
                markers[i].set("lockMovementX", false);
                markers[i].set("lockMovementY", false);
            }
        }

        function initDrag() {
            canvas.on('object:moving', function (evt) {
                var obj = evt.target;

                var anchorLeft;
                var anchorTop;

                if (obj.lineStarts && obj.lineEnds) {
                    for (var i = 0; i < obj.lineStarts.length; i++) {

                        anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                        anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                        obj.lineStarts[i].start = {x: anchorLeft, y: anchorTop};
                        positionLine(obj.lineStarts[i]);

                        canvas.remove(obj.lineStarts[i].head);
                        createArrowHead(obj.lineStarts[i]);
                    }

                    for (var i = 0; i < obj.lineEnds.length; i++) {

                        anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                        anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                        obj.lineEnds[i].end = {x: anchorLeft, y: anchorTop};
                        positionLine(obj.lineEnds[i]);

                        canvas.remove(obj.lineEnds[i].head);
                        createArrowHead(obj.lineEnds[i]);
                    }
                }

            });
        }
    }

})();

