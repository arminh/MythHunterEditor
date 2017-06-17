/**
 * Created by Hannah on 14.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeConnectorSlot', QuestTreeConnectorSlotFactory);

    QuestTreeConnectorSlotFactory.$inject = [];

    /* @ngInject */
    function QuestTreeConnectorSlotFactory() {

        function QuestTreeConnectorSlot(canvas, type) {
            this.type = type;
            this.canvas = canvas;
            this.img = null;
            this.line = null;
        }

        QuestTreeConnectorSlot.prototype = {
            constructor: QuestTreeConnectorSlot,
            add: add,
            move: move,
            getAnchorPoint: getAnchorPoint,

            getLine: getLine,
            setLine: setLine
        };

        return (QuestTreeConnectorSlot);

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

            return this;
        }

        function move(x, y) {
            this.img.left = x -3;
            this.img.top = y;

            if(this.line) {
                var anchor = this.getAnchorPoint();
                if(this.type == "in") {
                    this.line.setEnd({x: anchor.left, y: anchor.top}) ;
                } else if(this.type == "out") {
                    this.line.setStart({x: anchor.left, y: anchor.top}) ;
                }
                this.line.position();
                this.line.removeArrowHead();
                this.line.drawArrowHead();
            }
        }

        function getAnchorPoint() {
            if(this.type == "in") {
                return {
                    top: this.img.top + this.img.height / 2,
                    left: this.img.left
                }
            } else if(this.type == "out") {
                return {
                    top: this.img.top + this.img.height / 2,
                    left: this.img.left + this.img.width
                }
            }

        }

        function getLine() {
            return this.line;
        }

        function setLine(line) {
            this.line = line;
        }
    }

})();

