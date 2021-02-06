const express = require('express');

const router = express.Router();

// GET / user Router
router.get('/', (req, res) => { //GET /user/
  res.send('Hello, user');
});

module.exports = router;