/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", function($scope, $state, $localStorage, mapService, AuthenticationService, Task, user) {

    $scope.startTask = null;
    $scope.tasks = [];
    $scope.treeParts = [];

    $scope.drawing = false;
    $scope.continueDrawing = false;
    $scope.showQuestline = false;

    var treePartsToDelete = [];

    $scope.sortableOptions = {
        axis: 'y',
        cancel: ".fixed, input",
        start: function(e, ui){
            ui.placeholder.height(ui.item.height());

        },
        update: function(e, ui) {
            quest.change();
        },
        stop: function(e, ui) {
            quest.rewireTree($scope.treePartRoot, $scope.treeParts);
            console.log($scope.treePartRoot);
            console.log($scope.treeParts);
        },
        sort: function(e, ui) {
            var draggedMarkerId = ui.item.sortable.model.task.markerId;
            mapService.animateMarker(draggedMarkerId);
        }
        //containment: "#map-quests"
    };

    var activeMarker = "";

    var popupContainer = document.getElementById('popup');
    var popupContent = $("#popupContent");
    var popupCloser = $("#popupCloser");

    mapService.init("mapView");
    mapService.addPopupOverlay(popupContainer);

    var quest = user.getCurrentQuest();

    if(!quest) {
        user.newQuest().then(
            function(result) {
                console.log("Map create");
                quest = result;
                this.tasks = quest.tasks;
                this.treeParts = quest.treeParts;
                this.startTask = quest.startTask;
                this.treePartRoot = quest.treePartRoot;
            }.bind($scope),
            function(error) {
                $state.go("app.profile");
            });
    } else {
        $scope.tasks = quest.tasks;
        $scope.treeParts = quest.treeParts;
        $scope.startTask = quest.startTask;
        $scope.treePartRoot = quest.treePartRoot;
        addMarkers();
    }

    function addMarkers() {
        $scope.startTask.markerId = $scope.startTask.addMarker();

        for(var i = 0; i < $scope.tasks.length; i++) {
            $scope.tasks[i].markerId = $scope.tasks[i].addMarker();
        }
    }


    $scope.toggleQuestline = function() {
        return !$scope.showQuestline;
    };

    popupCloser.on("click", function() {
        mapService.hideOverlay();
        popupCloser.blur();
        return false;
    });

    $scope.toggleMarker = function(type) {
        if(activeMarker == type) {
            activeMarker = "";
            $scope.continueDrawing = false;
            $scope.drawing = false;

            mapService.stopDrawing();
        } else {
            mapService.stopDrawing();
            activeMarker = type;
            $scope.continueDrawing = true;
            $scope.drawing = true;
            drawMarker();

        }
    };

    function drawMarker() {
        var task = new Task(quest.name);
        task.type = activeMarker;
        $scope.drawing = true;
        task.drawMarker().then(function() {
            quest.addTask(task);
            if(this.continueDrawing) {
                drawMarker();
            } else {
                $scope.drawing = false;
            }
        }.bind($scope));
    }

    $scope.toggleRemove = function() {
        mapService.toggleRemove();
    };

    $scope.search = function(query) {
        return mapService.search(query);
    };

    $scope.goto = function (location) {
        if(location) {
            mapService.setCenter(parseFloat(location.lon), parseFloat(location.lat), 17);
        }
    };

    $scope.newTask = function() {
        var task = new Task(quest.name);
        task.create().then(function() {
            $scope.drawing = true;
            task.drawMarker().then(function()
            {
                quest.addTask(task);
                $scope.drawing = false;
            });
        });
    };

    $scope.editTask = function(task) {
        task.edit();
    };

    $scope.deleteTask = function(treePart, index) {
        if(treePart.remoteId > 0) {
            treePartsToDelete.push(treePart);
        }
        this.tasks.splice(index, 1);
        //quest.deleteTask(taskIndex);
    };

    function fightTpl(lon, lat) {
        return "<div><p>lon: " + lon + "</p><p>lat: " + lat + "</p></div>";
    }

    $scope.$on('markerChanged', function(evt, args) {
        var changedMarker = args.marker;
        var changedMarkerId = changedMarker.getId();

        if($scope.startTask.markerId == changedMarkerId) {
            $scope.startTask.updateMarker(changedMarker);
        }

        for(var i = 0; i < $scope.tasks.length; i++) {
            if($scope.tasks[i].markerId == changedMarkerId) {
                $scope.tasks[i].updateMarker(changedMarker);
                $scope.$apply();
            }
        }
    });

    $scope.previewHtml = function(html) {
        console.log(html);
        html.preview();
    };

    $scope.save = function() {
        user.uploadQuest().then(function() {
            console.log(user);
            $state.go("app.profile");
        });
    };

    $scope.cancel = function() {
        $state.go("app.profile");
    };

    /*    $scope.$on('markerRemoved', function(evt, args) {
     var delMarker = args.marker;
     var delMarkerId = delMarker.getId();

     for(var i = 0; i < $scope.tasks.length; i++) {
     if($scope.tasks[i].id == delMarkerId) {
     $scope.tasks.splice(i, 1);
     $scope.$apply();
     }
     }
     });*/

    /*    $scope.$on('markerClicked', function(evt, args) {
     console.log("Marker clicked");
     var clickedMarker = args.marker;
     var clickedMarkerId = clickedMarker.getId();


     for(var i = 0; i < $scope.tasks.length; i++) {
     if ($scope.tasks[i].id == clickedMarkerId) {
     popupContent.html($scope.tasks[i].popupTpl);
     mapService.showOverlay(clickedMarker.getGeometry().getCoordinates());
     //mapService.hideOverlay();
     }
     }


     });*/

});