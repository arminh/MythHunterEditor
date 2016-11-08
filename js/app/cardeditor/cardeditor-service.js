/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardEditorService', CardEditorService);

    CardEditorService.$inject = ["BackendService", "Card", "CardType", "Action", "$q"];

    /* @ngInject */
    function CardEditorService(BackendService, Card, CardType, Action, $q) {

        var maxStars = 10;
        var modalInstance = null;

        var service = {
            setModalInstance: setModalInstance,
            createCard: createCard,
            loadActions: loadActions,
            calculateStarCount: calculateStarCount,
            isActionAffordable: isActionAffordable,
            confirmCard: confirmCard,
            cancelCard: cancelCard
        };
        return service;

        ////////////////

        function setModalInstance($modalInstance) {
            modalInstance = $modalInstance;
        }

        function createCard() {
            return new Card();
        }

        function loadActions() {

            return BackendService.getAllActionsOfCardType(CardType.MONSTER).then(function(results) {
                var actions = [];
                for(var i = 0; i < results.length; i++) {
                    var action = new Action();
                    action.initFromRemote(results[i]);
                    actions.push(action);
                }
                actions.push(createNoAction());

                return actions;
            });
        }

        function createNoAction() {
            var noAction = new Action();

            noAction.addName('de', "Keine");
            noAction.addName('en', "None");

            noAction.addDescription('de', "");
            noAction.addDescription('en', "");

            return noAction;
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

        function isActionAffordable(newAction, stars, actions) {
            var starCount = stars;
            if(actions.length > 0) {
                for(var i = 0; i < actions.length; i++) {
                    starCount -= actions[i].starCosts;
                }
            }

            return (starCount + newAction.starCosts) <= maxStars;
        }

        function confirmCard() {
            modalInstance.close();
        }

        function cancelCard() {
            modalInstance.dismiss('cancel');
        }
    }

})();

