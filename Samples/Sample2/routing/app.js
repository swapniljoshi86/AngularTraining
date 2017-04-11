var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/login',{
		templateUrl:'login.html',
		//controller:'TablePageCtrl'
	}).when('/home',{
		templateUrl:'home.html',
		//controller:'EditUserCtrl'
	}).otherwise({
			redirectTo: 'default.html'
	});
	
}]);