const express = require('express');
const router = express.Router();

const homeController = require('./../controllers/home');
const fruitController = require('./../controllers/fruit');

router.get('/', homeController.getHome);
router.get('/fruit', fruitController.getFruit);

module.exports = router;
