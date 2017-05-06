/**
 * Created by Armin on 18.04.2014.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ["$rootScope", "$state", "$mdSidenav", "AuthenticationService"];

    /* @ngInject */
    function MainController($rootScope, $state, $mdSidenav, AuthenticationService) {
        var vm = this;

        vm.login = login;
        vm.logout = logout;
        vm.state = $state.current.url;
        vm.toggleSidenav = initToggle("sidenav");
        $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);

        ////////////////

        function login() {
            $state.go("app.login");
        }

        function logout() {
            AuthenticationService.logout();
            $state.go("app.login");
        }

        function initToggle(id) {
            return function() {
                $mdSidenav(id).toggle();
            }
        }

        function locationChangeSuccess() {
            console.log($state.current);
            vm.state = $state.current.url;
        }
    }
})();
