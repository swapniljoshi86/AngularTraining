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
