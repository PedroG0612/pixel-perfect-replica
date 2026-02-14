const Produto = require('../models/produto.cjs');

const adminProdutoController = {
  create: (req, res) => {
    Produto.create(req.body, (err, id) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id, ...req.body });
    });
  },
  getAll: (req, res) => {
    Produto.getAllAdmin(req.query, (err, produtos) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(produtos);
    });
  },
  getById: (req, res) => {
    Produto.getById(req.params.id, (err, produto) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
      res.json(produto);
    });
  },
  update: (req, res) => {
    Produto.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Produto atualizado com sucesso' });
    });
  },
  delete: (req, res) => {
    Produto.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Produto removido com sucesso' });
    });
  }
};

module.exports = adminProdutoController;
