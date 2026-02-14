const db = require('../config/db.cjs');

const Categoria = {
  create: (nome, callback) => {
    db.run(`INSERT INTO categorias (nome) VALUES (?)`, [nome], function(err) {
      callback(err, this ? this.lastID : null);
    });
  },
  getAll: (callback) => {
    db.all(`SELECT * FROM categorias`, [], callback);
  },
  update: (id, nome, callback) => {
    db.run(`UPDATE categorias SET nome = ? WHERE id = ?`, [nome, id], callback);
  },
  delete: (id, callback) => {
    db.run(`DELETE FROM categorias WHERE id = ?`, [id], callback);
  }
};

module.exports = Categoria;
