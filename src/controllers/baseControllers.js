const baseModel = require('../models/baseModels');

const getAllBases = async (req, res) => {
    try {
        const bases = await baseModel.getAllBases();
        res.json(bases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBaseByNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const base = await baseModel.getBaseByNombre(nombre);
        if (base) {
            res.json(base);
        } else {
            res.status(404).json({ message: 'Base not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBase = async (req, res) => {
    try {
        const { nombre, ubicacion, capacidad, facilidades } = req.body;
        const newBaseId = await baseModel.insertBase(nombre, ubicacion, capacidad, facilidades);
        res.status(201).json({ id: newBaseId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBase = async (req, res) => {
    try {
        const { nombre } = req.params;
        const { ubicacion, capacidad, facilidades } = req.body;
        const updated = await baseModel.updateBase(nombre, ubicacion, capacidad, facilidades);
        if (updated) {
            res.json({ message: 'Base updated successfully' });
        } else {
            res.status(404).json({ message: 'Base not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBase = async (req, res) => {
    try {
        const { nombre } = req.params;
        const deleted = await baseModel.deleteBaseByNombre(nombre);
        if (deleted) {
            res.json({ message: 'Base deleted successfully' });
        } else {
            res.status(404).json({ message: 'Base not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBases,
    getBaseByNombre,
    createBase,
    updateBase,
    deleteBase,
};
