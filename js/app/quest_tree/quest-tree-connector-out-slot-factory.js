/**
 * Created by Hannah on 14.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeConnectorOutSlot', QuestTreeConnectorOutSlotFactory);

    QuestTreeConnectorOutSlotFactory.$inject = [];

    /* @ngInject */
    function QuestTreeConnectorOutSlotFactory() {
        var SLOT_T_INDEX = 6;

        function QuestTreeConnectorOutSlot(canvas, connector) {
            this.type = "out";
            this.canvas = canvas;
            this.img = null;
            this.circle = null;
            this.lines = [];
            this.connector = connector;
        }

        QuestTreeConnectorOutSlot.prototype = {
            constructor: QuestTreeConnectorOutSlot,
            add: add,
            move: move,
            getAnchorPoint: getAnchorPoint,
            showErrorCircle: showErrorCircle,
            hideCircle: hideCircle,
            remove: remove,

            getLines: getLines,
            addLine: addLine,
            removeLine: removeLine,
            getType: getType
        };

        return (QuestTreeConnectorOutSlot);

        ////////////////

        function add(x, y) {
            this.img = new fabric.Rect({
                fill : 'black',
                stroke: 'black',
                left: x-3,
                top: y,
                width: 6,
                height: 10,
                // originX: 'center',
                // originY: 'center',
                perPixelTargetFind: true
            });

            this.img.type = "slot";
            this.img.slot = this;
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
            this.img.moveTo(SLOT_T_INDEX);

            this.circle = new fabric.Circle({
                radius: 7,
                fill: '',
                top: y+5,
                left: x,
                stroke: 'blue',
                strokeWidth: 2,
                originX: 'center',
                originY: 'center'
            });

            this.circle.type = "slot";
            this.circle.slot = this;
            this.circle.hasControls = false;
            this.circle.hasBorders = false;
            this.circle.hasRotatingPoint = false;
            this.circle.lockMovementX = true;
            this.circle.lockMovementY = true;
            this.circle.lockScalingX  = true;
            this.circle.lockScalingY  = true;
            this.circle.lockRotation = true;

            return this;
        }

        function move(x, y) {
            this.img.left = x -3;
            this.img.top = y;
            this.img.setCoords();
            this.circle.top = y + 5;
            this.circle.left = x;
            this.circle.setCoords();
            for(var i = 0; i < this.lines.length; i++) {
                var anchor = this.getAnchorPoint();
                this.lines[i].setStart({x: anchor.left, y: anchor.top}) ;
                this.lines[i].position(true);
                this.lines[i].removeArrowHead();
                this.lines[i].drawArrowHead();
            }
        }

        function getAnchorPoint() {
            if(this.type == "in") {
                return {
                    top: this.img.top + this.img.height / 2,
                    left: this.img.left
                }
            } else if(this.type == "out") {
                this.hideCircle();
                return {
                    top: this.img.top + this.img.height / 2,
                    left: this.img.left + this.img.width
                }
            }
        }

        function showErrorCircle() {
            if(!this.line) {
                this.hideCircle();
                this.circle.stroke = 'red';
                this.canvas.add(this.circle);
                this.circle.moveTo(SLOT_T_INDEX);
            }

        }

        function hideCircle() {
            this.canvas.remove(this.circle);
        }

        function remove() {
            this.hideCircle();
            this.canvas.remove(this.img);
            for(var i = 0; i < this.lines.length; i++) {
                this.lines[i].remove();
            }
        }

        function getLines() {
            return this.lines;
        }

        function addLine(line) {
            this.lines.push(line);
        }

        function removeLine(line) {
            for(var i = 0; i < this.lines.length; i++) {
                if(this.lines[i].getId() == line.getId()) {
                    this.lines.splice(i, 1);
                    break;
                }
            }
        }

        function getType() {
            return this.type;
        }
    }

})();

