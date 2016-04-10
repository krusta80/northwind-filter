'use strict';

var router = require('express').Router();

router.use('/employees', require('./employees/employee.router'));

router.use('/products', require('./products/product.router'));

module.exports = router;