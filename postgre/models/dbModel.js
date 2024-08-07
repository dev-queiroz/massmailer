const pool = require("../config/dbConfig");
require("dotenv").config();

const getAllEmails = (callback) => {
  const query = `SELECT ${process.env.PG_EMAIL_COLUMN} FROM ${process.env.PG_TABLE}`;
  pool.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }
    const emails = result.rows.map((row) => row[process.env.PG_EMAIL_COLUMN]);
    callback(null, emails);
  });
};

module.exports = {
  getAllEmails,
};
