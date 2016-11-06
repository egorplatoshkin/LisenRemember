'use strict';
App.controller('UserController', ['$state', '$scope', 'UserService', function ($state, $scope, UserService) {
    var self = this;
    self.user = {
        _id: '',
        email: '',
        password: ''
    };
    self.logIn = function () {
        UserService.logIn(self.user)
            .then(function (data) {
                if (data.status === 'success') {
                    $state.go('home');
                    console.log('OK');
                }
            }, function (errResponse) {
                console.error('LOG IN ERROR');
            });
    };
    self.signUp = function (user) {
        UserService.SignUp(self.user)
            .then(function (data) {
                if (data.status === 'success') {
                    $state.go('home');
                    console.log('OK');
                }
            }, function (errResponse) {
                console.error('LOG IN ERROR');
            });
    };
    self.google = function () {
        UserService.google()
            .then(function (data) {
                if (data.status === 'success') {
                    $state.go('home');
                    console.log('OK');
                }
            }, function (errResponse) {
                console.error('LOG IN ERROR');
            });
    };
}])