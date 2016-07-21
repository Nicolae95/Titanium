var data = angular.module('data', ['ui.router'])

data.config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: "",
                templateUrl : '/temp/main.html',
                controller  : 'MainCtrl'
            })
            .state('edit', {
                url: "/edit",
                templateUrl : '/temp/edit.html',
                controller  : 'EditCtrl'
            })
            .state('add', {
                url: "/add",
                templateUrl : '/temp/add.html',
                controller  : 'AddCtrl'
            })
            .state('detail', {
                url: "/detail{detailId}",
                templateUrl : '/temp/add.html',
                controller  : 'AddCtrl'
            })
    });
