(function () {
    data.controller('DetailCtrl', ['$scope','$http','$stateParams', DetailCtrl])
        function DetailCtrl ($scope, $http, $stateParams) {
            console.log($stateParams);
            $scope.id = $stateParams.id;
            $http.get('http://localhost:3000/user/' + $scope.id).then(function (response) {
                $scope.singledata = response.data;
            });
        }
}())
