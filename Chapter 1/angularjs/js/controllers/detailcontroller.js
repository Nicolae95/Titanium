(function () {
    data.controller('DetailCtrl', ['$scope','$http','$stateParams', DetailCtrl])
        function DetailCtrl ($scope, $http, $stateParams) {
            console.log($stateParams);
            $scope.EntryId = $stateParams.EntryId;
            $http.get('http://localhost:3333/entry/' + $scope.EntryId).then(function (response) {
                $scope.singledata = response.data;
            });
        }
}())
