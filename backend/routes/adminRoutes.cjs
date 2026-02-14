const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/auth.cjs');
const adminProdutoController = require('../controllers/adminProdutoController.cjs');
const adminCategoriaController = require('../controllers/adminCategoriaController.cjs');
const dashboardController = require('../controllers/dashboardController.cjs');

// Todas as rotas aqui requerem autenticação e privilégios de admin
router.use(authMiddleware, adminMiddleware);

// Rota de Teste
router.get('/teste', (req, res) => {
  res.json({ message: 'Acesso autorizado', user: req.user });
});

// Dashboard
router.get('/dashboard', dashboardController.getStats);

// Produtos Admin
router.post('/produtos', adminProdutoController.create);
router.get('/produtos', adminProdutoController.getAll);
router.get('/produtos/:id', adminProdutoController.getById);
router.put('/produtos/:id', adminProdutoController.update);
router.delete('/produtos/:id', adminProdutoController.delete);

// Categorias Admin
router.post('/categorias', adminCategoriaController.create);
router.get('/categorias', adminCategoriaController.getAll);
router.put('/categorias/:id', adminCategoriaController.update);
router.delete('/categorias/:id', adminCategoriaController.delete);

module.exports = router;
