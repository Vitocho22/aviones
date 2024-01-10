// routes/AdministradorRoutes.js
const express = require('express');
const avionesControllers = require('../controllers/avionesControllers');

const router = express.Router();

// Rutas para administradores
router.get('/', avionesControllers.getAllAviones);
router.get('/:codigo', avionesControllers.getAvionByCodigo);
router.post('/', avionesControllers.createAvion);
router.put('/:codigo', avionesControllers.updateAvion);
router.delete('/:codigo', avionesControllers.deleteAvion);

module.exports = router;
