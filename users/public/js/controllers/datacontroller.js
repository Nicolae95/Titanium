(function () {
    data.controller('MainCtrl', ['$scope','$http', MainCtrl])
        function MainCtrl ($scope, $http) {
            // //Displaying the Save button
            // $scope.DisplaySave = true;
            // //Hiding the Update button
            // $scope.DisplayUpdate = false;

            function Getdata() {
                $http.get('http://localhost:3000/')
                .success(function(data, status, headers, config) {
                    $scope.alldata = data;
                })
                .error(function(data, status, headers, config) {
                    console.log('Error');
                });
            }

            Getdata();



            $scope.message = '';


            $scope.deletedata = function(ide){
                var del = {
                    "id": ide
                };
                $http({
                    method: 'DELETE',
                    url: 'http://localhost:3000/user/',
                    data: { "id": ide },
                    headers: { 'Content-type': 'application/json' }

                }).then(function successCallback(response) {
                    $scope.message ='Succes';
                    Getdata();
                }, function errorCallback(response) {
                    alert("Error");
                });

            };

        }
}())
