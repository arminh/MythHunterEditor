/**
 * Created by armin on 18.02.16.
 */

app.factory("AuthenticationService", function($q, $cookies, $rootScope, User) {

    var user = null;

    function login(username, password) {
        var deffered = $q.defer();

        var passwordHash = CryptoJS.SHA256(password);

        backend.login(function(result) {
            var remoteUser = result.getReturn();
            user = new User();
            user.initFromRemote(remoteUser);
            $cookies.putObject("user", user);
            deffered.resolve(user);

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

    function initUser(userData) {
        user = new User();
        user.initFromCookie(userData);
    }

    function clearCredentials() {
        $rootScope.user = {};
        delete $cookies.remove("user");
    }

    return {
        login: login,
        register: register,
        getUser: getUser,
        initUser: initUser,
        clearCredentials: clearCredentials
    }
});