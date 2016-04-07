/**
 * Created by armin on 03.04.16.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('MapService', mapService);

    mapService.$inject = ["$log", "$q", "$state", "$http", "DefaultConfig", "MapInteractionService", "Task"];

    /* @ngInject */
    function mapService($log, $q, $state, $http, DefaultConfig, MapInteraction, Task) {

        $log = $log.getInstance("MapService", debugging);

        var user = null;
        var quest = null;
        var activeMarker = null;
        var continueDrawing = false;
        var drawing = true;

        var currentPosition = null;

        var service = {
            getQuest: getQuest,
            saveQuest: saveQuest,
            createTask: createTask,
            toggleMarker: toggleMarker,
            markerChanged: markerChanged,
            getCurrentPosition: getCurrentPosition,
            searchLocation: searchLocation,
            getDrawing: getDrawing
        };
        return service;

        ////////////////

        function getQuest(loggedInUser) {
            $log.info("getQuest");

            user = loggedInUser;
            quest = user.getCurrentQuest();

            if (!quest) {
                return user.newQuest().then(
                    function (result) {
                        $log.info("getQuest_success: ", result);
                        return result;
                    },
                    function (error) {
                        $log.info("getQuest_fail: ", error);
                        $state.go("app.profile");
                    });
            } else {
                $log.info("getQuest_success: ", quest);
                addMarkers(quest);
                return quest;
            }
        }

        function saveQuest() {
            user.uploadQuest().then(function() {
                $state.go("app.profile");
            });
        }

        function addMarkers(quest) {
            var startTask = quest.startTask;
            startTask.markerId = MapInteraction.addMarker(startTask.lon, startTask.lat, startTask.getMarkerSrc());

            for (var i = 0; i < quest.tasks.length; i++) {
                var task = quest.tasks[i];
                task.markerId = MapInteraction.addMarker(task.lon, task.lat, task.getMarkerSrc());
            }
        }

        function toggleMarker(type) {
            if(activeMarker == type) {
                activeMarker = "";
                continueDrawing = false;
                drawing = false;

                MapInteraction.stopDrawing();
            } else {
                MapInteraction.stopDrawing();
                activeMarker = type;
                continueDrawing = true;
                drawing = true;
                drawMarker();
            }
        }

        function drawMarker() {
            var task = new Task(quest.name);
            task.type = activeMarker;
            drawing = true;
            task.drawMarker().then(function() {
                quest.addTask(task);
                if(continueDrawing) {
                    drawMarker();
                } else {
                    drawing = false;
                }
            });
        }

        function markerChanged(evt, args) {
            var changedMarker = args.marker;
            var changedMarkerId = changedMarker.getId();

            if(quest.startTask.markerId == changedMarkerId) {
                quest.startTask.updateMarker(changedMarker);
            }

            for(var i = 0; i < quest.tasks.length; i++) {
                if(quest.tasks[i].markerId == changedMarkerId) {
                    quest.tasks[i].updateMarker(changedMarker);
                }
            }
        }

        function getDrawing() {
            return drawing;
        }

        function createTask() {
            var task = new Task(quest.name);
            task.create().then(function() {
                drawing = true;
                task.drawMarker().then(function()
                {
                    quest.addTask(task);
                    drawing = false;
                });
            });
        }

        function getCurrentPosition() {
            $log.info("getCurrentPosition");

            var navigatorOptions = {
                enableHighAccuracy: DefaultConfig.defaultEnableHighAccuracy,
                timeout: DefaultConfig.defaultTimeout,
                maximumAge: DefaultConfig.defaultMaximumAge
            };

            var deffered = $q.defer();

            if(!currentPosition) {
                navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionFail, navigatorOptions);
            } else {
                deffered.resolve(currentPosition);
            }

            function getCurrentPositionSuccess(result) {
                currentPosition = result;
                $log.info("getCurrentPosition_success: ", result);
                deffered.resolve(result);
            }

            function getCurrentPositionFail(error) {
                $log.error("getCurrentPosition_fail: ", error);
                deffered.reject(error);
            }

            return deffered.promise;
        }

        function searchLocation(query) {
            var url = "http://nominatim.openstreetmap.org/?q=" + query + "&format=json&callback=JSON_CALLBACK";

            return $http.get(url).then(function (result) {
                return result.data;
            });
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

