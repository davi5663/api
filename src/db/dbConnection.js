const mysql = require("mysql2");
const env = require("dotenv").config();

function query(queryString, cbFunc) {
  const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  });
  connection.query(queryString, (error, result) => {
    cbFunc(setResponse(error, result));
  });
}

function setResponse(error, results) {
  return {
    error: error,
    results: results ? results : null,
  };
}

module.exports = {
  query,
};
