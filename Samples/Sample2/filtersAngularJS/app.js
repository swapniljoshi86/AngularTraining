
var app = angular.module("firstApp",[]);

app.controller('normalSearchCtrl', ['$scope','myService',function($scope,myService) {
	   
	
	
	$scope.normalSearchData = [{"empID":"123","firstname":"ABC","lastname":"XYZ","address":"Mussorie"},
							   {"empID":"456","firstname":"XYZ","lastname":"MNO","address":"Shimla"}
							   
							  ];
	
	
	$scope.records = [{"empID":"123","firstname":"ABC","lastname":"XYZ","address":"Hinjewadi"},
					{"empID":"456","firstname":"XYZ","lastname":"MNO","address":"asdasda"},
					{"empID":"456","firstname":"XYZ","lastname":"MNO","address":"asdasda"},
					{"empID":"456","firstname":"XYZ","lastname":"123","address":"asdasda"},
					{"empID":"456","firstname":"XYZ","lastname":"GHK","address":"asdasda"},
					{"empID":"456","firstname":"XYZ","lastname":"MNO","address":"asdasda"}
	  ];
	  
	  
	  console.log("inside Ctrl"+myService.getData());
	  
}]);

//filter name customSearch
app.filter('customSearch',['myService',function(myService){
    
    return function(data,empID,lastname){
        var output = []; // returning store will be stored in this array
        
        //case1 if both searches are present
		
		
		myService.setData("dakjdakjdkajd");
		
		console.log("inside filter"+myService.getData());
		
		
        if(!!empID && !!lastname){
            empID = empID.toLowerCase(); 
            lastname = lastname.toLowerCase();
            //loop over the original array
            for(var i = 0;i<data.length; i++){
                // check if any result matching the search request
                if(data[i].empID.toLowerCase().indexOf(empID) !== -1 && data[i].lastname.toLowerCase().indexOf(lastname) !== -1){
                    //push data into results array
                    output.push(data[i]);
                }
            }
        } 
		//case2 if only empID search Query is present
		else if(!!empID){ 
        	empID = empID.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].empID.toLowerCase().indexOf(empID) !== -1){
                    output.push(data[i]);
                }
            }
        } 
		//case3 if only lastname search Query is present
		else if(!!lastname){ 
        	lastname = lastname.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].lastname.toLowerCase().indexOf(lastname) !== -1){
                    output.push(data[i]);
                }
            }
        } else {
            //case4 no query is present
            output = data;
        }
        return output; // finally return the output
    }
}]);

app.service("myService",function(){
	
	this.data = "";
	
	
	this.getData = function(){
		return this.data;
	}
	
	this.setData = function (data){
		this.data = data;
	}		
	
	
})

