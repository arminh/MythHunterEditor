/**
 * Created by armin on 06.04.16.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .constant("MarkerType", {
            FIGHT: "FIGHT",
            QUIZ: "QUIZ",
            INFO: "INFO"
        })
        .constant("TreePartType", {
            Marker: "Marker",
            And: "And",
            Or: "Or"
        });
})();