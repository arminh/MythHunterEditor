/**
 * Created by Hannah on 24.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('action')
        .factory('ActionService', ActionService);

    ActionService.$inject = ["$log", "$q", "Action", "BackendService", "CardType"];

    /* @ngInject */
    function ActionService($log, $q, Action, BackendService, CardType) {
        $log = $log.getInstance("ActionService", debugging);

        var actions = [];
        var monsterActions = [];
        var spellActions = [];
        var minStarCost = 10;

        var actionsInitialized = false;

        var service = {
            getActions: getActions,
            getMonsterActions: getMonsterActions,
            getAction: getAction,
            getMinStarCost: getMinStarCost
        };
        return service;

        ////////////////

        function getActionsFromRemote() {
            $log.info("getActionsFromRemote");
            var monsterPromise = BackendService.getAllActionsOfCardType(CardType.MONSTER).then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    var action = new Action();
                    action.initFromRemote(results[i]);
                    monsterActions.push(action);
                    actions.push(action);
                    minStarCost = action.getStarCosts() < minStarCost ? action.getStarCosts() : minStarCost;
                }
                return monsterActions;
            });

            var spellPromise = BackendService.getAllActionsOfCardType(CardType.SPELL).then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    var action = new Action();
                    action.initFromRemote(results[i]);
                    spellActions.push(action);
                    actions.push(action);
                }
                return spellActions;
            });

            return $q.all([spellPromise, monsterPromise]).then(function() {
                actionsInitialized = true;
                $log.info("getActionsFromRemote_success", actions);
                return actions;
            })

        }

        function getActions() {
            if (actionsInitialized) {
                return actions;
            } else {
                return getActionsFromRemote();
            }
        }

        function getMonsterActions() {
            if (actionsInitialized) {
                return monsterActions;
            } else {
                return getActionsFromRemote().then(function () {
                    return monsterActions;
                });
            }
        }

        function getAction(id) {
            if (!actionsInitialized) {
                return null;
            }
            for (var i = 0; i < actions.length; i++) {
                if (actions[i].getRemoteId() == id) {
                    return actions[i];
                }
            }
        }

        function getMinStarCost() {
            return minStarCost;
        }

    }

})();

