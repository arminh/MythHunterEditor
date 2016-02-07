/**
 * Created by armin on 07.02.16.
 */

app.factory("MainService", function(User) {

    var user = null;

    function createUser() {
        user = new User();
    }

    function getUser() {
        return user;
    }

    return {
        createUser: createUser,
        getUser: getUser
    }

});