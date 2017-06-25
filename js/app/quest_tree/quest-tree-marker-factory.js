/**
 * Created by Hannah on 20.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeMarker', QuestTreeMarkerFactory);

    QuestTreeMarkerFactory.$inject = ["$q", "TaskService", "TreePartType"];

    /* @ngInject */
    function QuestTreeMarkerFactory($q, TaskService, TreePartType) {
        var MARKER_Z_INDEX = 10;

        function QuestTreeMarker(treePart, id, canvas, imgScale) {
            this.treePart = treePart;
            this.id = id;
            this.type = TreePartType.Marker;
            this.canvas = canvas;
            this.imgScale = imgScale;
            this.img = null;
            this.label = null;
            this.outLines = [];
            this.inLines = [];
        }

        QuestTreeMarker.prototype = {
            constructor: QuestTreeMarker,
            add: add,
            move: move,
            getStartPoint: getAnchorPoint,
            getEndPoint: getAnchorPoint,
            addOutLine: addOutLine,
            removeOutLine: removeOutLine,
            addInLine: addInLine,
            removeInLine: removeInLine,
            addCircle: addCircle,
            showCircle: showCircle,
            hideCircle: hideCircle,
            showErrorCircle: showErrorCircle,

            getId: getId,
            getInLines: getInLines,
            getOutLines: getOutLines,
            getTreePart: getTreePart,
            getType: getType,
            getImage: getImage
        };

        return (QuestTreeMarker);

        ////////////////

        function add(type, x, y, label) {
            var deffered = $q.defer();

            fabric.Image.fromURL(TaskService.getMarkerSrc(type), initMarker.bind(this));

            function initMarker(img) {
                var markerImage = img.set({left: x, top: y}).scale(this.imgScale);
                markerImage.type = "marker";

                var markerLabel = addMarkerLabel.bind(this)(label, img.top, img.left + (img.width * this.imgScale) / 2);

                this.canvas.add(markerImage).renderAll();
                markerImage.hasControls = false;
                markerImage.hasBorders = false;
                markerImage.moveTo(MARKER_Z_INDEX);
                markerImage.marker = this;

                this.img = markerImage;
                this.label = markerLabel;
                this.circle = this.addCircle();
                deffered.resolve(this);
            }

            return deffered.promise;
        }

        function addCircle() {
            var circle = new fabric.Circle({
                radius: 7,
                fill: '',
                top: this.img.top + this.img.height * this.img.scaleY,
                left: this.img.left + this.img.width / 2 * this.img.scaleX,
                stroke: 'blue',
                strokeWidth: 2,
                originX: 'center',
                originY: 'center'
            });

            circle.type = "marker";
            circle.marker = this;
            circle.hasControls = false;
            circle.hasBorders = false;
            circle.hasRotatingPoint = false;
            circle.lockMovementX = true;
            circle.lockMovementY = true;
            circle.lockScalingX = true;
            circle.lockScalingY = true;
            circle.lockRotation = true;

            return circle;
        }

        function move(left, top) {
            var anchorLeft;
            var anchorTop;

            if (this.outLines && this.inLines) {
                for (var i = 0; i < this.outLines.length; i++) {
                    var line = this.outLines[i];

                    anchorLeft = left + (this.img.width / 2) * this.img.scaleX;
                    anchorTop = top + (this.img.height / 2) * this.img.scaleY;
                    line.setStart({x: anchorLeft, y: anchorTop});
                    line.position(true);

                    line.removeArrowHead();
                    line.drawArrowHead();
                }

                for (var i = 0; i < this.inLines.length; i++) {
                    var line = this.inLines[i];

                    anchorLeft = left + (this.img.width / 2) * this.img.scaleX;
                    anchorTop = top + (this.img.height / 2) * this.img.scaleY;
                    line.setEnd({x: anchorLeft, y: anchorTop});
                    line.position(true);

                    line.removeArrowHead();
                    line.drawArrowHead();
                }
            }

            if (this.label) {
                positionLabel(this.label, top, left + (this.img.width * this.imgScale) / 2)
            }

            this.circle.top = this.img.top + this.img.height * this.img.scaleY;
            this.circle.left = this.img.left + this.img.width / 2 * this.img.scaleX;
            this.circle.setCoords();
        }

        function addMarkerLabel(text, anchorTop, anchorLeft) {
            var markerLabel = new fabric.Text(text, {
                fontFamily: 'Arial',
                fontSize: 12,
                left: 100,
                top: 100
            });

            positionLabel(markerLabel, anchorTop, anchorLeft);

            this.canvas.add(markerLabel).renderAll();
            markerLabel.hasControls = false;
            markerLabel.hasBorders = false;
            markerLabel.set({selectable: false});
            markerLabel.moveTo(MARKER_Z_INDEX);

            return markerLabel;
        }

        function positionLabel(label, anchorTop, anchorLeft) {
            label.set("top", anchorTop - 20);
            label.set("left", anchorLeft - label.width / 2);
        }

        function getAnchorPoint() {
            return {
                left: this.img.left + (this.img.width / 2) * this.img.scaleX,
                top: this.img.top + (this.img.height / 2) * this.img.scaleY
            }
        }

        function addOutLine(line) {
            this.outLines.push(line);
            this.treePart.change();
        }

        function removeOutLine(line) {
            for (var i = 0; i < this.outLines.length; i++) {
                if (line.getId() == this.outLines[i].getId()) {
                    this.outLines.splice(i, 1);
                    this.treePart.change();
                    break;
                }
            }
        }

        function addInLine(line) {
            this.inLines.push(line);
            this.treePart.change();
        }

        function removeInLine(line) {
            for (var i = 0; i < this.inLines.length; i++) {
                if (line.getId() == this.inLines[i].getId()) {
                    this.inLines.splice(i, 1);
                    this.treePart.change();
                    break;
                }
            }
        }

        function getInLines() {
            return this.inLines;
        }

        function getOutLines() {
            return this.outLines;
        }

        function getId() {
            return this.id;
        }

        function getTreePart() {
            return this.treePart;
        }

        function getType() {
            return this.type;
        }

        function getImage() {
            return this.img;
        }

        function showCircle() {
            this.hideCircle();
            this.circle.stroke = 'blue';
            this.canvas.add(this.circle);
            this.circle.moveTo(MARKER_Z_INDEX);
        }

        function hideCircle() {
            this.canvas.remove(this.circle);
        }

        function showErrorCircle() {
            this.hideCircle();
            this.circle.stroke = 'red';
            this.canvas.add(this.circle);
            this.circle.moveTo(MARKER_Z_INDEX);
        }
    }

})();

