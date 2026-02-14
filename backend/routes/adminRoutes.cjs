const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/auth.cjs');

router.get('/teste', authMiddleware, adminMiddleware, (req, res) => {
  res.json({
    message: 'Acesso autorizado',
    user: req.user
  });
});

module.exports = router;
