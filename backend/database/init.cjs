const db = require('../config/db.cjs');

const initDb = () => {
  db.serialize(() => {
    // Tabela Usuarios
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL,
      tipo TEXT CHECK(tipo IN ('admin', 'cliente')) DEFAULT 'cliente',
      data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Tabela Categorias
    db.run(`CREATE TABLE IF NOT EXISTS categorias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL
    )`);

    // Tabela Produtos
    db.run(`CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      descricao TEXT,
      categoria TEXT,
      preco REAL NOT NULL,
      preco_promocional REAL,
      estoque INTEGER DEFAULT 0,
      tamanho TEXT,
      cor TEXT,
      imagem TEXT,
      destaque BOOLEAN DEFAULT 0,
      novo BOOLEAN DEFAULT 0,
      oferta BOOLEAN DEFAULT 0,
      data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Tabela Pedidos
    db.run(`CREATE TABLE IF NOT EXISTS pedidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER,
      total REAL NOT NULL,
      status TEXT DEFAULT 'pendente',
      data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
    )`);

    // Tabela Itens Pedido
    db.run(`CREATE TABLE IF NOT EXISTS itens_pedido (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pedido_id INTEGER,
      produto_id INTEGER,
      quantidade INTEGER NOT NULL,
      preco_unitario REAL NOT NULL,
      FOREIGN KEY (pedido_id) REFERENCES pedidos (id),
      FOREIGN KEY (produto_id) REFERENCES produtos (id)
    )`);

    console.log('Tabelas inicializadas com sucesso.');
  });
};

module.exports = initDb;
