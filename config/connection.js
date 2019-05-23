// Set up MySQL connection.
var mysql = require("mysql");

var connection;



// jawsDB connection

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(prcoess.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
};

connection.connect();
module.exports = connection;