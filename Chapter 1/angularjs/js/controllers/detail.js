(function () {
    data.controller('MainCtrl', ['$scope','$http', MainCtrl])

        function MainCtrl ($scope, $http) {
            $scope.message = '';

            $scope.element = function(ide){
                $http.get('http://localhost:3333/entry/'+ide).
                success(function(data, status, headers, config) {
                    $scope.alldata = data;
                }).
                error(function(data, status, headers, config) {
                    console.log('Error');
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
