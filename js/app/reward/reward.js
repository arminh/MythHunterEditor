/**
 * Created by Hannah on 14.05.2017.
 */

(function() {
    'use strict'

    angular
        .module("reward", [])
        .config(config)
        .constant("REWARD_MAX_CARDS", 2);

    config.$inject = ["$provide"];

    function config($provide) {
    }
})();
