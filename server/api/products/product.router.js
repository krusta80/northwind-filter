'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var Product = require('./product.model');

router.get('/', function (req, res, next) {
	Product.distinct("firstLetter", function (err, firstLetters) {
	    if (err) {
	        next(err);
	    } else {
	        res.json(firstLetters);
	    }
	});
});

router.get('/:letter', function (req, res, next) {
	Product.find({firstLetter: req.params.letter})
	.then(function (products) {
		res.json(products);
	})
	.then(null, next);
});

module.exports = router;