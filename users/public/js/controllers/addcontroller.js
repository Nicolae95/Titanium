(function () {
    data.controller('RegCtrl', ['$scope','$http', RegCtrl])

        function RegCtrl ($scope, $http) {
            $scope.formData = {};
            $scope.message = '';
            $scope.adddata = function(){
                var res = $http.post('http://localhost:3000/user/', JSON.stringify($scope.formData));
                res.success(function(data, status, headers, config) {
                    $scope.message ='User is added to database !!!';
                });
                res.error(function(data, status, headers, config) {
                    alert("failure message");
                });
                console.log($scope.formData);
            };
        }
}())
