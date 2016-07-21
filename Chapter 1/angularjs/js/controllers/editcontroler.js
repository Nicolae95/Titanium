(function () {
    data.controller('AddCtrl', ['$scope','$http', AddCtrl])

        function AddCtrl ($scope, $http) {
            $scope.formData = {};
            $scope.message = '';
            $scope.adddata = function(){
                var res = $http.post('http://localhost:3333/entry/', JSON.stringify($scope.formData));
                res.success(function(data, status, headers, config) {
                    $scope.message ='Succes';
                });
                res.error(function(data, status, headers, config) {
                    alert("failure message");
                });
                console.log($scope.formData);
            };
        }
}())
