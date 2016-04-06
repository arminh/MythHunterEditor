/**
 * Created by armin on 03.04.16.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('mapService', mapService);

    mapService.$inject = ["$log", "$q", "$state", "DefaultConfig", "MapInteractionService"];

    /* @ngInject */
    function mapService($log, $q, $state, DefaultConfig, MapInteraction) {

        $log = $log.getInstance("MapService", debugging);

        var currentPosition = null;
        var quest = null;

        var service = {
            getQuest: getQuest,
            getCurrentPosition: getCurrentPosition,
            searchLocation: searchLocation
        };
        return service;

        ////////////////

        function getQuest(user) {
            $log.info("getQuest");
            var quest = user.getCurrentQuest();

            if (!quest) {
                user.newQuest().then(
                    function (result) {
                        $log.info("getQuest_success: ", result);
                        quest = result;
                    },
                    function (error) {
                        $log.info("getQuest_fail: ", error);
                        $state.go("app.profile");
                    });
            } else {
                $log.info("getQuest_success: ", quest);
                addMarkers(quest);
            }

            return quest;
        }

        function addMarkers(quest) {
            var startTask = quest.startTask;
            startTask.markerId = MapInteraction.addMarker(startTask.lon, startTask.lat, startTask.getMarkerSrc());

            for (var i = 0; i < quest.tasks.length; i++) {
                var task = quest.tasks[i];
                task.markerId = MapInteraction.addMarker(task.lon, task.lat, task.getMarkerSrc());
            }
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

        function searchLocation() {
            var url = "http://nominatim.openstreetmap.org/?q=" + query + "&format=json&callback=JSON_CALLBACK";

            return $http.get(url).then(function (result) {
                return result.data;
            });
        }
    }

})();

