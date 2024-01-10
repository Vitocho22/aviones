const express = require('express');
const router = express.Router();
const pilotoController = require('../controllers/pilotosControllers');

router.get('/', pilotoController.getAllPilotos);
router.get('/:codigo', pilotoController.getPilotoByCodigo);
router.post('/', pilotoController.createPiloto);
router.put('/:codigo', pilotoController.updatePiloto);
router.delete('/:codigo', pilotoController.deletePiloto);

module.exports = router;
