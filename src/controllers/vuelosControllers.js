const vueloModel = require('../models/vueloModel');

const getAllVuelos = async (req, res) => {
    try {
        const vuelos = await vueloModel.getAllVuelos();
        res.json(vuelos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getVueloByNumVuelo = async (req, res) => {
    try {
        const { num_vuelo } = req.params;
        const vuelo = await vueloModel.getVueloByNumVuelo(num_vuelo);
        if (vuelo) {
            res.json(vuelo);
        } else {
            res.status(404).json({ message: 'Vuelo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createVuelo = async (req, res) => {
    try {
        const { num_vuelo, origen, destino, hora, fecha, avion_codigo, piloto_codigo } = req.body;
        const newVueloId = await vueloModel.insertVuelo(num_vuelo, origen, destino, hora, fecha, avion_codigo, piloto_codigo);
        res.status(201).json({ id: newVueloId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateVuelo = async (req, res) => {
    try {
        const { num_vuelo } = req.params;
        const { origen, destino, hora, fecha, avion_codigo, piloto_codigo } = req.body;
        const updated = await vueloModel.updateVuelo(num_vuelo, origen, destino, hora, fecha, avion_codigo, piloto_codigo);
        if (updated) {
            res.json({ message: 'Vuelo updated successfully' });
        } else {
            res.status(404).json({ message: 'Vuelo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteVuelo = async (req, res) => {
    try {
        const { num_vuelo } = req.params;
        const deleted = await vueloModel.deleteVueloByNumVuelo(num_vuelo);
        if (deleted) {
            res.json({ message: 'Vuelo deleted successfully' });
        } else {
            res.status(404).json({ message: 'Vuelo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllVuelos,
    getVueloByNumVuelo,
    createVuelo,
    updateVuelo,
    deleteVuelo,
};
