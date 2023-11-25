var mysql = require("mysql2")

module.exports = function(){
    return mysql.createConnection({
        host: "viaduct.proxy.rlwy.net",
        user: "root",
        database: "railway",
        password: "e-gAeCGc123C5hhbbH34A4H5hhAG4a-F",
        port: 57514
    });

};

// module.exports = function(){
//     return mysql.createConnection({
//         host: "127.0.0.1",
//         user: "root",
//         database: "nixwear",
//         password: "@ITB123456",
//         port: 3306
//     });

// };