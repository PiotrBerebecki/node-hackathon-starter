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

  ```
  app.use(express.static(path.join(__dirname, '..', 'public')));
  ```

1. Handlebars

  There are a number of packages offering handlebars support in express: https://stackoverflow.com/a/35588129/4186037
