const express = require('express');
const app = express();
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


configViewEngine(app);

app.use('/test', webRoutes);
app.use('/', webRoutes);

// Run db before server
(async() => {
  try {
    await  connection();
    app.listen(port, hostname => {
      console.log(`Backend Zero listening on port ${port}`);
    })
  }catch (error){
    console.log(">>> erro connection to db", error)
  }
})()

// connection.query(
//   'SELECT * FROM User', 
//   function(err, results, fields) {
//     console.log(results);
//     console.log(fields);
//   }
// );

