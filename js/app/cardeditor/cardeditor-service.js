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


        var service = {
            createCard: createCard,
            loadActions: loadActions,
            upload: upload,
            downloadImage: downloadImage
        };
        return service;

        ////////////////

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
                return actions;
            });
        }

        function upload(imageBase64, name, description, attack, defence, action, stars) {
            var card = new Card();
            BackendService.uploadImage(name + "_" + Date.now(), imageBase64).then(success);

            function success(result) {
                console.log(result);
            }
        }

        function downloadImage(fileName) {
            return BackendService.downloadImage(fileName).then(function(result) {
                return result;
            })
        }


    }

})();

