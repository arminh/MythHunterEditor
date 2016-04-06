/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .controller('MapController', MapController);

    MapController.$inject = ["$scope", "$state", "MapInteractionService", "Task", "user"];

    /* @ngInject */
    function MapController($scope, $state, MapInteraction, Task, user) {
        var vm = this;

        vm.quest = null;

        vm.drawing = false;
        vm.continueDrawing = false;
        vm.showQuestline = false;

        var activeMarker = "";

        vm.toggleQuestline = toggleQuestline;
        vm.toggleMarker = toggleMarker;
        vm.newTask = newTask;
        vm.searchLocation = searchLocation;
        vm.gotoLocation = gotoLocation;
        vm.searchAndGotoLocation = searchAndGotoLocation;
        vm.editTask = editTask;
        vm.deleteTask = deleteTask;
        vm.previewHtml = previewHtml;
        vm.saveQuest = saveQuest;
        vm.cancelQuest = cancelQuest;

        $scope.$on('markerChanged', markerChanged);

        vm.sortableOptions = {
            axis: 'y',
            cancel: ".fixed, input",
            start: function(e, ui){
                ui.placeholder.height(ui.item.height());

            },
            update: function(e, ui) {
                vm.quest.change();
            },
            stop: function(e, ui) {
                vm.quest.rewireTree(vm.quest.treePartRoot, vm.quest.treeParts);
            },
            sort: function(e, ui) {
                var draggedMarkerId = ui.item.sortable.model.task.markerId;
                MapInteraction.animateMarker(draggedMarkerId);
            }
            //containment: "#map-quests"
        };

        activate();

        ////////////////

        function activate() {
            MapInteraction.init("mapView");
            vm.quest = user.getCurrentQuest();

            if(!vm.quest) {
                user.newQuest().then(
                    function(result) {
                        this.quest = result;
                    }.bind(vm),
                    function(error) {
                        $state.go("app.profile");
                    });
            } else {
                addMarkers(vm.quest);
            }
        }

        function addMarkers(quest) {
            quest.startTask.markerId = quest.startTask.addMarker();

            for(var i = 0; i < quest.tasks.length; i++) {
                quest.tasks[i].markerId = quest.tasks[i].addMarker();
            }
        }

        function toggleQuestline() {
            return !vm.showQuestline;
        }

        function toggleMarker(type) {
            if(activeMarker == type) {
                activeMarker = "";
                vm.continueDrawing = false;
                vm.drawing = false;

                MapInteraction.stopDrawing();
            } else {
                MapInteraction.stopDrawing();
                activeMarker = type;
                vm.continueDrawing = true;
                vm.drawing = true;
                drawMarker();
            }
        }

        function drawMarker() {
            var task = new Task(vm.quest.name);
            task.type = activeMarker;
            vm.drawing = true;
            task.drawMarker().then(function() {
                vm.quest.addTask(task);
                if(this.continueDrawing) {
                    drawMarker();
                } else {
                    this.drawing = false;
                }
            }.bind(vm));
        }

        function newTask() {
            var task = new Task(vm.quest.name);
            task.create().then(function() {
                $scope.drawing = true;
                task.drawMarker().then(function()
                {
                    vm.quest.addTask(task);
                    vm.drawing = false;
                });
            });
        }

        function searchLocation(query) {
            return MapInteraction.search(query);
        }

        function gotoLocation(location) {
            if(location) {
                MapInteraction.setCenter(parseFloat(location.lon), parseFloat(location.lat), 17);
            }
        }

        function searchAndGotoLocation(query) {
            //gotoLocation(MapInteraction.search(query)[0]);

        }

        function markerChanged(evt, args) {
            var changedMarker = args.marker;
            var changedMarkerId = changedMarker.getId();

            if(vm.quest.startTask.markerId == changedMarkerId) {
                vm.quest.startTask.updateMarker(changedMarker);
            }

            for(var i = 0; i < vm.quest.tasks.length; i++) {
                if(vm.quest.tasks[i].markerId == changedMarkerId) {
                    vm.quest.tasks[i].updateMarker(changedMarker);
                    $scope.$apply();
                }
            }
        }

        function editTask(task) {
            console.log(task);
            task.edit(vm.quest);
        }

        function deleteTask(index) {
            vm.quest.deleteTreePart(index);
        }

        function previewHtml(html) {
            html.preview();
        }

        function saveQuest() {
            user.uploadQuest().then(function() {
                $state.go("app.profile");
            });
        }

        function cancelQuest() {
            $state.go("app.profile");
        }
    }

})();

/*
var popupContainer = document.getElementById('popup');
var popupContent = $("#popupContent");
var popupCloser = $("#popupCloser");
 MapInteraction.addPopupOverlay(popupContainer);

 popupCloser.on("click", function() {
 MapInteraction.hideOverlay();
 popupCloser.blur();
 return false;
 });

$scope.$on('markerClicked', function (evt, args) {
    console.log("Marker clicked");
    var clickedMarker = args.marker;
    var clickedMarkerId = clickedMarker.getId();


    for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].id == clickedMarkerId) {
            popupContent.html($scope.tasks[i].popupTpl);
            MapInteraction.showOverlay(clickedMarker.getGeometry().getCoordinates());
            //MapInteraction.hideOverlay();
        }
    }


});*/
