/**
 * Created by Hannah on 24.11.2016.
 */

(function () {
    'use strict';

    angular
        .module('action')
        .factory('ActionService', ActionService);

    ActionService.$inject = ["$log", "Action"];

    /* @ngInject */
    function ActionService($log, Action) {
        $log = $log.getInstance("ActionService", debugging);

        var actions = [];
        var actionsInitialized = false;

        var service = {
            getActionsFromRemote: getActionsFromRemote,
            getActions: getActions,
            getAction: getAction
        };
        return service;

        ////////////////

        function getActionsFromRemote() {
            $log.info("getActionsFromRemote");
            return BackendService.getAllActionsOfCardType(CardType.MONSTER).then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    var action = new Action();
                    action.initFromRemote(results[i]);
                    actions.push(action);
                }
                actionsInitialized = true;
                $log.info("getActionsFromRemote_success", actions);
                return actions;
            });
        }

        function getActions() {
            if(actionsInitialized) {
                return actions;
            } else {
                return null;
            }

        }

        function getAction(id) {
            if(!actionsInitialized) {
                return null;
            }
            for (var i = 0; i < actions.length; i++) {
                if(actions[i].getRemoteId() == id) {
                    return actions[i];
                }
            }
        }

    }

})();

