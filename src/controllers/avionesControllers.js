const avionModel  = require('../models/avionModels');

const getAllAviones = async (req, res) => {
    try {
        const aviones = await avionModel.getAllAviones();
        res.json(aviones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAvionByCodigo = async (req, res) => {
    try {
        const { codigo } = req.params;
        const avion = await avionModel.getAvionByCodigo(codigo);
        if (avion) {
            res.json(avion);
        } else {
            res.status(404).json({ message: 'Avión not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAvion = async (req, res) => {
    try {
        const { codigo, tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo } = req.body;
        const newAvionId = await avionModel.insertAvion(codigo, tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo);
        res.status(201).json({ id: newAvionId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAvion = async (req, res) => {
    try {
        const { codigo } = req.params;
        const { tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo } = req.body;
        const updated = await avionModel.updateAvion(codigo, tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo);
        if (updated) {
            res.json({ message: 'Avión updated successfully' });
        } else {
            res.status(404).json({ message: 'Avión not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAvion = async (req, res) => {
    try {
        const { codigo } = req.params;
        const deleted = await avionModel.deleteAvionByCodigo(codigo);
        if (deleted) {
            res.json({ message: 'Avión deleted successfully' });
        } else {
            res.status(404).json({ message: 'Avión not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllAviones,
    getAvionByCodigo,
    createAvion,
    updateAvion,
    deleteAvion,
};
