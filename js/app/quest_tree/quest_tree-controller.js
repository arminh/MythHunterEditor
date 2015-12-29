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

        var angle = getLineAngle(line);

        if(line.start) {
            var anchorLeft;
            var anchorTop;

            if(angle <= 45 || angle > 315) {
                anchorLeft = line.start.left + line.start.width * line.start.scaleX;
                anchorTop = line.start.top + (line.start.height / 2) * line.start.scaleY;
            }
            else if(angle <= 135) {
                anchorLeft = line.start.left + (line.start.width / 2) * line.start.scaleX;
                anchorTop = line.start.top;
            }
            else if(angle <= 225) {
                anchorLeft = line.start.left;
                anchorTop = line.start.top + (line.start.height / 2) * line.start.scaleY;
            }
            else if(angle <= 315) {
                anchorLeft = line.start.left + (line.start.width / 2) * line.start.scaleX;
                anchorTop = line.start.top + line.start.height * line.start.scaleY;
            }

            line.set({ x1: anchorLeft, y1: anchorTop });
        }

        if(line.end) {
            if(angle <= 45 || angle > 315) {
                anchorLeft = line.end.left;
                anchorTop = line.end.top + (line.end.height / 2) * line.end.scaleY;
            }
            else if(angle <= 135) {
                anchorLeft = line.end.left + (line.end.width / 2) * line.end.scaleX;
                anchorTop = line.end.top + line.end.height * line.end.scaleY;
            }
            else if(angle <= 225) {
                anchorLeft = line.end.left + line.end.width * line.end.scaleX;
                anchorTop = line.end.top + (line.end.height / 2) * line.end.scaleY;
            }
            else if(angle <= 315) {
                anchorLeft = line.end.left + (line.end.width / 2) * line.end.scaleX;
                anchorTop = line.end.top;
            }

            line.set({ x2: anchorLeft, y2: anchorTop });
        }


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
            var anchorTop = obj.top + obj.height * obj.scaleY;
            var points = [ anchorLeft, anchorTop, pointer.x, pointer.y ];

            if(!drawing) {

                line = createLine(points);
                line.start = obj;
                positionLine(line);

                if(obj.lineStarts) {
                    obj.lineStarts.push(line);
                }


                canvas.on('mouse:move', function(evt){
                    //if (!isDown) return;
                    var pointer = canvas.getPointer(evt.e);
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
                line.end = obj;
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

        if(obj.lineStarts && obj.lineEnds) {
            for(var i = 0; i < obj.lineStarts.length; i++) {
                positionLine(obj.lineStarts[i]);
                canvas.remove(obj.lineStarts[i].head);
                createArrowHead(obj.lineStarts[i]);
            }

            for(var i = 0; i < obj.lineEnds.length; i++) {
                positionLine(obj.lineEnds[i]);
                canvas.remove(obj.lineEnds[i].head);
                createArrowHead(obj.lineEnds[i]);
            }
        }



    });


}]);