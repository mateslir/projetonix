var mysql = require("mysql");


module.exports = function(){
 return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nix123",
    database: "nixwear",
    port: 3306
  });
}