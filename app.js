var goto; //<-- make goto global!

var app = angular.module('sampleApp',[]);

angular.element(document).ready(function(){
	angular.bootstrap(document,['sampleApp']);
});

app.controller('sampleController',['$scope',function($scope){
	$scope.testVariable = 'Swapnil Joshi';
	$scope.price = 'someTExt';
	$scope.fileName = 'someFile.txt';
	$scope.currentDate = new Date();

	$scope.kids = [
						{"name": "Ashmi","mother": "Shilpa" },
						{"name": "Malhar","mother": "Mohini" },
						{"name": "Pranav","mother": "Kalpana" },
						{"name": "Ketaki","mother": "Payal" }
						];

	$scope.person = {"name" : "Shilpa Joshi"};

	$scope.showFlag = false;

	 $scope.clickMe = function()
	 {
		 $scope.clicked = true;
	 }

	 $scope.init = function()
	 {
		$scope.testVariable = "Pranav Joshi";
	 }

	goto = function() {  //<- assign the function created within the controller
		//$scope.testVariable = "Pranav Joshi";
		//$scope.$digest();
		$scope.$apply(function(){
			$scope.testVariable = "Ashmi Joshi";
		});
	}

	 $scope.$watch("testVariable",function(newVar,old){
		console.log("Old Value: "+ old,"New Value: " + newVar);
	 });
}]);

app.controller('filterController',['$scope','$filter',function($scope,$filter){
	$scope.kids = [
						{"name": "Ashmi","mother": "Shilpa" },
						{"name": "Malhar","mother": "Mohini" },
						{"name": "Pranav","mother": "Kalpana" },
						{"name": "Ketaki","mother": "Payal" }
						];

	$scope.fileName = $filter('trimName')('loon.txt');
	//$scope.searchText = "mo";
	//$scope.kids = $filter('customSearch')($scope.kids,$scope.searchText);
}]);

app.filter("trimName",function()
{
	return function(input)
	{
		console.log("file filter called");
		var fileName = input;
		var dotIndex = fileName.indexOf('.');
		var firstPart = fileName.substring(0,dotIndex);
		var secondPart = fileName.substring(dotIndex,fileName.length);

		if(firstPart.length > 5)
		{
			return firstPart.slice(0,10) + '....' + secondPart;
		}

		return fileName;
	}
});

app.filter("customSearch",function()
{
	return function(data,searchText)
	{
		console.log("custom search filter called");
		var output = [];
		if(!searchText)
		{
			return data;
		}
		for(i=0;i<data.length;i++)
		{
			if(data[i].mother.toLowerCase().indexOf(searchText) !== -1)
			{
				output.push(data[i]);
			}
		}
		return output;
	}
});
