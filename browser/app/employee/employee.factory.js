'use strict';

app.factory('Employee', function ($http,$rootScope) {
	function Employee (props) {
		angular.extend(this, props);
	}

	Employee.urlBase = "/api/Employees";

	Employee.fetchByLetter = function (letter) {
		return $http.get(Employee.urlBase+"/"+letter)
		.then(function (res) {
			return res.data;
		});
	};

	Employee.fetchAll = function () {
		return $http.get(Employee.urlBase)
		.then(function (res) {
			return res.data;
		});
	};

	return Employee;
});