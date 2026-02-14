const db = require('../config/db.cjs');

const Produto = {
  getAll: (callback) => {
    db.all(`SELECT * FROM produtos`, [], (err, rows) => {
      callback(err, rows);
    });
  },
  getById: (id, callback) => {
    db.get(`SELECT * FROM produtos WHERE id = ?`, [id], (err, row) => {
      callback(err, row);
    });
  }
};

module.exports = Produto;
