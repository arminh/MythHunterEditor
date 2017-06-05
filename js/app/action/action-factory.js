/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('action')
        .factory('Action', ActionFactory);

    ActionFactory.$inject = ["$log"];

    /* @ngInject */
    function ActionFactory($log) {
        $log = $log.getInstance("Action", debugging);

        function Action() {
            this.remoteId = 0;
            this.forCardType = null;
            this.names = [];
            this.descriptions = [];
            this.starCosts = 0.0;
        }

        Action.prototype = {
            initFromRemote: initFromRemote,

            addName: addName,
            addDescription: addDescription,
            getRemoteId: getRemoteId,
            getForCardType: getForCardType,
            getStarCosts: getStarCosts
        };

        return (Action);

        ////////////////

        function initFromRemote(remoteAction) {
            this.remoteId = remoteAction.getId();
            this.names = remoteAction.getNames();
            this.descriptions = remoteAction.getDescriptions();
            this.starCosts = remoteAction.getStarCosts();
            this.forCardType = remoteAction.getForCardType();
        }

        function addName(langKey, value) {
            this.names.push({
                _key: langKey,
                _value: value
            })
        }

        function addDescription(langKey, value) {
            this.descriptions.push({
                _key: langKey,
                _value: value
            });
        }

        function getRemoteId() {
            return this.remoteId;
        }

        function getForCardType() {
            return this.forCardType;
        }

        function getStarCosts() {
            return this.starCosts;
        }
    }

})();

