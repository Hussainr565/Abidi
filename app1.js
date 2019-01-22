  var myapp = angular.module('myapp', []);
  
    myapp.controller('ExampleController', ['$scope', '$http' function($scope, $http) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        var data ({
          fname: $scope.detail.first,
		  lname: $scope.detail.last,
		  email: $scope.detail.email,
		  cell: $scope.detail.cell
        })
		
		 // Simple POST request example (passing data) :
            $http.post('/contact-form', data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
 
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Thanks for your message ' + data.contactName + ' You Rock!')
                            .position($scope.getToastPosition())
                            .hideDelay(5000)
                    );
 
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
 
      };
    }]);
	
	
	
	
	