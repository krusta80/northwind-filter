'use strict';

var app = angular.module('filter', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');
});
