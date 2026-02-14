const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db.cjs');

const AuthController = {
  register: async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      // Verificar se o email já existe
      db.get('SELECT id FROM usuarios WHERE email = ?', [email], async (err, row) => {
        if (err) return res.status(500).json({ error: 'Erro no servidor' });
        if (row) return res.status(400).json({ error: 'Email já cadastrado' });

        // Criptografar senha
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        // Salvar usuário
        db.run(
          'INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)',
          [nome, email, senhaHash, 'cliente'],
          function (err) {
            if (err) return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
            res.status(201).json({ message: 'Usuário cadastrado com sucesso', id: this.lastID });
          }
        );
      });
    } catch (error) {
      res.status(500).json({ error: 'Erro interno' });
    }
  },

  login: async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    db.get('SELECT * FROM usuarios WHERE email = ?', [email], async (err, user) => {
      if (err) return res.status(500).json({ error: 'Erro no servidor' });
      if (!user) return res.status(400).json({ error: 'Credenciais inválidas' });

      // Comparar senhas
      const isMatch = await bcrypt.compare(senha, user.senha);
      if (!isMatch) return res.status(400).json({ error: 'Credenciais inválidas' });

      // Gerar Token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email, tipo: user.tipo },
        process.env.JWT_SECRET || 'secreto_fallback',
        { expiresIn: '1h' }
      );

      res.json({
        token,
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          tipo: user.tipo
        }
      });
    });
  }
};

module.exports = AuthController;
