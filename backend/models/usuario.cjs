const db = require('../config/db.cjs');

const Usuario = {
  create: (data, callback) => {
    const query = `INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)`;
    db.run(query, [data.nome, data.email, data.senha, data.tipo], function(err) {
      callback(err, this.lastID);
    });
  },
  findByEmail: (email, callback) => {
    const query = `SELECT * FROM usuarios WHERE email = ?`;
    db.get(query, [email], (err, row) => {
      callback(err, row);
    });
  }
};

module.exports = Usuario;
