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

        vm.login = login;
        vm.logout = logout;

        ////////////////

        function login() {
            $state.go("app.login");
        }

        function logout() {
            AuthenticationService.logout();
            $state.go("app.login");
        }
    }
})();
