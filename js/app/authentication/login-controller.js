/**
 * Created by armin on 18.02.16.
 */

(function () {
    'use strict';

    angular
        .module('authentication')
        .controller('LoginController', LoginController);

    LoginController.$inject = ["$state", "AuthenticationService", "User"];

    /* @ngInject */
    function LoginController($state, AuthenticationService, User) {
        var vm = this;
        vm.username = "";
        vm.password = "";

        vm.login = login;
        vm.register = register;


        ////////////////

        function login() {
            var passwordHash = CryptoJS.SHA256(vm.password);
            AuthenticationService.login(vm.username, passwordHash).then(loginSuccess);

            function loginSuccess(result) {
                var user = new User();
                user.initFromRemote(result).then(function() {
                    AuthenticationService.setUser(user);
                    $state.go("app.profile");
                });
            }
        }

        function register() {
            $state.go("app.register");
        }
    }

})();