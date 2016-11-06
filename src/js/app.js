'use strict';

var App = angular.module('listenRemember', ['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider','$animate', function ($stateProvider, $urlRouterProvider, $animate) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('authorization', {
            url: "/",
            views:{
                'navigation':{
                    templateUrl:'/view/navigation.html'
                },
                'main':{
                    templateUrl:'/view/authorization.html',
                    controller: "UserController as UserCtrl"
                }
            }
        })
        .state('home', {
            url: "/home",
            views:{
                'navigation':{
                    templateUrl:'/view/navigation.html'
                }
            },
            controller: "UserController as ctrl",
            onExit:$animate.addClass(element, 'col-md-6')
        })
        .state('admin', {
            url: "/admin",
            templateUrl: 'admin',
            controller: "UserController as ctrl"
        })
        .state('analytic', {
            url: "/analytic",
            templateUrl: 'analytic',
            controller: "UserController as ctrl"
        });
}]);