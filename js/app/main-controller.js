/**
 * Created by Armin on 18.04.2014.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ["$translate", "$state", "$transitions", "$mdSidenav", "AuthenticationService", "BackendService"];

    /* @ngInject */
    function MainController($translate, $state, $transitions, $mdSidenav, AuthenticationService, BackendService) {
        var vm = this;
        vm.language = "de";

        vm.login = login;
        vm.logout = logout;
        vm.changeLanguage = changeLanguage;
        vm.state = $state.current.url;
        vm.toggleSidenav = initToggle("sidenav");
        $transitions.onSuccess({}, locationChangeSuccess);

        ////////////////

        function login() {
            $state.go("app.login");
        }

        function logout() {
            AuthenticationService.logout();
            BackendService.abortCardRequests();
            $state.go("app.login");
        }

        function changeLanguage() {
            $translate.use(vm.language);
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
