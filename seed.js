'use strict';

var chance = require('chance')(123),
	Promise = require('bluebird');

var db = require('./server/db');
var Employee = require('./server/api/employees/employee.model');
var Product = require('./server/api/products/product.model');

var numEmployees = 1000;
var numProducts = 2000;

var employees = chance.unique(chance.string, numEmployees);

function randEmployee () {
	return new Employee({
		name: [chance.first(), chance.last()].join(' ')
	});
}

function randProduct () {
	return new Product({
		name: randProductName()
	});
}

function randProductName () {
	var numWords = chance.natural({
		min: 1,
		max: 3
	});
	return chance.sentence({words: numWords})
	.replace(/\b\w/g, function (m) {
		return m.toUpperCase();
	})
	.slice(0, -1);
};

function generateEmployees () {
	var employees = [];
	for(var i = 0; i < numEmployees; i++) {
		employees.push(randEmployee());
	} 
	return Promise.map(employees, function (employee) {
		return employee.save();
	});
}

function generateProducts () {
	var products = [];
	for(var i = 0; i < numProducts; i++) {
		products.push(randProduct());
	} 
	return Promise.map(products, function (product) {
		return product.save();
	});
}

db.drop = Promise.promisify(db.db.dropDatabase.bind(db.db));

db.on('open', function () {
	db.drop()
	.then(function () {
		console.log("generating employees");
		return generateEmployees();
	})
	.then(function () {
		console.log("generating products");
		return generateProducts();
	})
	.then(function () {
		console.log('Seeding successful');
	}, function (err) {
		console.error('Error while seeding');
		console.error(err.stack);
	})
	.then(function () {
		process.exit();
	})
	.catch(function(error) {
		console.log(error);
	});
});