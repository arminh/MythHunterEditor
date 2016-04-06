/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('profile')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = [];

    /* @ngInject */
    function ProfileService() {
        var service = {
            createNewQuest: createNewQuest
        };
        return service;

        ////////////////


    }

})();

