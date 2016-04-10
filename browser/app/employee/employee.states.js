'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('employees', {
		url: '/employees',
		templateUrl: '/browser/app/employee/employee.html',
		controller: 'EmployeeCtrl',
		resolve: {
			letters: function (Employee) {
				return Employee.fetchAll();
			},
			items: function() {
				return [];
			}
		}
	});
});

app.config(function ($stateProvider) {
	$stateProvider.state('employee', {
		url: '/employees/:letter',
		templateUrl: '/browser/app/employee/employee.html',
		controller: 'EmployeeCtrl',
		resolve: {
			letters: function (Employee) {
				return Employee.fetchAll();
			 },
			items: function (Employee, $stateParams) {
			 	return Employee.fetchByLetter($stateParams.letter);
			 }
		}
	});
});