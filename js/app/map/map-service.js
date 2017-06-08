/**
 * Created by armin on 03.04.16.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('MapService', mapService);

    mapService.$inject = ["$log", "$q", "$state", "$http", "$mdDialog", "DefaultConfig", "MapInteractionService", "QuestService", "MarkerType", "TaskService"];

    /* @ngInject */
    function mapService($log, $q, $state, $http, $mdDialog, DefaultConfig, MapInteraction, QuestService, MarkerType, TaskService) {

        $log = $log.getInstance("MapService", debugging);

        var quest = null;
        var drawing = false;

        var currentPosition = null;

        var service = {
            getQuest: getQuest,
            editQuest: editQuest,
            saveQuest: saveQuest,
            addTreePart: addTreePart,
            markerChanged: markerChanged,
            getCurrentPosition: getCurrentPosition,
            searchLocation: searchLocation,
            getDrawing: getDrawing,
            editQuestTree: editQuestTree,
            addQuestReward: addQuestReward
        };
        return service;

        ////////////////

        function getQuest(user) {
            $log.info("getQuest");
            quest = user.getCurrentQuest();

            if (quest) {
                addMarkers(quest);
                return quest;
            } else {
                quest = user.createQuest();
                quest.init("New Quest");
                quest.setLoaded(true);
                return drawMarker(quest.getTreePartRoot().getTask()).then(addQuestToUser);
            }

            function addQuestToUser() {
                user.setCurrentQuest(quest);
                editQuest(quest, true);
                return quest;
            }
        }


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
                .show(errorDialog).then(uploadQuest);

            function uploadQuest(submit) {
                var errors = null;
                if (submit) {
                    quest.setSubmitted(true);
                    errors = quest.check();
                    if (!errors.getErroneous()) {
                        return user.uploadQuest().then(function () {
                            $state.go("app.profile");
                        });
                    } else {
                        errors.showErrorDialog(true);
                        return $q.reject();
                    }
                } else {
                    return user.uploadQuest().then(function () {
                        $state.go("app.profile");
                    });
                }
            }
            }

            function addTreePart(user, quest, evt) {
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
                    treePart = quest.createTreePart(result.type);
                    drawMarker(treePart.getTask()).then(editTreePart);
                }

                function editTreePart() {
                    QuestService.addTreePartToQuest(quest, treePart, true);
                    user.backup();
                    $state.go("app.task", {treePart: treePart});
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
                    locals: {
                        treeRoot: quest.getTreePartRoot()
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
        }

    }

    )();

