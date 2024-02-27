const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World! Haha');
})

router.get('/abc', (req, res) => {
  res.render('sample');
});

module.exports = router;