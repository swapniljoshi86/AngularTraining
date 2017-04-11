var app = angular.module('myApp', []);

angular.element(document).ready(function() {
				angular.bootstrap(document, ['myApp']);
	});
			
app.controller('firstCtrl',['$scope',function($scope){
		$scope.checkBoxFlag = true;
		
		
		
		
		$scope.clickMe =function(){
			$scope.clickme = true;
		};
				
	}]);
