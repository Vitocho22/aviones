// routes/AdministradorRoutes.js
const express = require('express');
const administradorControllers = require('../controllers/vuelosControllers');

const router = express.Router();

// Rutas para administradores
router.get('/', administradorControllers.getAllAdministradores);
router.get('/:id', administradorControllers.getAdministradorById);
router.post('/', administradorControllers.createAdministrador);
router.put('/:id', administradorControllers.updateAdministrador);
router.delete('/:id', administradorControllers.deleteAdministradorById);

module.exports = router;
