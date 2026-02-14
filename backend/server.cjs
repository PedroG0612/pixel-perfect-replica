require('dotenv').config();
const express = require('express');
const cors = require('cors');
const initDb = require('./database/init.cjs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Inicializar Banco de Dados
initDb();

// Rota base
app.get('/', (req, res) => {
  res.send('API da Loja de Roupas Online');
});

const produtoRoutes = require('./routes/produtoRoutes.cjs');
const authRoutes = require('./routes/authRoutes.cjs');
const adminRoutes = require('./routes/adminRoutes.cjs');

app.use('/api/produtos', produtoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
