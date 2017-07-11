const express = require('express');
const router = express.Router();

const homeController = require('./../controllers/home');
const fruitController = require('./../controllers/fruit');
// const usersController = require('./../controllers/users');

/**
 * Router-level middleware
 */
router.get('/', homeController.getHome);
router.get('/fruit', fruitController.getFruit);
// router.get('/users', usersController.getUsers);

module.exports = router;
