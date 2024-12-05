const express = require('express');
const configuracaoController = require('../controllers/configuracaoController');
const {hasRole} = require("../middlewares/authMiddleware");

const router = express.Router();

// Protect routes for `proprietario` and `admin` roles
router.use(hasRole(['proprietario', 'admin']));

router.post('/', hasRole('proprietario', 'admin'), configuracaoController.create); // Create a new configuration
router.get('/', hasRole('proprietario', 'admin'), configuracaoController.getAll); // Get all configurations
router.get('/:id', hasRole('proprietario', 'admin'), configuracaoController.getById); // Get a single configuration
router.put('/:id',hasRole('proprietario', 'admin'), configuracaoController.update); // Update a configuration
router.delete('/:id',hasRole('proprietario', 'admin'), configuracaoController.delete); // Delete a configuration

module.exports = router;