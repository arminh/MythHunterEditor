/**
 * Created by Hannah on 20.04.2017.
 */

(function () {
    'use strict';

    angular
        .module('questTree')
        .factory('QuestTreeMarker', QuestTreeMarkerFactory);

    QuestTreeMarkerFactory.$inject = ["$q", "TaskService"];

    /* @ngInject */
    function QuestTreeMarkerFactory($q, TaskService) {

        function QuestTreeMarker(treePart, id, canvas, imgScale) {
            this.treePart = treePart;
            this.id = id;
            this.canvas = canvas;
            this.imgScale = imgScale;
            this.img = null;
            this.label = null;
            this.lineStarts = [];
            this.lineEnds = [];
        }

        QuestTreeMarker.prototype = {
            add: add,
            move: move,
            addLineStart: addLineStart,
            addLineEnd: addLineEnd,

            getId: getId,
            getLineEnds: getLineEnds,
            getTreePart: getTreePart,
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
                markerImage.marker = this;

                this.img = markerImage;
                this.label = markerLabel;
                deffered.resolve(this);
            }

            return deffered.promise;
        }

        function move(left, top) {
            var anchorLeft;
            var anchorTop;

            if (this.lineStarts && this.lineEnds) {
                for (var i = 0; i < this.lineStarts.length; i++) {
                    var line = this.lineStarts[i];

                    anchorLeft = left + (this.img.width / 2) * this.img.scaleX;
                    anchorTop = top + (this.img.height / 2) * this.img.scaleY;
                    line.setStart({x: anchorLeft, y: anchorTop});
                    line.position();

                    line.removeArrowHead();
                    line.drawArrowHead();
                }

                for (var i = 0; i < this.lineEnds.length; i++) {
                    var line = this.lineEnds[i];

                    anchorLeft = left + (this.img.width / 2) * this.img.scaleX;
                    anchorTop = top + (this.img.height / 2) * this.img.scaleY;
                    line.setEnd({x: anchorLeft, y: anchorTop});
                    line.position();

                    line.removeArrowHead();
                    line.drawArrowHead();
                }
            }

            if (this.label) {
                positionLabel(this.label, top, left + (this.img.width * this.imgScale) / 2)
            }
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

            return markerLabel;
        }

        function positionLabel(label, anchorTop, anchorLeft) {
            label.set("top", anchorTop - 20);
            label.set("left", anchorLeft - label.width / 2);
        }

        function addLineStart(line) {
            this.lineStarts.push(line);
        }

        function addLineEnd(line) {
            this.lineEnds.push(line);
        }

        function getLineEnds() {
            return this.lineEnds;
        }

        function getId() {
            return this.id;
        }

        function getTreePart() {
            return this.treePart;
        }

        function getImage() {
            return this.img;
        }
    }

})();

