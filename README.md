# Fruit market - Express & handlebars app

https://node-hackathon-starter.herokuapp.com/

## Notes

### Deploy to Heroku

1. Install [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli) if necessary

  ```
  brew install heroku
  ```

1. Create heroku app and push it to Heroku

  ```
  heroku create app-name-here --region eu
  git push heroku master
  ```

1. To serve html files use `static` middleware

  ```js
  app.use(express.static(path.join(__dirname, '..', 'public')));
  ```

1. Handlebars setup

  There are a number of packages offering handlebars support in express: https://stackoverflow.com/a/35588129/4186037

  `app.js`
  ```js
  const exphbs = require('express-handlebars');
  const helpers = require('./views/helpers/index');

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', '.hbs');
  app.engine(
    '.hbs',
    exphbs({
      extname: '.hbs',
      layoutsDir: path.join(__dirname, 'views', 'layouts'),
      partialsDir: path.join(__dirname, 'views', 'partials'),
      defaultLayout: 'main',
      helpers: helpers,
    })
  );
  ```

1. Style nav links depending on current page

  ```js
  exports.getFruit = (req, res) => {
    res.render('fruit', { activePage: { fruit: true } });
  };
  ```

  ```html
  <ul class="navbar__list">
    <li class="navbar__item">
      <a class="navbar__link {{#if activePage.home}}navbar__link--active{{/if}}" href="/">Home</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__link {{#if activePage.fruit}}navbar__link--active{{/if}}" href="/fruit">Fruit</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__link {{#if activePage.users}}navbar__link--active{{/if}}" href="/users">Users</a>
    </li>
  </ul>
  ```
