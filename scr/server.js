const express = require('express');
const path = require('path');
require('dotenv').config();
// import express from 'express';
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.send('Hello World! Haha');
})
app.get('/abc', (req, res) => {
  // res.send('Hello World! abc')
  res.render('sample.ejs');
})

app.listen(port, hostname => {
  console.log(`Example app listening on port ${port}`);
})