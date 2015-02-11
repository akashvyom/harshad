var studentApp = angular.module('studentApp');

studentApp.controller('studentCtrl',['$scope','$http',function($scope,$http){
	//function to load students
	var studentLoad = function(){
		$http.get('students').success(function(data){
			$scope.students = data;
		});
	};
	studentLoad();
	
}]);