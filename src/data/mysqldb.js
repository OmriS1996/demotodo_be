const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: process.env.DB_PW,
  database: "tododb",
});
const query = (queryText) => {
  return new Promise((resolve, reject) => {
    pool.query(queryText, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
exports.query = query;
