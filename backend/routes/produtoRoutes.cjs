const express = require('express');
const router = express.Router();
const Produto = require('../models/produto.cjs');

router.get('/', (req, res) => {
  Produto.getAll((err, produtos) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(produtos);
  });
});

module.exports = router;
