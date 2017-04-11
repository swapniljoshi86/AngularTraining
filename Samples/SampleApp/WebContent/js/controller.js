var myControllers=angular.module("myControllers",[]);

myControllers.controller('loginCtrl', ['$scope',function($scope) {
	   
	$scope.username = "shubham";
	$scope.password = "abc1234";
	
}]);

myControllers.controller('homeCtrl', ['$scope','$location',function($scope,$location) {	
	
	$scope.welcomeMessage = "Welcome to HomePage";
	
	$scope.records = [{"empID":"123","firstname":"ABC","lastname":"XYZ","address":"Hinjewadi"},
						{"empID":"456","firstname":"XYZ","lastname":"MNO","address":"asdasda"},
						{"empID":"345","firstname":"XYZ","lastname":"MNO","address":"asdasda"},
						{"empID":"098","firstname":"XYZ","lastname":"MNO","address":"asdasda"},
						{"empID":"768","firstname":"XYZ","lastname":"MNO","address":"asdasda"},
						{"empID":"987","firstname":"XYZ","lastname":"MNO","address":"asdasda"}
		  ];
	
	$scope.disableAddEmployee=false;
	$scope.inUpdateMode = false;	
	
	//delete operation
	$scope.deleteRecords = function(empid){				
		$scope.records.forEach(function(d,i){
			console.log(i);
			if(d.empID == empid){
				$scope.records.splice( i, 1);
			}
		});
				
	};
	
	//add operation
	$scope.addRecords = function(newUser){	
		$scope.inUpdateMode = false;
		$scope.records.push(newUser);
		$scope.newUser={};
	};
	//edit functionality
	$scope.editRecords = function(empId){
		$scope.disableAddEmployee=true;
		$scope.inUpdateMode = true;	
		
		$scope.newUser={};
		
		$scope.records.forEach(function(d,i){
			if(d.empID == empId){
				$scope.newUser.empID =d.empID;
				$scope.newUser.firstname=d.firstname;
				$scope.newUser.lastname=d.lastname;
				$scope.newUser.address=d.address;
			}
		});
	};
	
	//update functionality
	$scope.updateRecords = function(updateUser){
		
		 $scope.records.forEach(function(d,i){
			if(d.empID == updateUser.empID){
				d.firstname = updateUser.firstname;
				d.lastname = updateUser.lastname;
				d.address = updateUser.address;
				$scope.newUser={};
			};	
		});	
	};
}]);

myControllers.controller('httpCallCtrl', ['$scope','$http',function($scope,$http) {
	
	//calling http as configuration object
	/*$http({method:"GET",url:"sampleJson.json"}).then(function(response){
		
		$scope.EmpRecords = response.data.employeeRecords;
		
	});*/
	
	//short way to call
	$http.get("sampleJson.json").then(function(response){
		
		$scope.EmpRecords = response.data.employeeRecords;
		
	});
}]);