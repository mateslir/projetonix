var mysql = require("mysql");


module.exports = function(){
 return mysql.createConnection({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    password: "e-gAeCGc123C5hhbbH34A4H5hhAG4a-F",
    database: "railway",
    port: 57514
  });
}