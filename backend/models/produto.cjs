const db = require('../config/db.cjs');

const Produto = {
  create: (data, callback) => {
    const { nome, descricao, categoria, preco, preco_promocional, estoque, tamanho, cor, imagem, destaque, novo, oferta } = data;
    db.run(
      `INSERT INTO produtos (nome, descricao, categoria, preco, preco_promocional, estoque, tamanho, cor, imagem, destaque, novo, oferta) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome, descricao, categoria, preco, preco_promocional, estoque, tamanho, cor, imagem, destaque ? 1 : 0, novo ? 1 : 0, oferta ? 1 : 0],
      function(err) {
        callback(err, this ? this.lastID : null);
      }
    );
  },

  getAllAdmin: (filters, callback) => {
    let query = `SELECT * FROM produtos WHERE 1=1`;
    const params = [];

    if (filters.categoria) {
      query += ` AND categoria = ?`;
      params.push(filters.categoria);
    }
    if (filters.oferta === 'true') {
      query += ` AND oferta = 1`;
    }
    if (filters.novo === 'true') {
      query += ` AND novo = 1`;
    }

    db.all(query, params, callback);
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM produtos`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM produtos WHERE id = ?`, [id], callback);
  },

  update: (id, data, callback) => {
    const { nome, descricao, categoria, preco, preco_promocional, estoque, tamanho, cor, imagem, destaque, novo, oferta } = data;
    db.run(
      `UPDATE produtos SET nome=?, descricao=?, categoria=?, preco=?, preco_promocional=?, estoque=?, tamanho=?, cor=?, imagem=?, destaque=?, novo=?, oferta=? WHERE id=?`,
      [nome, descricao, categoria, preco, preco_promocional, estoque, tamanho, cor, imagem, destaque ? 1 : 0, novo ? 1 : 0, oferta ? 1 : 0, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM produtos WHERE id = ?`, [id], callback);
  }
};

module.exports = Produto;
