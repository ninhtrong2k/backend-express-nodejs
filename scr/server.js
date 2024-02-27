const express = require('express');
const app = express();
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
configViewEngine(app);

app.use('/test', webRoutes);
app.use('/', webRoutes);

const connection = mysql.createConnection({
  host: '192.168.200.177',
  port: 3306,
  user: 'root',
  password: 'toandaik',
  database: 'backend_nodejs'
});

connection.query(
  'SELECT * FROM User', 
  function(err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);

app.listen(port, hostname => {
  console.log(`Example app listening on port ${port}`);
})