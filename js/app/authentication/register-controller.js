/**
 * Created by armin on 18.02.16.
 */

(function () {
    'use strict';

    angular
        .module('authentication')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ["$state", "AuthenticationService"];

    /* @ngInject */
    function RegisterController($state,  AuthenticationService) {
        var vm = this;

        vm.forename = "";
        vm.surename = "";
        vm.username = "";
        vm.password = "";

        vm.register = register;

        ////////////////

        function register() {
            var passwordHash = CryptoJS.SHA256(vm.password);
            AuthenticationService.register(vm.username, passwordHash).then(registerSuccess);

            function registerSuccess() {
                $state.go("app.login");
            }
        }
    }

})();