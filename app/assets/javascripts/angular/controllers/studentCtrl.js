var studentApp = angular.module('studentApp');

studentApp.controller('studentctrl',['$http','$scope',function($http,$scope){
	//function to load students
	var studentLoad = function(){
		$scope.students = $http.get('students/');
	};
	studentLoad();
}]);