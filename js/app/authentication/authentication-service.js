/**
 * Created by armin on 18.02.16.
 */

app.factory("AuthenticationService", function($q, $localStorage, $cookies, $rootScope, BackendService) {

    var user = null;
    var credentials = null;

    function login(username, password) {
        var deffered = $q.defer();

        BackendService.login(username, password).then(function(result) {
            console.log(result);
            $cookies.putObject("credentials", {
                username: result.getName(),
                password: result.getPassword()
            });
            deffered.resolve(result);
        });

        return deffered.promise;
    }

    function register(username, password) {

        var deffered = $q.defer();

        BackendService.register(username, CryptoJS.SHA256(password)).then(function(result) {
            deffered.resolve(result);
        });

        return deffered.promise;
    }

    function getUser() {
        return user;
    }

    function setUser(newUser) {
        user = newUser;
        $rootScope.user = newUser;
    }

    function setCredentials(newCredentials) {
        if(newCredentials) {
            credentials = newCredentials;
            $rootScope.credentials = newCredentials;
        }
    }

    function getCredentials() {
        return credentials;
    }

    function clear() {
        credentials = null;
        $rootScope.credentials = null;
        $cookies.remove("credentials");

        user = null;
        $rootScope.user = null;

        delete $localStorage.currentQuest;
    }


    return {
        login: login,
        logout: clear,
        register: register,
        getUser: getUser,
        setUser: setUser,
        setCredentials: setCredentials,
        getCredentials: getCredentials
    }
});