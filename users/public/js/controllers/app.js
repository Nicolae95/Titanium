var data = angular.module('data', ['ui.router','angularUtils.directives.dirPagination'])

data.config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: "",
                templateUrl : '/temp/main.html',
                controller  : 'MainCtrl'
            })
            .state('registration', {
                url: "/registration",
                templateUrl : '/temp/registration.html',
                controller  : 'RegCtrl'
            })
            .state('login', {
                url: "/login",
                templateUrl : '/temp/login.html',
                controller  : 'LoginCtrl'
            })
            // .state('detail', {
            //     url: "/detail/:EntryId",
            //     templateUrl : '/temp/detail.html',
            //     controller  : 'DetailCtrl'
            // })
            // .state('edit', {
            //     url: "/edit/:EntryId",
            //     templateUrl : '/temp/edit.html',
            //     controller  : 'EditCtrl'
            // })
    });
