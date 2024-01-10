const pilotoModel = require('../models/pilotoModels');

const getAllPilotos = async (req, res) => {
    try {
        const pilotos = await pilotoModel.getAllPilotos();
        res.json(pilotos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPilotoByCodigo = async (req, res) => {
    try {
        const { codigo } = req.params;
        const piloto = await pilotoModel.getPilotoByCodigo(codigo);
        if (piloto) {
            res.json(piloto);
        } else {
            res.status(404).json({ message: 'Piloto not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPiloto = async (req, res) => {
    try {
        const { codigo, horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo } = req.body;
        const newPilotoId = await pilotoModel.insertPiloto(codigo, horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo);
        res.status(201).json({ id: newPilotoId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePiloto = async (req, res) => {
    try {
        const { codigo } = req.params;
        const { horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo } = req.body;
        const updated = await pilotoModel.updatePiloto(codigo, horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo);
        if (updated) {
            res.json({ message: 'Piloto updated successfully' });
        } else {
            res.status(404).json({ message: 'Piloto not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePiloto = async (req, res) => {
    try {
        const { codigo } = req.params;
        const deleted = await pilotoModel.deletePilotoByCodigo(codigo);
        if (deleted) {
            res.json({ message: 'Piloto deleted successfully' });
        } else {
            res.status(404).json({ message: 'Piloto not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPilotos,
    getPilotoByCodigo,
    createPiloto,
    updatePiloto,
    deletePiloto,
};
