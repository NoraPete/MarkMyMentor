const mysql = require('mysql');
require('dotenv').config({ path: __dirname + '/../.env' });

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME
  });

  connection.connect((err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('Connection with database established');
  });

module.exports = connection;
