var studentApp = angular.module('studentApp',['ngRoute','ngResource']);

studentApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'templates/student',
		controller: 'studentCtrl'
	})
	.otherwise('/',{
		root: 'templates/start'
	});
}]);