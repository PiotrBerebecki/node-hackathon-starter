const express = require('express');
const router = express.Router();

const home = require('./home');
const fruit = require('./fruit');

/**
 * Router-level middleware
 */
router.get('/', home.get);
router.get('/fruit', fruit.get);

module.exports = router;
