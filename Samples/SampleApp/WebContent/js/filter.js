var myFilters= angular.module('myFilters', []);

myFilters.filter('trimName', function() {
	return function(input){
	var trimedfilename="";
	var filename=input;
	var index = filename.indexOf(".");
	   var first=filename.substring(0,index);
	   var second=filename.substring(index,filename.length);
	   if(first.length>10)
	   {
		   	trimedfilename=first.slice(0,10)+"..."+second;
	   }
	   else 
	   {
		   trimedfilename=first.concat(second);
	   }
	   
	   return trimedfilename;
	};
});


//filter name customSearch
myFilters.filter('customSearch',[function(){
    /** @data is the original data**/
    /** @skill is the search query for skill**/
    /** @status is the search query for status**/
    return function(data,empID,lastname){
        var output = []; // store result in this
        
        /**@case1 if both searches are present**/
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
        } else if(!!empID){ /**@case2 if only skill query is present**/
        	empID = empID.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].empID.toLowerCase().indexOf(empID) !== -1){
                    output.push(data[i]);
                }
            }
        } else if(!!lastname){ /**@case3 if only status query is present**/
        	lastname = lastname.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].lastname.toLowerCase().indexOf(lastname) !== -1){
                    output.push(data[i]);
                }
            }
        } else {
            /**@case4 no query is present**/
            output = data;
        }
        return output; // finally return the result
    }
}]);