'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('products', {
		url: '/products',
		templateUrl: '/browser/app/product/product.html',
		controller: 'ProductCtrl',
		resolve: {
			letters: function (Product) {
				return Product.fetchAll();
			},
			items: function() {
				return [];
			}
		}
	});
});

app.config(function ($stateProvider) {
	$stateProvider.state('product', {
		url: '/products/:letter',
		templateUrl: '/browser/app/product/product.html',
		controller: 'ProductCtrl',
		resolve: {
			letters: function (Product) {
				return Product.fetchAll();
			 },
			items: function (Product, $stateParams) {
			 	return Product.fetchByLetter($stateParams.letter);
			 }
		}
	});
});