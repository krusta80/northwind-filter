'use strict';

app.controller('EmployeeCtrl', function ($scope, letters, items, Employee, $state) {
	$scope.title = "Employees";
	$scope.letters = letters;
	$scope.items = items;
	$scope.getItems = function(letter) {
		$state.go('employee', {letter: letter});
	}
});