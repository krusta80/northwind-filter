'use strict'; 

var mongoose = require('mongoose');

var db = require('../../db');

var Product = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	firstLetter: {
		type: String,
		//required: true
	}
});

Product.pre("save", function(next, done) {
	this.firstLetter = this.name.slice(0,1);
	next();
});

module.exports = db.model('Product', Product);