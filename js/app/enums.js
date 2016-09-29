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
            INFO: "INFO",
            INVISIBLE: "INVISIBLE"
        })
        .constant("TreePartType", {
            Marker: "Marker",
            And: "And",
            Or: "Or"
        })
        .constant("DifficultyLevel", {
            LOW: "LOW",
            MEDIUM: "MEDIUM",
            HIGH: "HIGH"
        });
})();