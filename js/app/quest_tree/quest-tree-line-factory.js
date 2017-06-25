/**
 * Created by Hannah on 20.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeLine', QuestTreeLineFactory);

    QuestTreeLineFactory.$inject = ["TreePartType"];

    /* @ngInject */
    function QuestTreeLineFactory(TreePartType) {
        var LINE_Z_INDEX = 20;

        function QuestTreeLine(id, canvas) {
            this.canvas = canvas;
            this.id = id;
            this.img = null;
            this.start = null;
            this.end = null;
            this.head = null;
            this.fromElement = null;
            this.toElement = null;
        }

        QuestTreeLine.prototype = {
            constructor: QuestTreeLine,
            draw: draw,
            stopDrawing: stopDrawing,
            allowSelection: allowSelection,
            preventSelection: preventSelection,
            position: position,
            isHit: isHit,
            remove: remove,
            drawArrowHead: drawArrowHead,
            getArrowHead: getArrowHead,
            removeArrowHead: removeArrowHead,

            getId: getId,
            getImage: getImage,
            setStart: setStart,
            setEnd: setEnd,
            getFromElement: getFromElement,
            setFromElement: setFromElement,
            getToElement: getToElement,
            setToElement: setToElement
        };

        return (QuestTreeLine);

        ////////////////

        function draw(points, fromMarker, toMarker) {
            this.fromElement = fromMarker;
            this.toElement = toMarker;

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
            // this.img.hasBorders = false;
            this.img.hasRotatingPoint = false;
            this.img.lockMovementX = true;
            this.img.lockMovementY = true;
            this.img.lockScalingX  = true;
            this.img.lockScalingY  = true;
            this.img.lockRotation = true;
            this.img.lineId = this.id;
            this.canvas.add(this.img);
            this.img.moveTo(LINE_Z_INDEX);

            this.start = {x: points[0], y: points[1]};
            this.end = {x: points[2], y: points[3]};

            return this;
        }

        function stopDrawing(fromElementId) {
            this.img.remove();
        }

        //For repositioning
        function preventSelection() {
            this.img.set({selectable: false});
            if(this.head) {
                this.head.set({selectable: false});
            }
        }

        function allowSelection() {
            this.img.set({selectable: true});
            if(this.head) {
                this.head.set({selectable: true});
            }
        }

        function position(setCoordinates) {
            var x1 = 0;
            var y1 = 0;
            var x2 = 0;
            var y2 = 0;

            var vy = (this.end.y - this.start.y);
            var vx = (this.end.x - this.start.x);

            var len = Math.sqrt(vx * vx + vy * vy);

            vy = vy / len;
            vx = vx / len;


            if(this.fromElement && this.fromElement.getType() == TreePartType.Marker) {
                x1 = this.start.x + vx * 20;
                y1 = this.start.y + vy * 20;
            } else {
                x1 = this.start.x;
                y1 = this.start.y;
            }

            if(this.toElement && this.toElement.getType() == TreePartType.Marker) {
                x2 = this.end.x - vx * 20;
                y2 = this.end.y - vy * 20;
            } else {
                x2 = this.end.x;
                y2 = this.end.y;
            }

            this.img.set({x1: x1, y1: y1, x2: x2, y2: y2});
            if(setCoordinates) {
                this.img.setCoords();
            }
            // this.allowSelection();
        }

        function isHit(pointer) {
            if (containsPoint.bind(this)(this.img, pointer) || containsPoint.bind(this)(this.head, pointer)) {
                return true;
            }
        }

        function remove() {
            this.fromElement.removeOutLine(this);
            this.toElement.removeInLine(this);
            this.fromElement.getTreePart().removeSuccessor(this.toElement.treePart.getId());
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

            triangle.hasControls = false;
            // triangle.hasBorders = false;
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
            triangle.moveTo(LINE_Z_INDEX);
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

        function getId() {
            return this.id;
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

        function getFromElement() {
            return this.fromElement;
        }

        function setFromElement(value) {
            this.fromElement = value;
        }

        function getToElement() {
            return this.toElement;
        }

        function setToElement(value) {
            this.toElement = value;
        }
    }

})();

