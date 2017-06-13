/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardEditorService', CardEditorService);

    CardEditorService.$inject = ["$q", "ActionService", "$mdDialog", "MAX_STARS"];

    /* @ngInject */
    function CardEditorService($q, ActionService, $mdDialog, MAX_STARS) {

        var service = {
            getMonsterActions: getMonsterActions,
            calculateStarCount: calculateStarCount,
            isActionAffordable: isActionAffordable,
            getMinStarCost: getMinStarCost,
            confirm: confirm,
            cancel: cancel
        };
        return service;

        ////////////////

        function getMonsterActions() {
            return $q.when(ActionService.getMonsterActions());
        }

        function calculateStarCount(attack, life, actions) {
            var stars = Math.ceil(attack * 0.5 + life * 0.5);
            if(actions.length > 0) {
                stars += calculateActionsStarCount(actions);
            }
            return stars;
        }

        function isActionAffordable(newAction, card) {
            return (card.getStars() + newAction.getStarCosts()) <= MAX_STARS;
        }

        function calculateActionsStarCount(actions) {
            var starCount = 0;
            for(var i = 0; i < actions.length; i++) {
                if(actions[i]) {
                    starCount += actions[i].getStarCosts();
                }
            }
            return starCount;
        }

        function getMinStarCost() {
            return ActionService.getMinStarCost();
        }

        function confirm(card) {
            var actions = card.getActions();
            for(var i = 0; i < actions.length; i++) {
                if(!actions[i]){
                    actions.splice(i, 1);
                }
            }
            card.setCreatedByUser(true);
            $mdDialog.hide();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

