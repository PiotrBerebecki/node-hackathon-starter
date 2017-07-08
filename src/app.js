const express = require('express');
const path = require('path');
const hbs = require('hbs');

const routes = require('./routes/index');

/**
 * hbs config
 */
// hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

/**
 * Create express server
 */
const app = express();

/**
 * Express config
 */
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');
// app.registerLayouts(path.join(__dirname, 'views', 'layout'));
// hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);

module.exports = app;
