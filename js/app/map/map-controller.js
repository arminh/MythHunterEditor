/**
 * Created by armin on 13.11.15.
 */

map.controller("mapController", function($scope, $state, $modal, $q, $localStorage, mapService, BackendService, MARKERS, MainService, AuthenticationService, Task) {

    $scope.startTask = null;
    $scope.tasks = [];

    $scope.drawing = false;
    $scope.continueDrawing = false;
    $scope.showQuestline = false;


    $scope.sortableOptions = {
        axis: 'y',
        cancel: ".fixed, input",
        start: function(e, ui){
            ui.placeholder.height(ui.item.height());
        },
        update: function(e, ui) {
            quest.change();
        }
        //containment: "#map-quests"
    };

    var activeMarker = "";

    var popupContainer = document.getElementById('popup');
    var popupContent = $("#popupContent");
    var popupCloser = $("#popupCloser");

    mapService.init("mapView");
    mapService.addPopupOverlay(popupContainer);

    var user = AuthenticationService.getUser();
    var quest = user.getCurrentQuest();

    if(!quest) {
        user.newQuest().then(
            function(result) {
                quest = result;
                this.tasks = quest.tasks;
                this.startTask = quest.startTask;
            }.bind($scope),
            function(error) {
                $state.go("app.profile");
            });
    } else {
        $scope.tasks = quest.tasks;
        $scope.startTask = quest.startTask;
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
        var task = new Task();
        task.type = activeMarker;
        task.drawMarker().then(function() {
            quest.addTask(task);
            if(this.continueDrawing) {
                drawMarker();
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
        var task = new Task();
        task.create().then(function() {
            task.drawMarker().then(function()
            {
                quest.addTask(task);
            });
        });
    };

    $scope.editTask = function(task) {
        task.edit();
    };

    var getMarkerSrc = function(type) {
        switch(type) {
            case "fight":
                return MARKERS.fight.path;
            case "quiz":
                return MARKERS.quiz.path;
            case "info":
                return MARKERS.info.path;
            default:
                return "";
        }
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

    $scope.save = function() {
        user.uploadQuest().then(function() {
            delete $localStorage.currentQuest;
            $state.go("app.profile");
        });
    }

});