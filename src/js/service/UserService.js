'use strict';
App.factory('UserService', ['$http', '$q', function ($http, $q) {
    var REST_API_URI = 'http://localhost/api/';
    var factory = {
        logIn: logIn,
        SignUp: signUp,
        google: google
    };

    return factory;
    //Authorization
    function logIn(user) {
        return $http.post(REST_API_URI + 'login', user)
            .then(function (response) {
                return response.data;
            }, function (errResponse) {
                console.error('LOG IN ERROR');
                $q.reject(errResponse);
            });
    }

    function signUp(user) {
        return $http.post(REST_API_URI + 'signup', user)
            .then(function (response) {
                return response.data;
            }, function (errResponse) {
                console.error('SIGN UP ERROR');
                $q.reject(errResponse);
            });
    }

    function google() {
        return $http.get(REST_API_URI + 'auth/google')
            .then(function (response) {
                return response.data;
            }, function (errResponse) {
                console.error('GOOGLE AUTH ERROR');
                $q.reject(errResponse);
            });
    }

    function getMe() {
        //todo get current user
    }

    function delteMe(id) {
        //todo delete current user
    }
}])