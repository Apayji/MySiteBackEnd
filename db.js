var sqlite3 = require("sqlite3").verbose();
var md5 = require("md5");

const DATASOURCE = "sample.sqlite";

let db = new sqlite3.Database(DATASOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the sample database.");
    db.run(
      "CREATE TABLE student ( \
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            name text, \
            userid text , \
            password text \
            )",
      (err) => {
        if (err) {
          console.log("Table already exists.");
        } else {
        }
      }
    );
  }
});

module.exports = db;
