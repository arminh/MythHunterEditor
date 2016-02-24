/**
 * Created by armin on 18.02.16.
 */

app.factory("AuthenticationService", function($q, $localStorage, $cookies, $rootScope) {

    var user = null;
    var credentials = null;

    function login(username, password) {
        var deffered = $q.defer();

        var passwordHash = CryptoJS.SHA256(password);

        backend.login(function(result) {
            $cookies.putObject("credentials", {
                username: username,
                password: password
            });
            deffered.resolve(result.getReturn());
        }, function(error) {
            console.log("error");
        }, username, passwordHash);

        return deffered.promise;
    }

    function register(username, password) {

        var user = new User();
        user.name = username;
        user.password = CryptoJS.SHA256(password);

        var remoteUser = user.createRemoteUser();

        var deffered = $q.defer();

        backend.addUser(function(result) {
            deffered.resolve(result);
        }, function(error) {
            deffered.reject(error);
        }, remoteUser);

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