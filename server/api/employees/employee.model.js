'use strict'; 

var mongoose = require('mongoose');

var db = require('../../db');

var Employee = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	firstLetter: {
		type: String,
		//required: true
	}
});

Employee.pre("save", function(next, done) {
	this.firstLetter = this.name.slice(0,1);
	next();
});

module.exports = db.model('Employee', Employee);