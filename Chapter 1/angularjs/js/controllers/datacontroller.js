(function () {
    data.controller('MainCtrl', ['$scope','$http', MainCtrl])

        function MainCtrl ($scope, $http) {
            $http.get('http://localhost:3333/entry/').
            success(function(data, status, headers, config) {
                $scope.alldata = data;
            }).
            error(function(data, status, headers, config) {
                console.log('Error');
            });
            $scope.message = '';

            $scope.deletedata = function(ide){
                console.log(ide);
                var del = {
                    "EntryId": ide
                };
                $http({
                    method: 'DELETE',
                    url: 'http://localhost:3333/entry/',
                    data: {
                        "EntryId": ide
                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function successCallback(response) {
                    $scope.message ='Succes';
                }, function errorCallback(response) {
                    alert("Error");
                });

                // console.log(JSON.stringify(del));
                // var res = $http.delete('http://localhost:3333/entry/', JSON.stringify(del));
                // res.success(function(data, status, headers, config) {
                //     $scope.message ='Succes';
                // });
                // res.error(function(data, status, headers, config) {
                //     alert("Error");
                // });
            };

        }
}())
