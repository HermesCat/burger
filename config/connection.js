// Set up MySQL connection.
var mysql = require("mysql");

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

// jawsDB connection

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(prcoess.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    databse: 'burgers_db'
  });
};

connection.connection();
module.exports = connection;