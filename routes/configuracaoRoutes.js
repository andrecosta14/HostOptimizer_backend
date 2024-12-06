const express = require('express');
const configuracaoController = require('../controllers/configuracaoController');
const { hasRole } = require("../middlewares/authMiddleware");
const { verifyToken } = require("../utils/authUtils");

const router = express.Router();

// Ensure token verification happens before any role checking or controller logic
router.use(verifyToken);

// Define routes with role-based access
router.post('/', hasRole('proprietario', 'admin'), configuracaoController.create);
router.get('/', hasRole('proprietario', 'admin', 'user'), configuracaoController.getAll);
router.get('/:id', hasRole('proprietario', 'admin', 'user'), configuracaoController.getById);
router.put('/:id', hasRole('proprietario', 'admin'), configuracaoController.update);
router.delete('/:id', hasRole('proprietario', 'admin'), configuracaoController.delete);

module.exports = router;