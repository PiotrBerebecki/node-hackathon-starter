const express = require('express');
const router = express.Router();

const home = require('./home');
const fruit = require('./fruit');
const error = require('./error');

/**
 * Router-level middleware
 */
router.get('/', home.get);
router.get('/fruit', fruit.get);
router.post('/fruit', fruit.post);
router.use(error);

module.exports = router;
