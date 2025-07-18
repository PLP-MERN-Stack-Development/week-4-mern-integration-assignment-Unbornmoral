const express = require('express');
const router = express.Router();

// Sample GET route
router.get('/', (req, res) => {
  res.send('Hello from Categories route!');
});

module.exports = router;
