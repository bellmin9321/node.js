const express = require('express');

const router = expres.Router();

// GET / Router
router.get('/', (req, res) => {
  res.send('Hello, express');
});

module.exports = router;