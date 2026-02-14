const db = require('../config/db.cjs');

const dashboardController = {
  getStats: (req, res) => {
    const stats = {};
    
    db.get(`SELECT COUNT(*) as count FROM produtos`, [], (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      stats.totalProdutos = row.count;
      
      db.get(`SELECT COUNT(*) as count FROM produtos WHERE oferta = 1`, [], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        stats.totalProdutosOferta = row.count;
        
        db.get(`SELECT COUNT(*) as count FROM produtos WHERE novo = 1`, [], (err, row) => {
          if (err) return res.status(500).json({ error: err.message });
          stats.totalProdutosNovos = row.count;
          
          db.get(`SELECT COUNT(*) as count FROM pedidos`, [], (err, row) => {
            if (err) return res.status(500).json({ error: err.message });
            stats.totalPedidos = row.count;
            res.json(stats);
          });
        });
      });
    });
  }
};

module.exports = dashboardController;
