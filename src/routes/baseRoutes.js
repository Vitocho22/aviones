// routes/AdministradorRoutes.js
const express = require('express');
const administradorControllers = require('../controllers/baseControllers');

const router = express.Router();

// Rutas para administradores
router.get('/', administradorControllers.getAllBases);
router.get('/:nombre', administradorControllers.getBaseByNombre);
router.post('/', administradorControllers.createBase);
router.put('/:nombre', administradorControllers.updateBase);
router.delete('/:nombre', administradorControllers.deleteBase);

module.exports = router;
