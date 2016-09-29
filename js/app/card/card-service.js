/**
 * Created by armin on 22.06.16.
 */

(function () {
    'use strict';

    angular
        .module('card')
        .factory('CardService', CardService);

    CardService.$inject = ["BackendService"];

    /* @ngInject */
    function CardService(BackendService) {
        var service = {
            upload: upload
        };
        return service;

        ////////////////

        function upload(imageBase64) {
            BackendService.uploadImage("test.jpg", imageBase64).then(success);

            function success(result) {
                console.log(result);
            }
        }
    }

})();

