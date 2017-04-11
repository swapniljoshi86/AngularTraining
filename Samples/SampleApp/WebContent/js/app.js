var app = angular.module('myApp', ['ngRoute','myControllers','myFilters','myDirectives']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'templates/login.html',
		controller:'loginCtrl'
	}).when('/sampleHttpCall',{
		templateUrl:'templates/sampleHttpCall.html',
		controller:'httpCallCtrl'
	}).when('/home',{
		templateUrl:'templates/home.html',
		controller:'homeCtrl'
	}).otherwise({redirectTo:'/'});
	
}]);

