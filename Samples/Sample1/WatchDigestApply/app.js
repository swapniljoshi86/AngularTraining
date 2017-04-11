var app = angular.module('myApp', []);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['myApp']);
});



app.controller("myController", function($scope) {
 
        $scope.$watch('name', function(newValue, oldValue) {
			console.log("new Value"+newValue+ " old Value "+oldValue);
		});
		
		$scope.data = "Shubham";
	
		$scope.data1 = "uio";
		
        $scope.updateView = function() {
            $scope.data = "Lalit";
        }
		
		
        document.getElementById("updateVButton").addEventListener('click', function() {
            console.log("update button clicked");
            $scope.data = "Poonam";
			console.log("updated data inside Normal button," +$scope.data);
			
			//call $scope.$digest() to reflect data in view .
			//$scope.$digest();
			
			
			//Change Binding in apply function
			
			  // $scope.$apply(function() {
				  // console.log("update time clicked");
				  // $scope.data = "ABC";
			  // });
			
			
        });
    
		document.getElementById("updateVButton1").addEventListener('click', function() {
            console.log("update button clicked");
            $scope.data1 = "xyz";
			console.log("updated data inside Normal button," +$scope.data);
			
			//call $scope.$digest() to reflect data in view .
			$scope.$digest();
			
			
			//Change Binding in apply function
			
			  // $scope.$apply(function() {
				  // console.log("update time clicked");
				  // $scope.data = "ABC";
			  // });
			
			
        });
    
	
	});	

	
		
		