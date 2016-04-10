'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var Employee = require('./employee.model');

router.get('/', function (req, res, next) {
	Employee.distinct("firstLetter", function (err, firstLetters) {
	    if (err) {
	        next(err);
	    } else {
	        res.json(firstLetters);
	    }
	});
});

router.get('/:letter', function (req, res, next) {
	Employee.find({firstLetter: req.params.letter})
	.then(function (employees) {
		res.json(employees);
	})
	.then(null, next);
});

module.exports = router;