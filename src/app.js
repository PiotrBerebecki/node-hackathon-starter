const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const controllers = require('./controllers/index');
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

/**
 * Application-level middleware
 *
 */
// Log requests to the console.
app.use(morgan('dev'));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// make data accessible throuout the app
app.use((req, res, next) => {
  res.locals.favourite = 'orange';
  next();
});

app.use(controllers);

module.exports = app;
