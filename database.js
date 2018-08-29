var mysql = require("mysql");

//set connection to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Khedia@123",
  database: "Timetable_Maker"
});

var tablename= "5TH_SEM";
module.exports = {
  tablename : tablename,
  connection : con
}
