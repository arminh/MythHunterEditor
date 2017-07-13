/**
 * Created by Hannah on 14.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeConnectorInSlot', QuestTreeConnectorInSlotFactory);

    QuestTreeConnectorInSlotFactory.$inject = [];

    /* @ngInject */
    function QuestTreeConnectorInSlotFactory() {
        var SLOT_T_INDEX = 6;

        function QuestTreeConnectorInSlot(canvas, connector) {
            this.type = "in";
            this.canvas = canvas;
            this.img = null;
            this.circle = null;
            this.line = null;
            this.connector = connector;
        }

        QuestTreeConnectorInSlot.prototype = {
            constructor: QuestTreeConnectorInSlot,
            add: add,
            move: move,
            getAnchorPoint: getAnchorPoint,
            showCircle: showCircle,
            showErrorCircle: showErrorCircle,
            hideCircle: hideCircle,
            remove: remove,

            getLine: getLine,
            setLine: setLine,
            getType: getType
        };

        return (QuestTreeConnectorInSlot);

        ////////////////

        function add(x, y) {
            this.img = new fabric.Rect({
                fill: 'black',
                stroke: 'black',
                left: x - 3,
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
            this.img.lockScalingX = true;
            this.img.lockScalingY = true;
            this.img.lockRotation = true;
            this.img.lineId = this.id;
            this.canvas.add(this.img);
            this.img.moveTo(SLOT_T_INDEX);

            this.circle = new fabric.Circle({
                radius: 7,
                fill: '',
                top: y + 5,
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
            this.circle.lockScalingX = true;
            this.circle.lockScalingY = true;
            this.circle.lockRotation = true;

            return this;
        }

        function move(x, y) {
            this.img.left = x - 3;
            this.img.top = y;
            this.img.setCoords();
            this.circle.top = y + 5;
            this.circle.left = x;
            this.circle.setCoords();
            if (this.line) {
                var anchor = this.getAnchorPoint();
                this.line.setEnd({x: anchor.left, y: anchor.top});
                this.line.position(true);
                this.line.removeArrowHead();
                this.line.drawArrowHead();
            }
        }

        function getAnchorPoint() {
            return {
                top: this.img.top + this.img.height / 2,
                left: this.img.left
            }
        }

        function showCircle() {

            if (!this.line) {
                this.hideCircle();
                this.circle.stroke = 'blue';
                this.canvas.add(this.circle);
                this.circle.moveTo(SLOT_T_INDEX);
            }
        }

        function showErrorCircle() {
            if (!this.line) {
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
            if (this.line) {
                this.line.remove();
            }
        }

        function getLine() {
            return this.line;
        }

        function setLine(line) {
            this.line = line;
        }

        function getType() {
            return this.type;
        }
    }

})();

