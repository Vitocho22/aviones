const express = require('express');
const router = express.Router();
const vueloController = require('../controllers/vuelosControllers');

router.get('/', vueloController.getAllVuelos);
router.get('/:num_vuelo', vueloController.getVueloByNumVuelo);
router.post('/', vueloController.createVuelo);
router.put('/:num_vuelo', vueloController.updateVuelo);
router.delete('/:num_vuelo', vueloController.deleteVuelo);

module.exports = router;
