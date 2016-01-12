/**
 * Created by armin on 08.12.15.
 */

quest_tree.controller("questTreeController", ["$scope", function($scope) {
    var canvas = new fabric.Canvas('canvas');

    var line;
    var drawing = false;

    $scope.markers = [];
    $scope.lines = [];

    $scope.checked = false;

    $('#checkbox').change(function() {
        if($scope.checked) {
            activateDraw();
        } else {
            deactivateDraw();
        }
    });


    var createMarker = function(type, x, y) {
        fabric.Image.fromURL('media/fight_marker.png', function (img) {
            var marker = img.set({ left: x, top: y }).scale(0.05);
            canvas.add(marker).renderAll();
            marker.hasControls = false;
            marker.hasBorders = false;
            marker.lineStarts = [];
            marker.lineEnds = [];
            $scope.markers.push(marker);
        });
    };

    var createLine= function(points) {
        var line = new fabric.Line(points, {
            strokeWidth: 2,
            fill: 'red',
            stroke: 'red',
            originX: 'center',
            originY: 'center',
            perPixelTargetFind: true
        });

        line.hasControls = false;
        line.hasBorders = false;
        line.set({ selectable:false });
        canvas.add(line);

        return line;
    };

    var positionLine = function(line) {
        console.log("Position");

        var vy = (line.end.y - line.start.y);
        var vx = (line.end.x - line.start.x);

        var len = Math.sqrt(vx*vx + vy*vy);

        vy = vy / len;
        vx = vx / len;

        var x1 = line.start.x + vx * 20;
        var y1 = line.start.y + vy * 20;

        var x2 = line.end.x - vx * 20;
        var y2 = line.end.y - vy * 20;

        line.set({ x1: x1, y1: y1, x2: x2, y2: y2 });
    };

    var createArrowHead = function(line) {

        var width = 15;
        var height = 20;

        var anchorLeft = line.x2;
        var anchorTop = line.y2;

        var triangle = new fabric.Triangle({
            fill: 'red',
            left: anchorLeft,
            top:anchorTop,
            height: 10,
            width: 8
        });

        triangle.set({ selectable:false });
        canvas.add(triangle);
        line.head = triangle;

        positionArrowHead(line, triangle);
    };

    var positionArrowHead = function(line, head) {

        var angle = getLineAngle(line);

        var angleRad = angle * (Math.PI/180);
        head.top = head.top - Math.cos(angleRad) * head.width / 2;
        head.left = head.left - Math.sin(angleRad) * head.width / 2;

        head.set({"angle": 90 - angle});
    };

    var getLineAngle = function(line) {
        var dy = (line.y1 - line.y2);
        var dx = (line.x2 - line.x1);

        var angle;

        if(dx == 0) {
            angle = 90;
        } else {
            angle = Math.atan(dy/dx);
            angle = angle * (180/Math.PI); // rad --> deg
        }


        //first quadrant
        if(line.x1 <= line.x2 && line.y1 > line.y2) {
            angle = angle + 0;

        }

        //second quadrant
        if(line.x1 > line.x2 && line.y1 >= line.y2) {
            angle = angle + 180;
        }

        //third quadrant
        if(line.x1 >= line.x2 && line.y1 < line.y2) {
            angle = angle + 180;
        }

        //fourth quadrant
        if(line.x1 < line.x2 && line.y1 <= line.y2) {
            angle = angle + 360;
        }

        return angle;
    };

    createMarker("", 50, 50);
    createMarker("", 50, 200);
    createMarker("", 250, 100);
    createMarker("", 400, 50);

    var activateDraw = function() {

        for(var i = 0; i < $scope.markers.length; i++) {
            $scope.markers[i].set("lockMovementX", true);
            $scope.markers[i].set("lockMovementY", true);
        }

        canvas.on('mouse:down', function(evt) {

            var obj = canvas.getActiveObject();
            if(!obj) {
                return;
            }
            var pointer = canvas.getPointer(evt.e);

            var anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
            var anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
            var points = [ anchorLeft, anchorTop, pointer.x, pointer.y ];

            if(!drawing) {

                line = createLine(points);
                line.start = {x: anchorLeft, y: anchorTop};
                line.end = {x: pointer.x, y: pointer.y};
                positionLine(line);

                if(obj.lineStarts) {
                    obj.lineStarts.push(line);
                }


                canvas.on('mouse:move', function(evt){
                    //if (!isDown) return;
                    var pointer = canvas.getPointer(evt.e);

                    line.end = {x: pointer.x, y: pointer.y};
                    positionLine(line);
                    line.set({ x2: pointer.x, y2: pointer.y });
                    canvas.renderAll();
                });

                drawing = true;
            } else {
                if(obj == line.start) {
                    return;
                }

                canvas.off('mouse:move');

                anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                line.end = {x: anchorLeft, y: anchorTop};

                positionLine(line);
                createArrowHead(line);

                if(obj.lineEnds) {
                    obj.lineEnds.push(line);
                }

                $scope.lines.push(line);
                canvas.renderAll();
                drawing = false;
            }
        });
    };

    var deactivateDraw = function() {
        canvas.off('mouse:down');
        canvas.off('mouse:move');

        for(var i = 0; i < $scope.markers.length; i++) {
            $scope.markers[i].set("lockMovementX", false);
            $scope.markers[i].set("lockMovementY", false);
        }
    };

    canvas.on('object:moving', function(evt) {
        var obj = evt.target;

        var anchorLeft
        var anchorTop;

        if(obj.lineStarts && obj.lineEnds) {
            for(var i = 0; i < obj.lineStarts.length; i++) {

                anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                obj.lineStarts[i].start = {x: anchorLeft, y: anchorTop};
                positionLine(obj.lineStarts[i]);

                canvas.remove(obj.lineStarts[i].head);
                createArrowHead(obj.lineStarts[i]);
            }

            for(var i = 0; i < obj.lineEnds.length; i++) {

                anchorLeft = obj.left + (obj.width / 2) * obj.scaleX;
                anchorTop = obj.top + (obj.height / 2) * obj.scaleY;
                obj.lineEnds[i].end = {x: anchorLeft, y: anchorTop};
                positionLine(obj.lineEnds[i]);

                canvas.remove(obj.lineEnds[i].head);
                createArrowHead(obj.lineEnds[i]);
            }
        }

    });


}]);