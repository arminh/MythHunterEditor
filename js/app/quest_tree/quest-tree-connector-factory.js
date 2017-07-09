/**
 * Created by Hannah on 14.06.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeConnector', QuestTreeConnectorFactory);

    QuestTreeConnectorFactory.$inject = ["$translate", "TreePartType", "QuestTreeConnectorInSlot", "QuestTreeConnectorOutSlot"];

    /* @ngInject */
    function QuestTreeConnectorFactory($translate, TreePartType, QuestTreeConnectorInSlot, QuestTreeConnectorOutSlot) {

        var CONNECTOR_Z_INDEX = 5;
        var CONNECTOR_LABEL_INDEX = 6;

        function QuestTreeConnector(type, treePart, id, canvas) {
            this.treePart = treePart;
            this.id = id;
            this.type = null;
            this.canvas = canvas;
            this.img = null;
            this.label = null;
            this.inSlots = [];
            this.outSlot = null;
        }

        QuestTreeConnector.prototype = {
            constructor: QuestTreeConnector,
            add: add,
            drawSlots: drawSlots,
            drawInSlot: drawInSlot,
            drawOutSlot: drawOutSlot,
            drawLabel: drawLabel,
            positionLabel: positionLabel,
            move: move,
            showSlotCircles: showSlotCircles,
            showSlotErrorCircles: showSlotErrorCircles,
            hideSlotCircles: hideSlotCircles,
            addOutLine: addOutLine,
            addInLine: addInLine,
            getOutLines: getOutLines,
            removeInLine: removeInLine,
            removeOutLine: removeOutLine,
            getNumInLines: getNumInLines,
            isHit: isHit,
            remove: remove,

            getType: getType,
            getId: getId,
            getTreePart: getTreePart,
            getStartPoint: getStartPoint,
            getEndPoint: getEndPoint,
            getImage: getImage
        };

        return (QuestTreeConnector);

        ////////////////

        function add(type, x, y) {
            this.type = type;
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
            this.img.moveTo(CONNECTOR_Z_INDEX);

            this.drawSlots();
            this.drawLabel();

            return this;
        }

        function drawSlots() {
            for(var i = 0; i < 4; i++) {
                this.drawInSlot();
            }
            this.drawOutSlot();
        }

        function drawInSlot() {
            var slot = new QuestTreeConnectorInSlot(this.canvas, this);
            slot.add(this.img.left, this.img.top + 10 + 15 * this.inSlots.length);
            this.inSlots.push(slot);
        }

        function drawOutSlot() {
            var slot = new QuestTreeConnectorOutSlot(this.canvas, this);
            slot.add(this.img.left + this.img.width, this.img.top + this.img.height / 2 - 5);
            this.outSlot = slot;
        }

        function drawLabel() {
            var label = "";
            switch(this.type) {
                case TreePartType.And:
                    label = $translate.instant("LABEL_AND");
                    break;
                case TreePartType.Or:
                    label = $translate.instant("LABEL_OR");
                    break;
            }

            this.label = new fabric.Text(label, {
                fontFamily: 'Arial',
                fontSize: 12,
            });
            this.canvas.add(this.label).renderAll();
            this.label.hasControls = false;
            this.label.hasBorders = false;
            this.label.set({selectable: false});
            this.label.moveTo(CONNECTOR_LABEL_INDEX);
            this.positionLabel();
        }

        function positionLabel() {
            this.label.set("top", this.img.top + this.img.height/2 - this.label.height/2);
            this.label.set("left", this.img.left + this.img.width/2 - this.label.width/2);
            this.canvas.renderAll();
        }

        function move() {
            for(var i = 0; i < this.inSlots.length; i++) {
                this.inSlots[i].move(this.img.left, this.img.top + 10 + 15 * i);
            }
            this.outSlot.move(this.img.left + this.img.width, this.img.top + this.img.height / 2 - 5);
            this.positionLabel();
        }

        function getNumInLines() {
            var numLines = 0;

            for(var i = 0; i < this.inSlots.length; i++) {
                var inSlot = this.inSlots[i];
                if(inSlot.getLine()) {
                    numLines++;
                }
            }

            return numLines;
        }

        function getOutLines() {
            return this.outSlot.getLines();
        }

        function getType() {
            return this.type;
        }

        function getId() {
            return this.id;
        }

        function getTreePart() {
            return this.treePart;
        }

        function showSlotCircles() {
            for(var i = 0; i < this.inSlots.length; i++) {
                this.inSlots[i].showCircle();
            }
        }

        function showSlotErrorCircles(type) {
            if(type == "out") {
                this.outSlot.showErrorCircle();
            } else {
                for(var i = 0; i < this.inSlots.length; i++) {
                    this.inSlots[i].showErrorCircle();
                }
            }
        }

        function hideSlotCircles() {
            for(var i = 0; i < this.inSlots.length; i++) {
                this.inSlots[i].hideCircle();
            }
        }

        function getStartPoint() {
            return this.outSlot.getAnchorPoint();
        }

        function getEndPoint() {
            for(var i = 0; i < this.inSlots.length; i++) {
                if(!this.inSlots[i].getLine()) {
                    return this.inSlots[i].getAnchorPoint();
                }
            }
        }

        function addOutLine(line) {
                this.outSlot.addLine(line);
                this.treePart.change();

        }

        function addInLine(line) {
            for(var i = 0; i < this.inSlots.length; i++) {
                if(!this.inSlots[i].getLine()) {
                    this.inSlots[i].setLine(line);
                    this.treePart.change();

                    break;
                }
            }
        }

        function removeInLine(line) {
            for(var i = 0; i < this.inSlots.length; i++) {
                if(this.inSlots[i].getLine() && this.inSlots[i].getLine().getId() == line.getId()) {
                    this.inSlots[i].setLine(null);
                    this.treePart.change();
                    break;
                }
            }
        }

        function removeOutLine(line) {
            this.outSlot.removeLine(line);
            this.treePart.change();
        }

        function isHit(pointer) {
            if (containsPoint.bind(this)(this.img, pointer)) {
                return true;
            }
        }

        function containsPoint(object, point) {
            return !this.canvas.isTargetTransparent(object, point.x, point.y);
        }

        function remove() {
            this.canvas.remove(this.img);
            this.canvas.remove(this.label);
            for(var i = 0; i < this.inSlots.length; i++) {
                this.inSlots[i].remove()
            }
            this.outSlot.remove();
        }

        function getImage() {
            return this.img;
        }
    }

})();

