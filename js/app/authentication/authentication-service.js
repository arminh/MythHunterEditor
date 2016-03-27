/**
 * Created by armin on 18.02.16.
 */

(function () {
    'use strict';

    angular
        .module('authentication')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ["$log", "$q", "$localStorage", "$cookies", "$rootScope", "BackendService"];

    /* @ngInject */
    function AuthenticationService($log, $q, $localStorage, $cookies, $rootScope, BackendService) {

        var user = null;
        var credentials = null;
        var userPromise = $q.defer();

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

            $log.log('Logging in user "' + username + '" width password "' + password + '"');
            return BackendService.login(username, password).then(loginSuccess, loginFail);

            function loginSuccess(result) {
                credentials = {
                    username: result.getName(),
                    password: result.getPassword()
                };

                $cookies.putObject("credentials", credentials);

                $log.log('Login success: "' + username + '"');
                return result;
            }

            function loginFail(error) {
                alert("Wrong username or password");
                $log.error("Login of user " + username + " failed due to: " + error);
                clear();
                return $q.reject(error);
            }
        }

        function register(username, password) {

            $log.log('Registering user "' + username + '" width password "' + password + '"');
            return BackendService.register(username, password).then(registerSuccess, registerFail);

            function registerSuccess(result) {
                $log.log('Register success: "' + username + '"');
            }

            function registerFail(error) {
                alert("Register failed!");
                $log.error('Register of user "' + username + '" failed due to: ' + error);
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
            $log.log("Credentials cleared");
        }

        function clearUser() {
            if (user) {
                user.clearCurrentQuest();
                user = null;
                $rootScope.user = null;
            }

            userPromise = $q.defer();
            $log.log("User cleared");
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