const express = require('express');
const app = express();
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');

const fileUpload = require('express-fileupload');

const webRoutes = require('./routes/web');
const apiRouter = require('./routes/api');
const connection = require('./config/database')

const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);


// config file uplaod
app.use(fileUpload());

app.use('/', webRoutes);
app.use('/v1/api', apiRouter);


// Run db before server
(async () => {
  try {
    // using mongoose 
    await connection();

    // using mogodb drive
    // const url = process.env.DB_HOST_WITH_DRIVE;
    // const client = new MongoClient(url);
    // const dbName = process.env.DB_NAME;
    // await client.connect();
    // console.log('Connected successfully to server');

    // const db = client.db(dbName);
    // const collection = db.collection('customers');

    // collection.insertOne({"name" : "Hoi dan it"})

    app.listen(port, hostname => {
      console.log(`Backend Zero listening on port ${port}`);
    })
  } catch (error) {
    console.log(">>> erro connection to db", error)
  }
})()
