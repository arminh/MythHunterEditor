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
            this.names = [];
            this.descriptions = [];
            this.starCosts = 0.0;
        }

        Action.prototype = {
            initFromRemote: initFromRemote,
            upload: upload
        };

        return (Action);

        ////////////////

        function initFromRemote(remoteAction) {
            this.remoteId = remoteAction.getId();
            this.names = remoteAction.getNames();
            this.descriptions = remoteAction.getDescriptions();
            this.starCosts = remoteAction.getStarCosts();
        }

        function upload() {
            
        }
    }

})();

