const mysql = require('mysql2/promise');
require('dotenv').config();

// const connection = mysql.createConnection({
//     host: process.env.HOST_NAME,
//     port: process.env.DB_PROT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
    
// });
const connection = mysql.createPool({
    host: process.env.HOST_NAME,
    port: process.env.DB_PROT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit:0
    

});

module.exports = connection;