  var myapp = angular.module('myapp', []);
  
    myapp.controller('ExampleController', ['$scope', function($scope) {
		
		 $scope.characters = 9;
		$scope.hash = 'profile';
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        $scope.list.push ({
          fname: $scope.detail.first,
		  lname: $scope.detail.last,
		  email: $scope.detail.email,
		  cell: $scope.detail.cell,
		  add1: $scope.detail.add1,
		  add2: $scope.detail.add2,
		  city: $scope.detail.city,
		  postalCode: $scope.detail.postalCode
        })
      };
    }]);
	

