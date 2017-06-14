/**
 * Created by Hannah on 14.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeConnector', QuestTreeConnectorFactory);

    QuestTreeConnectorFactory.$inject = ["QuestTreeConnectorSlot"];

    /* @ngInject */
    function QuestTreeConnectorFactory(QuestTreeConnectorSlot) {

        function QuestTreeConnector(canvas) {
            this.canvas = canvas;
            this.img = null;
            this.inSlots = [];
            this.outSlot = null;
        }

        QuestTreeConnector.prototype = {
            constructor: QuestTreeConnector,
            add: add,
            drawSlots: drawSlots,
            drawInSlot: drawInSlot,
            drawOutSlot: drawOutSlot,
            move: move,
        };

        return (QuestTreeConnector);

        ////////////////

        function add(type, x, y) {
            this.img = new fabric.Rect({
                fill : 'white',
                stroke: 'black',
                left: x,
                top: y,
                width: 40,
                height: 75,
                // originX: 'center',
                // originY: 'center',
                perPixelTargetFind: true
            });

            this.img.type = "connector";
            this.img.hasControls = false;
            this.img.hasBorders = false;
            // this.img.hasRotatingPoint = false;
            // this.img.lockMovementX = true;
            // this.img.lockMovementY = true;
            // this.img.lockScalingX  = true;
            // this.img.lockScalingY  = true;
            // this.img.lockRotation = true;
            this.img.connector = this;
            this.canvas.add(this.img);

            this.drawSlots();

            return this;
        }

        function drawSlots() {
            for(var i = 0; i < 4; i++) {
                this.drawInSlot();
            }
            this.drawOutSlot();
        }

        function drawInSlot() {
            var slot = new QuestTreeConnectorSlot(this.canvas);
            slot.add(this.img.left, this.img.top + 10 + 15 * this.inSlots.length);
            this.inSlots.push(slot);
        }

        function drawOutSlot() {
            var slot = new QuestTreeConnectorSlot(this.canvas);
            slot.add(this.img.left + this.img.width, this.img.top + this.img.height / 2 - 5);
            this.outSlot = slot;
        }

        function move() {
            for(var i = 0; i < this.inSlots.length; i++) {
                this.inSlots[i].move(this.img.left, this.img.top + 10 + 15 * i);
            }
            this.outSlot.move(this.img.left + this.img.width, this.img.top + this.img.height / 2 - 5);
        }
    }

})();

