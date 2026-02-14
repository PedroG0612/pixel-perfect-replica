const Categoria = require('../models/categoria.cjs');

const adminCategoriaController = {
  create: (req, res) => {
    if (!req.body.nome) return res.status(400).json({ error: 'Nome da categoria é obrigatório' });
    Categoria.create(req.body.nome, (err, id) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id, nome: req.body.nome });
    });
  },
  getAll: (req, res) => {
    Categoria.getAll((err, categorias) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(categorias);
    });
  },
  update: (req, res) => {
    if (!req.body.nome) return res.status(400).json({ error: 'Nome da categoria é obrigatório' });
    Categoria.update(req.params.id, req.body.nome, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Categoria atualizada com sucesso' });
    });
  },
  delete: (req, res) => {
    Categoria.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Categoria removida com sucesso' });
    });
  }
};

module.exports = adminCategoriaController;
