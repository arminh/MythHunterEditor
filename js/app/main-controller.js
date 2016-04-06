/**
 * Created by Armin on 18.04.2014.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ["$state", "AuthenticationService"];

    /* @ngInject */
    function MainController($state, AuthenticationService) {
        var vm = this;

        vm.logout = login;
        vm.logout = logout;

        ////////////////

        function login() {
            AuthenticationService.logout();
            $state.go("app.login");
        }

        function logout() {
            $state.go("app.login");
        }
    }
})();
