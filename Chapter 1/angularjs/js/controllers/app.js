var data = angular.module('data', ['ui.router'])

data.config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: "",
                templateUrl : '/temp/main.html',
                controller  : 'MainCtrl'
            })
            .state('add', {
                url: "/add",
                templateUrl : '/temp/add.html',
                controller  : 'AddCtrl'
            })
            .state('detail', {
                url: "/detail/:EntryId",
                templateUrl : '/temp/detail.html',
                controller  : 'DetailCtrl'
            })
    });
