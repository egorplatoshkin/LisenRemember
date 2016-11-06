'use strict';
App.controller('UserController', ['$state', '$scope', 'WordService', function ($state, $scope, WordService) {
    var self = this;
    self.word = {
        _id:'',
        orthography: '',
        additional: [],
        language: '',
        playbackAmount: null,
        flagToPlay: null,
        soundPath: '',
        type: '',
        lastUpdated: null
    };
    self.words = [];
    self.getUserList = function () {
        WordService.getUserList()
            .then(function (data) {
                self.words = data;
            }, function (errResponse) {
                console.error('GET LIST ERROR');
            });
    };
    self.save = function () {
        WordService.save(self.word)
            .then(function (data) {
                if (data.status === 'success') {
                    $state.go('home');
                    console.log('OK');
                }
            }, function (errResponse) {
                console.error('SAVE ERROR');
            });
    };
    self.deleteWord = function () {
        WordService.deleteWord()
            .then(function (data) {
                if (data.status === 'success') {
                    $state.go('home');
                    console.log('OK');
                }
            }, function (errResponse) {
                console.error('DELETE ERROR');
            });
    };
}]);