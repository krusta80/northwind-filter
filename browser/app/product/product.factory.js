'use strict';

app.factory('Product', function ($http,$rootScope) {
	function Product (props) {
		angular.extend(this, props);
	}

	Product.urlBase = "/api/products";

	Product.fetchByLetter = function (letter) {
		return $http.get(Product.urlBase+"/"+letter)
		.then(function (res) {
			return res.data;
		});
	};

	Product.fetchAll = function () {
		return $http.get(Product.urlBase)
		.then(function (res) {
			return res.data;
		});
	};

	return Product;
});