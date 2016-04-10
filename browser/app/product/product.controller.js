'use strict';

app.controller('ProductCtrl', function ($scope, letters, items, Product, $state) {
	$scope.title = "Products";
	$scope.letters = letters;
	$scope.items = items;
	$scope.getItems = function(letter) {
		$state.go('product', {letter: letter});
	}
});