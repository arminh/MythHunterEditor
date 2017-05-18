/**
 * Created by armin on 03.04.16.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('MapService', mapService);

    mapService.$inject = ["$log", "$q", "$state", "$http", "$mdDialog", "DefaultConfig", "MapInteractionService", "MarkerType", "TaskService", "Task"];

    /* @ngInject */
    function mapService($log, $q, $state, $http, $mdDialog, DefaultConfig, MapInteraction, MarkerType, TaskService, Task) {

        $log = $log.getInstance("MapService", debugging);

        var user = null;
        var quest = null;
        var activeMarker = null;
        var continueDrawing = false;
        var drawing = false;

        var currentPosition = null;

        var service = {
            getQuest: getQuest,
            editQuest: editQuest,
            saveQuest: saveQuest,
            createTask: createTask,
            addTreePart: addTreePart,
            markerChanged: markerChanged,
            getCurrentPosition: getCurrentPosition,
            searchLocation: searchLocation,
            getDrawing: getDrawing,
            getContinueDrawing: getContinueDrawing,
            editQuestTree: editQuestTree,
            addQuestReward: addQuestReward
        };
        return service;

        ////////////////

        function getQuest(user) {
            $log.info("getQuest");
            quest = user.getCurrentQuest();

            if(quest) {
                addMarkers(quest);
                return quest;
            } else {
                quest = user.createQuest();
                quest.init();
                quest.setName("New Quest");
                return drawMarker(quest.getTreePartRoot().getTask()).then(addQuestToUser);
            }

            function addQuestToUser() {
                user.setCurrentQuest(quest);
                editQuest(quest, true);
                return quest;
            }

            // if (!quest) {
            //     return user.newQuest().then(
            //         function (result) {
            //             $log.info("getQuest_success: ", result);
            //             quest = result;
            //             quest.setLoaded(true);
            //             return result;
            //         },
            //         function (error) {
            //             $log.error("getQuest_fail: ", error);
            //             $state.go("app.profile");
            //         });
            // } else {
            //     $log.info("getQuest_success: ", quest);
            //     addMarkers(quest);
            //     return quest;
            // }
        }

        // function drawMarker() {
        //     var task = new Task(quest.getName());
        //     task.setType(activeMarker);
        //     drawing = true;
        //     task.drawMarker().then(function () {
        //         quest.addTask(task);
        //         if (continueDrawing) {
        //             drawMarker();
        //         } else {
        //             drawing = false;
        //         }
        //     });
        // }

        function editQuest(quest, editStartMarker) {
            $state.go("app.quest", {
                quest: quest,
                editStartMarker: editStartMarker
            });
        }

        function saveQuest(user, quest) {
            var errorDialog = $mdDialog.alert({
                templateUrl: "js/app/map/upload-confirmation/upload-confirmation-dialogue.tpl.html",
                bindToController: true,
                controller: "UploadConfirmationController",
                controllerAs: "uploadConfirmation",
                locals: {
                    quest: quest
                }
            });

            return $mdDialog
                .show( errorDialog ).then(uploadQuest);

            function uploadQuest(submit) {
                var errors = null;
                if(submit) {
                    quest.setSubmitted(true);
                    errors = quest.check(false);

                } else {
                    errors = quest.check(true);
                }

                if(!errors.getErroneous()) {
                    return user.uploadQuest().then(function () {
                        $state.go("app.profile");
                    });
                } else {
                    errors.showErrorDialog(true);
                    return $q.reject();
                }
            }

        }



        function addTreePart(evt) {
            var promise = $mdDialog.show({
                templateUrl: 'js/app/task/choose-type-dialog/choose-type-dialog.tpl.html',
                controller: 'ChooseTypeController',
                controllerAs: 'chooseTypeDialog',
                bindToController: true,
                targetEvent: evt
            });

            promise.then(success, cancel);

            function success() {

            }

            function cancel() {

            }
        }

        function drawMarker(task) {
            var deffered = $q.defer();
            var promises = [];

            if (task.getType() != MarkerType.INVISIBLE) {
                return MapInteraction.drawMarker(TaskService.getMarkerSrc(task.getType())).then(initMarker);

            } else {
                promises.push(MapInteraction.drawMarker(TaskService.getMarkerSrc(MarkerType.INVISIBLE)).then(initAndDraw));
                promises.push(MapInteraction.drawLine());
            }

            function initMarker(markerId) {
                var marker = MapInteraction.getMarkerById(markerId);
                task.setMarkerId(markerId);
                task.initFromMarker(marker);
            }

            function initAndDraw(markerId) {
                var marker = MapInteraction.getMarkerById(markerId);
                task.setMarkerId(markerId);
                task.initFromMarker(marker);

                promises.push(MapInteraction.drawMarker("media/target_marker.png").then(initTarget));
                $q.all(promises).then(drawFinished);
                return marker;
            }

            function initTarget(markerId) {
                var marker = MapInteraction.getMarkerById(markerId);
                task.setTargetMarkerId(markerId);
                task.initFromTargetMarker(marker);
                return marker;
            }

            function drawFinished(results) {
                var marker = results[0];
                var targetMarker = results[2];
                var line = results[1];
                marker.getGeometry().lineStart = line;
                targetMarker.getGeometry().lineEnd = line;
                deffered.resolve();
            }

            function addLineToMarker() {
                console.log("Line ready");
            }

            return deffered.promise;
        }

        function addMarkers(quest) {
            var startTask = quest.getTreePartRoot().getTask();
            startTask.setMarkerId(MapInteraction.addMarker(startTask.getLon(), startTask.getLat(), startTask.getMarkerSrc()));

            var treeParts = quest.getTreeParts();

            for (var i = 0; i < treeParts.length; i++) {
                var task = treeParts[i].getTask();
                task.setMarkerId(MapInteraction.addMarker(task.getLon(), task.getLat(), task.getMarkerSrc()));

                if (task.getTargetLon() != 0 && task.getTargetLat() != 0) {
                    task.setTargetMarkerId(MapInteraction.addMarker(task.getTargetLon(), task.getTargetLat(), "media/target_marker.png"));
                    MapInteraction.addLine(task.getMarkerId(), task.getTargetMarkerId());
                }
            }
        }


        function markerChanged(evt, args) {
            var changedMarker = args.marker;
            var changedMarkerId = changedMarker.getId();

            var treePartRoot = quest.getTreePartRoot();
            if (treePartRoot.getTask().getMarkerId() == changedMarkerId) {
                treePartRoot.getTask().updateMarker(changedMarker);
            }

            var treeParts = quest.getTreeParts();
            for (var i = 0; i < treeParts.length; i++) {
                if (treeParts[i].getTask().getMarkerId() == changedMarkerId) {
                    treeParts[i].getTask().updateMarker(changedMarker);
                }

                if (treeParts[i].getTask().getTargetMarkerId() == changedMarkerId) {
                    treeParts[i].getTask().updateTargetMarker(changedMarker);
                }
            }
        }

        function getDrawing() {
            return drawing;
        }

        function getContinueDrawing() {

        }

        function createTask(evt) {
            var task = new Task(quest.name);

            task.create(evt).then(function () {
                drawing = true;
                task.drawMarker().then(function () {
                    quest.newTreePart(task);
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

            if (!currentPosition) {
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

        function editQuestTree() {
            return $mdDialog.show({
                templateUrl: 'js/app/quest_tree/quest_tree.tpl.html',
                controller: 'QuestTreeController',
                controllerAs: "questTree",
                bindToController: true,
                locals: {
                    treeRoot: quest.getTreePartRoot()
                }
            });
        }

        function addQuestReward() {
            var promise = $mdDialog.show({
                templateUrl: 'js/app/reward/reward.tpl.html',
                controller: 'RewardController',
                controllerAs: "reward",
                bindToController: true,
                resolve: {
                    user: ['AuthenticationService', function (AuthenticationService) {
                        return AuthenticationService.userPromise();
                    }]
                },
                locals: {
                    rewardIds: angular.copy(quest.getRewards())
                }
            });

            promise.then(function (result) {
                var newRewards = result.rewards;
                var oldRewards = quest.getRewards();

                //Check if reward was removed
                for (var i = 0; i < oldRewards.length; i++) {
                    if ($.inArray(oldRewards[i], newRewards) < 0) {
                        quest.change();
                    }
                }

                //Check if reward was added
                for (var i = 0; i < newRewards.length; i++) {
                    if ($.inArray(newRewards[i], oldRewards) < 0) {
                        quest.change();
                    }
                }

                quest.clearRewards();
                for (var i = 0; i < newRewards.length; i++) {
                    quest.addReward(newRewards[i]);
                }
            });
        }
    }

})();

