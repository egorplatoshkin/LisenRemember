'use strict';
App.factory('UserService', ['$http', '$q', function ($http, $q) {
    var REST_API_URI = 'http://localhost/api/word';
    var /*factory = this;*/

        factory = {
            save: save,
            deleteWord: deleteWord,
            getUserList: getUserList
        };

    return factory;
    //Authorization
    function save(word) {
        return $http.post(REST_API_URI , word)
            .then(function (response) {
                return response.data;
            }, function (errResponse) {
                console.error('SAVE ERROR');
                $q.reject(errResponse);
            });
    }

    function deleteWord(id) {
        return $http.post(REST_API_URI , {id:id})
            .then(function (response) {
                return response.data;
            }, function (errResponse) {
                console.error('SIGN UP ERROR');
                $q.reject(errResponse);
            });
    }

    function getUserList() {
        return $http.get(REST_API_URI)
            .then(function (response) {
                return response.data;
            }, function (errResponse) {
                console.error('GOOGLE AUTH ERROR');
                $q.reject(errResponse);
            });
    }

}]);