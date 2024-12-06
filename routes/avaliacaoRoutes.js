const express = require('express');
const avaliacaoController = require('../controllers/avaliacaoController');
const {hasRole} = require("../middlewares/authMiddleware");


const router = express.Router();

// Protect routes for `proprietario` and `admin` roles
router.use(hasRole(['proprietario', 'admin', 'user']));

router.post('/', hasRole('proprietario', 'admin'), avaliacaoController.create); // Create a new configuration
router.get('/', hasRole('proprietario', 'admin'), avaliacaoController.getAll); // Get all configurations
router.get('/:id', hasRole('proprietario', 'admin'), avaliacaoController.getById); // Get a single configuration
router.put('/:id',hasRole('proprietario', 'admin'), avaliacaoController.update); // Update a configuration
router.delete('/:id',hasRole('proprietario', 'admin'), avaliacaoController.delete); // Delete a configuration

module.exports = router;