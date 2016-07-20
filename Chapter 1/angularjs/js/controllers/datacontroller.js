var data = angular.module('data', []);

data.controller('DataController', function ($scope,$http){
    $http.get('http://localhost:3333/entry/').
    success(function(data, status, headers, config) {
        $scope.alldata = data;
    }).
    error(function(data, status, headers, config) {
        console.log('Error');
    });
});
