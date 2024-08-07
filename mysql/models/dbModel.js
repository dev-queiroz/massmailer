const connection = require("../config/dbConfig");
require("dotenv").config();

const getAllEmails = (callback) => {
  const query = `SELECT ${process.env.MYSQL_EMAIL_COLUMN} FROM ${process.env.MYSQL_TABLE}`;
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err);
    }
    const emails = results.map((row) => row[process.env.MYSQL_EMAIL_COLUMN]);
    callback(null, emails);
  });
};

module.exports = {
  getAllEmails,
};
