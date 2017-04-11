var app = angular.module('myApp', []);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['myApp']);
});


app.controller("checkCtrl",['$scope',function($scope){
	
	$scope.checked =true;
	
	$scope.data = "Shubham";
	
}])


			
		