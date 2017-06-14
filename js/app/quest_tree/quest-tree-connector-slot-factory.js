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

        function QuestTreeConnectorSlot(canvas) {
            this.canvas = canvas;
            this.img = null;
        }

        QuestTreeConnectorSlot.prototype = {
            constructor: QuestTreeConnectorSlot,
            add: add,
            move: move
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
        }
    }

})();

