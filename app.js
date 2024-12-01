const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();
const BASE_URL = '/api/v1';
const DB_URI_FINAL = 'mongodb+srv://acosta:GMlpWdxr5rVWdXlT@cluster0.q6gp89z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
app.use(cors()); // Allow cross-origin requests

// MongoDB connection
mongoose.connect(DB_URI_FINAL, {
    serverSelectionTimeoutMS: 60000,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
    res.send(
        '<h1>HostOptimizer</h1>\n' +
        '<p>ROUTES:</p>\n' +
        '<p>BASE URL:https://hostoptimizer.onrender.com/</p>\n' +
        '\n' +
        '<ul>\n' +
        '  <li><a href="/configuracao">GET /configuracao</a> - Todos os alojamentos</li>\n' +
        '  <li><a href="/configuracao/:id">GET /configuracao/:id</a> - Detalhes do alojamento</li>\n' +
        '  <li><a href="/configuracao">POST /configuracao</a> - Criar alojamento</li>\n' +
        '  <li><a href="/configuracao/:id">PUT /configuracao/:id</a> - Atualizar alojamento</li>\n' +
        '  <li><a href="/configuracao/:id">DELETE /configuracao/:id</a> - Apagar alojamento</li>\n' +
        '</ul>' +
        '<ul>' +
        '<li><a href="/avaliacao">GET /avaliacao</a> - Todas as avaliações</li>' +
        '<li><a href="/avaliacao/:id">GET /avaliacao/:id</a> - Detalhes da avaliação</li>' +
        '<li><a href="/avaliacao">POST /avaliacao</a> - Criar avaliação</li>' +
        '<li><a href="/avaliacao/:id">PUT /avaliacao/:id</a> - Atualizar avaliação</li>' +
        '<li><a href="/avaliacao/:id">DELETE /avaliacao/:id</a> - Apagar avaliação</li>' +
        '</ul>' +
        '<ul>'+
        '  <li><a href="/users">GET /users</a> - Todos os utilizadores</li>\n' +
        '  <li><a href="/users/:id">GET /users/:id</a> - Detalhes do utilizador</li>\n' +
        '  <li><a href="/users">POST /users</a> - Criar utilizador</li>\n' +
        '  <li><a href="/users/:id">PUT /users/:id</a> - Atualizar utilizador</li>\n' +
        '  <li><a href="/users/:id">DELETE /users/:id</a> - Apagar utilizador</li>\n' +

        '<li><a href="/login">POST /login</a> - User login to authenticate and receive a token</li>'+
        '<li><a href="/user">GET /user</a> - Retrieve user information (requires valid token)</li>'+
        '</ul>'
    );
});

// Routes
app.use( `${BASE_URL}/users`, userRoutes);
app.use( `${BASE_URL}`, authRoutes);
app.use( `${BASE_URL}/configuracao`, configuracaoRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
    console.log(`Server: http://localhost:3000`);
});
