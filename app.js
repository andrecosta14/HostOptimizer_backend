const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');
const cors = require('cors');

const app = express();
const BASE_URL = '/api/v1';

require('dotenv').config();

app.use(express.json());
app.use(cors()); // Allow cross-origin requests

// MongoDB connection
mongoose.connect('mongodb+srv://acosta:GMlpWdxr5rVWdXlT@cluster0.q6gp89z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

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
