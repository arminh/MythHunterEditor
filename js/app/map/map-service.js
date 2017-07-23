/**
 * Created by armin on 03.04.16.
 */

(function () {
        'use strict';

        angular
            .module('map')
            .factory('MapService', mapService);

        mapService.$inject = ["$log", "$q", "$state", "$http", "$mdDialog", "$timeout", "DefaultConfig", "MapInteractionService", "QuestService", "MarkerType", "TaskService", "CreationTutorialFlags"];

        /* @ngInject */
        function mapService($log, $q, $state, $http, $mdDialog, $timeout, DefaultConfig, MapInteraction, QuestService, MarkerType, TaskService, CreationTutorialFlags) {

            $log = $log.getInstance("MapService", debugging);

            var quest = null;
            var drawing = false;

            var currentPosition = null;

            var service = {
                init: init,
                placeTreePartMarker: placeTreePartMarker,
                editQuest: editQuest,
                saveQuest: saveQuest,
                addTreePart: addTreePart,
                cancelTreePart: cancelTreePart,
                addMarkers: addMarkers,
                markerChanged: markerChanged,
                getCurrentPosition: getCurrentPosition,
                searchLocation: searchLocation,
                getDrawing: getDrawing,
                editQuestTree: editQuestTree,
                addQuestReward: addQuestReward,
                showMarkerTutorial: showMarkerTutorial
            };
            return service;

            ////////////////

            function init(currentQuest) {
                quest = currentQuest;
                drawing = false;
                currentPosition = null;
            }



            function editQuest(quest, tutorial) {
                    $state.go("app.quest", {
                        quest: quest,
                        edit: true,
                        tutorial: tutorial
                    });

            }

            function saveQuest(user, quest) {
                return QuestService.saveQuest(user, quest);
            }

            function cancelTreePart() {
                drawing = false;
                MapInteraction.stopDrawing();
            }

            function addTreePart(quest, evt) {
                var treePart = null;

                var promise = $mdDialog.show({
                    templateUrl: 'js/app/task/choose-type-dialog/choose-type.tpl.html',
                    controller: 'ChooseTypeController',
                    controllerAs: 'chooseTypeDialog',
                    bindToController: true,
                    targetEvent: evt
                });
                promise.then(success);

                function success(result) {
                    drawing = true;
                    treePart = quest.createTreePartMarker(result.type);
                    $state.go("app.task", {originalTreePart: treePart, treePart: angular.copy(treePart)});
                }
            }

            function placeTreePartMarker(treePart, user, quest) {
                drawing = true;
                drawMarker(treePart.getTask(), user).then(addTreePartToQuest);

                function addTreePartToQuest() {
                    if(treePart.getTask().getType() == "start") {
                        quest.setTreePartRoot(treePart);
                        user.setCurrentQuest(quest);
                    } else {
                        QuestService.addTreePartToQuest(quest, treePart, true);
                    }

                    user.backup();
                    drawing = false;
                }
            }


            function drawMarker(task, user) {
                var deffered = $q.defer();
                var promises = [];

                if (task.getType() != MarkerType.INVISIBLE) {
                    return MapInteraction.drawMarker(TaskService.getMarkerSrc(task.getType())).then(initMarker);

                } else {
                    if(task.getType() == MarkerType.INVISIBLE && !user.getCreationTutorialFlag(CreationTutorialFlags.SEARCH)) {
                        TaskService.showCreationTutorial(task.getType(), false).then(drawSearchStart);
                    } else {
                        drawSearchStart();
                    }

                }

                function drawSearchStart() {
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

                    if(!user.getCreationTutorialFlag(CreationTutorialFlags.SEARCH)) {
                        TaskService.showCreationTutorial(task.getType(), true).then(drawSearchDestination);
                    } else {
                        drawSearchDestination();
                    }

                    return marker;
                }

                function drawSearchDestination() {
                    promises.push(MapInteraction.drawMarker("media/target_marker.png").then(initTarget));
                    $q.all(promises).then(drawFinished);
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
                    user.setCreationTutorialFlag(CreationTutorialFlags.SEARCH);
                    user.upload();
                    deffered.resolve();
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
                    escapeToClose: false,
                    locals: {
                        quest: quest
                    }
                });
            }

            function addQuestReward(user) {
                var promise = $mdDialog.show({
                    templateUrl: 'js/app/reward/reward-dialog/reward-dialog.tpl.html',
                    controller: 'RewardDialogController',
                    controllerAs: "rewardDialog",
                    bindToController: true,
                    resolve: {
                        user: function () {
                            return user;
                        }
                    },
                    locals: {
                        rewardIds: angular.copy(quest.getRewards())
                    }
                });

                promise.then(function (result) {
                    QuestService.addRewardsToQuest(quest, result.rewards);

                });
            }

            function showMarkerTutorial(type) {
                return TaskService.showCreationTutorial(type, false);
            }
        }

    })();

