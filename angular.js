var app = angular.module('weatherApp', []);
app.controller('dateCtrl', function($scope){
	$scope.today = new Date();
});