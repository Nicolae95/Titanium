(function () {
    data.controller('EditCtrl', ['$scope','$http','$stateParams', EditCtrl])
        function EditCtrl ($scope, $http, $stateParams) {
            console.log($stateParams);
            $scope.EntryId = $stateParams.EntryId;
            $http.get('http://localhost:3333/entry/' + $scope.EntryId).then(function (response) {
                $scope.newdata = response.data;
            });

        //Update data
            $scope.updatedata = function () {
                $http({
                    method: 'PUT',
                    url: 'http://localhost:3333/entry/',
                    data: JSON.stringify($scope.newdata),
                    headers: { 'Content-Type': 'application/JSON' }

                }).then(function successCallback(response) {
                    $scope.status ='The article is updated';
                    Getdata();
                }, function errorCallback(response) {
                    alert("Error");
                });
            }
        }
}())
