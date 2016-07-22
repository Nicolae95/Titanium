(function () {
    data.controller('MainCtrl', ['$scope','$http', MainCtrl])
        function MainCtrl ($scope, $http) {
            //Displaying the Save button
            $scope.DisplaySave = true;
            //Hiding the Update button
            $scope.DisplayUpdate = false;

            function Getdata() {
                $http.get('http://localhost:3333/entry/')
                .success(function(data, status, headers, config) {
                    $scope.alldata = data;
                })
                .error(function(data, status, headers, config) {
                    console.log('Error');
                });
            }

            Getdata();



            $scope.message = '';

            //Edit data
           $scope.editdata = function (pId) {
               for (i in $scope.alldata) {
                   if ($scope.alldata[i].EntryId == pId) {
                       console.log($scope.alldata[i]);
                       $scope.newdata = {
                           "Author": $scope.alldata[i].Author,
                           "Title": $scope.alldata[i].Title,
                           "Text": $scope.alldata[i].Text,
                           "EntryId": $scope.alldata[i].EntryId,
                       };
                       console.log($scope.newdata);
                       //Displaying Update button
                       $scope.DisplayUpdate = true;
                       //Clearing the Status
                       $scope.status = '';
                   }
               }
           }

           //Update data
           $scope.updatedata = function () {
               $http({
                   method: 'PUT',
                   url: 'http://localhost:3333/entry/',
                   data: JSON.stringify($scope.newdata),
                   headers: { 'Content-Type': 'application/JSON' }

               }).then(function successCallback(response) {
                   $scope.status ='The article is updated';
                   $scope.DisplayUpdate = false;
                   Getdata();
               }, function errorCallback(response) {
                   alert("Error");
               });
           }


            $scope.deletedata = function(ide){
                var del = {
                    "EntryId": ide
                };
                $http({
                    method: 'DELETE',
                    url: 'http://localhost:3333/entry/',
                    data: { "EntryId": ide },
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
