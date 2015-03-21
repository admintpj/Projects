var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function MyController($scope){

	$scope.author = {
		'name' : 'Terry Johnson',
		'title' : 'Software Developer',
		'company' : 'Saturdays In the Fall.com'
	}

}); 