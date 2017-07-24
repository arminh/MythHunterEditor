/**
 * Created by armin on 18.02.16.
 */

(function () {
    'use strict';

    angular
        .module('authentication')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ["$log", "$translate", "$q", "$cookies", "$rootScope", "BackendService"];

    /* @ngInject */
    function AuthenticationService($log, $translate, $q, $cookies, $rootScope, BackendService) {

        var user = null;
        var credentials = null;
        var userPromise = $q.defer();
        $log = $log.getInstance("Authentication", debugging);

        var service = {
            login: login,
            register: register,
            logout: clear,
            getUser: getUser,
            setUser: setUser,
            userPromise: getUserPromise,
            setCredentials: setCredentials,
            getCredentials: getCredentials
        };
        return service;

        ////////////////

        function login(username, password) {

            $log.info('login "' + username + '"');
            return BackendService.login(username, password).then(loginSuccess, loginFail);

            function loginSuccess(result) {
                credentials = {
                    username: result.getName(),
                    password: result.getPassword()
                };

                $cookies.putObject("credentials", credentials);

                $log.info('login_success: "' + username + '"');
                return result;
            }

            function loginFail(error) {
                alert($translate.instant("WRONG_CREDENTIALS"));
                $log.info('login_fail: "' + username + '" (' + error + ')');
                clear();
                return $q.reject(error);
            }
        }

        function register(username, password) {

            $log.info('register: "' + username + '"');
            return BackendService.register(username, password).then(registerSuccess, registerFail);

            function registerSuccess(result) {
                $log.info('register_success: "' + username + '"');
            }

            function registerFail(error) {
                alert($translate.instant("REGISTER_FAIL"));
                $log.info('register_fail: "' + username + '" (' + error + ')');
                return $q.reject(error);
            }
        }

        function clear() {
            if (credentials) {
                clearCredentials();
            }
            if(user) {
                clearUser();
            }
        }

        function clearCredentials() {
            credentials = null;
            $cookies.remove("credentials");
            $log.info("clearCredentials: Credentials cleared");
        }

        function clearUser() {
            if (user) {
                user.clearCurrentQuest();
                user = null;
                $rootScope.user = null;
            }

            userPromise = $q.defer();
            $log.info("clearUser: User cleared");
        }

        function getUser() {
            return user;
        }

        function setUser(newUser) {
            user = newUser;
            $rootScope.user = newUser;
            userPromise.resolve(user);
        }

        function setCredentials(newCredentials) {
            if (newCredentials) {
                credentials = newCredentials;
                $rootScope.credentials = newCredentials;
            }
        }

        function getCredentials() {
            return credentials;
        }

        function getUserPromise() {
            return userPromise.promise;
        }
    }

})();