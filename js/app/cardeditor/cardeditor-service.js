/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardEditorService', CardEditorService);

    CardEditorService.$inject = ["$q", "ActionService", "$mdDialog"];

    /* @ngInject */
    function CardEditorService($q, ActionService, $mdDialog) {

        var maxStars = 10;

        var service = {
            getActions: getActions,
            calculateStarCount: calculateStarCount,
            isActionAffordable: isActionAffordable,
            confirm: confirm,
            cancel: cancel
        };
        return service;

        ////////////////

        function getActions() {
            return $q.when(ActionService.getActions());
        }

        function calculateStarCount(attack, life, actions) {
            var stars =  attack * 0.5 + life * 0.5;
            if(actions.length > 0) {
                for(var i = 0; i < actions.length; i++) {
                    stars += actions[i].starCosts;
                }
            }
            return stars;
        }

        function isActionAffordable(newAction, card) {
            var starCount = card.getStars();
            var actions = card.getActions();
            if(actions.length > 0) {
                for(var i = 0; i < actions.length; i++) {
                    starCount -= actions[i].starCosts;
                }
            }

            return (starCount + newAction.starCosts) <= maxStars;
        }

        function confirm() {
            $mdDialog.hide();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

