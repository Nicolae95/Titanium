(function () {
    data.controller('DetailCtrl', ['$scope','$http', DetailCtrl])

        function DetailCtrl ($scope, $http) {
            $scope.message = '';
                $http.get('http://localhost:3333/entry/' + id).
                success(function(data, status, headers, config) {
                    $scope.alldata = data;
                }).
                error(function(data, status, headers, config) {
                    console.log('Error');
                });
        }
}())
