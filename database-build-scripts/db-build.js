const fs = require('fs');
const path = require('path');

const connect = require('./../src/database/db-connect.js');

const build = fs.readFileSync(path.join(__dirname, 'db-build.sql'), 'utf8');

connect.query(build, (err, result) => {
  if (err) {
    throw err;
  }
  console.log('Database created');
});
