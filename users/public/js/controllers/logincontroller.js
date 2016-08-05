(function () {
    data.controller('LoginCtrl', ['$scope','$http', LoginCtrl])

        function LoginCtrl ($scope, $http) {
            $scope.loginData = {};
            $scope.message = '';
            $scope.login = function(){
                $http({
                    method: 'POST',
                    url: 'http://localhost:3000/login',
                    data: $scope.loginData,
                    headers: { 'Content-type': 'application/json' }
                }).then(function successCallback(response) {
                    $scope.message ='Succes';
                }, function errorCallback(response) {
                    alert("Error");
                });

                console.log($scope.LoginData);
            };
        }
}())
