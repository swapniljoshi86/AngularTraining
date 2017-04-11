var app = angular.module('firstApp', []);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['firstApp']);
});


app.controller('bindingConcept', ['$scope',function($scope) {
	 console.log("homePage");
	 
	 $scope.varName = "One way binded variable";
	 
	 $scope.init = function() {
		    $scope.a = 'FunnyInitialisation';
	 };
	
}]);



			
		