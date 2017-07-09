const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const routes = require('./routes/index');
const helpers = require('./views/helpers/index');

/**
 * Create express server
 */
const app = express();

/**
 * Express config
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers,
  })
);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);

module.exports = app;
