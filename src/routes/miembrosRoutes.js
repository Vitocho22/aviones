const express = require('express');
const router = express.Router();
const miembroController = require('../controllers/miembrosControllers');

// Get all members
router.get('/', miembroController.getAllMiembros);

// Get a single member by codigo
router.get('/:codigo', miembroController.getMiembroByCodigo);

// Create a new member
router.post('/', miembroController.createMiembro);

// Update an existing member
router.put('/:codigo', miembroController.updateMiembro);

// Delete a member
router.delete('/:codigo', miembroController.deleteMiembro);

module.exports = router;
