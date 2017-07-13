const { Pool } = require('pg');
const url = require('url');

if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config({ path: './config-dev.env' });
} else {
  require('dotenv').config({ path: './config-prod.env' });
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL missing from .env file');
}

const params = url.parse(process.env.DATABASE_URL);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.MAX_CONNECTIONS || 10,
  ssl: params.hostname !== 'localhost',
  idleTimeoutMillis: process.env.NODE_ENV === 'dev' ? 1000 : 30000,
};

if (username) {
  options.user = username;
}
if (password) {
  options.password = password;
}

module.exports = new Pool(options);
