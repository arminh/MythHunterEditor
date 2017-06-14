/**
 * Created by Hannah on 20.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeLine', QuestTreeLineFactory);

    QuestTreeLineFactory.$inject = [];

    /* @ngInject */
    function QuestTreeLineFactory() {
        function QuestTreeLine(id, canvas) {
            this.canvas = canvas;
            this.id = id;
            this.img = null;
            this.start = null;
            this.end = null;
            this.head = null;
            this.fromMarker = null;
            this.toMarker = null;
        }

        QuestTreeLine.prototype = {
            constructor: QuestTreeLine,
            draw: draw,
            stopDrawing: stopDrawing,
            position: position,
            isHit: isHit,
            remove: remove,
            drawArrowHead: drawArrowHead,
            getArrowHead: getArrowHead,
            removeArrowHead: removeArrowHead,

            getImage: getImage,
            setStart: setStart,
            setEnd: setEnd,
            getFromMarker: getFromMarker,
            setFromMarker: setFromMarker,
            setToMarker: setToMarker
        };

        return (QuestTreeLine);

        ////////////////

        function draw(points, fromMarker, toMarker) {
            this.fromMarker = fromMarker;
            this.toMarker = toMarker;

            this.img = new fabric.Line(points, {
                strokeWidth: 4,
                fill: 'red',
                stroke: 'red',
                originX: 'center',
                originY: 'center',
                perPixelTargetFind: true
            });

            this.img.type = "line";
            this.img.hasControls = false;
            this.img.hasBorders = false;
            this.img.hasRotatingPoint = false;
            this.img.lockMovementX = true;
            this.img.lockMovementY = true;
            this.img.lockScalingX  = true;
            this.img.lockScalingY  = true;
            this.img.lockRotation = true;
            this.img.lineId = this.id;
            this.canvas.add(this.img);

            this.start = {x: points[0], y: points[1]};
            this.end = {x: points[2], y: points[3]};

            return this;
        }

        function stopDrawing() {
            this.img.remove();
        }

        function position() {
            var vy = (this.end.y - this.start.y);
            var vx = (this.end.x - this.start.x);

            var len = Math.sqrt(vx * vx + vy * vy);

            vy = vy / len;
            vx = vx / len;

            var x1 = this.start.x + vx * 20;
            var y1 = this.start.y + vy * 20;

            var x2 = this.end.x - vx * 20;
            var y2 = this.end.y - vy * 20;

            this.img.set({x1: x1, y1: y1, x2: x2, y2: y2});
        }

        function isHit(pointer) {
            if (containsPoint.bind(this)(this.img, pointer) || containsPoint.bind(this)(this.head, pointer)) {
                return true;
            }
        }

        function remove() {
            for (var i = 0; i < this.fromMarker.lineStarts.length; i++) {
                if (this.id = this.fromMarker.lineStarts[i]) {
                    this.fromMarker.lineStarts.splice(i, 1);
                }
            }
            for (var i = 0; i < this.toMarker.lineEnds.length; i++) {
                if (this.id = this.toMarker.lineEnds[i]) {
                    this.toMarker.lineEnds.splice(i, 1);
                }
            }
            this.fromMarker.treePart.removeSuccessor(this.toMarker.treePart.getId());
            this.canvas.remove(this.img);
            this.canvas.remove(this.head);
        }


        function drawArrowHead() {
            var anchorLeft = this.img.x2;
            var anchorTop = this.img.y2;

            var triangle = new fabric.Triangle({
                fill: 'red',
                left: anchorLeft,
                top: anchorTop,
                height: 18,
                width: 10
            });

            // triangle.set({selectable: false});
            triangle.hasControls = false;
            triangle.hasBorders = false;
            triangle.hasRotatingPoint = false;
            triangle.type = "head";
            triangle.lockMovementX = true;
            triangle.lockMovementY = true;
            triangle.lockScalingX  = true;
            triangle.lockScalingY  = true;
            triangle.lockRotation = true;
            triangle.lineId = this.id;
            this.head = triangle;

            positionArrowHead.bind(this)();
            this.canvas.add(triangle);
        }

        function positionArrowHead() {

            var angle = getLineAngle.bind(this)();

            var angleRad = angle * (Math.PI / 180);
            this.head.top = this.head.top - Math.cos(angleRad) * this.head.width / 2;
            this.head.left = this.head.left - Math.sin(angleRad) * this.head.width / 2;

            this.head.set({"angle": 90 - angle});
        }

        function getLineAngle() {
            var dy = (this.img.y1 - this.img.y2);
            var dx = (this.img.x2 - this.img.x1);

            var angle;

            if (dx == 0) {
                angle = 90;
            } else {
                angle = Math.atan(dy / dx);
                angle = angle * (180 / Math.PI); // rad --> deg
            }


            //first quadrant
            if (this.img.x1 <= this.img.x2 && this.img.y1 > this.img.y2) {
                angle = angle + 0;

            }

            //second quadrant
            if (this.img.x1 > this.img.x2 && this.img.y1 >= this.img.y2) {
                angle = angle + 180;
            }

            //third quadrant
            if (this.img.x1 >= this.img.x2 && this.img.y1 < this.img.y2) {
                angle = angle + 180;
            }

            //fourth quadrant
            if (this.img.x1 < this.img.x2 && this.img.y1 <= this.img.y2) {
                angle = angle + 360;
            }

            return angle;
        }

        function getArrowHead() {
            return this.head;
        }

        function removeArrowHead() {
            this.canvas.remove(this.head);
        }

        function containsPoint(object, point) {
            return !this.canvas.isTargetTransparent(object, point.x, point.y);
        }

        function getImage() {
            return this.img;
        }

        function setStart(value) {
            this.start = value;
        }

        function setEnd(value) {
            this.end = value;
        }

        function getFromMarker() {
            return this.fromMarker;
        }

        function setFromMarker(value) {
            this.fromMarker = value;
        }

        function setToMarker(value) {
            this.toMarker = value;
        }
    }

})();

