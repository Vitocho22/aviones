const miembroModel = require('../models/miembro');

const getAllMiembros = async (req, res) => {
    try {
        const miembros = await miembroModel.getAllMiembros();
        res.json(miembros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMiembroByCodigo = async (req, res) => {
    try {
        const { codigo } = req.params;
        const miembro = await miembroModel.getMiembroByCodigo(codigo);
        if (miembro) {
            res.json(miembro);
        } else {
            res.status(404).json({ message: 'Miembro not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMiembro = async (req, res) => {
    try {
        const { codigo, funcion, fecha_ingreso, idiomas, email, telefono, base_codigo } = req.body;
        const newMiembroId = await miembroModel.insertMiembro(codigo, funcion, fecha_ingreso, idiomas, email, telefono, base_codigo);
        res.status(201).json({ id: newMiembroId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMiembro = async (req, res) => {
    try {
        const { codigo } = req.params;
        const { funcion, fecha_ingreso, idiomas, email, telefono, base_codigo } = req.body;
        const updated = await miembroModel.updateMiembro(codigo, funcion, fecha_ingreso, idiomas, email, telefono, base_codigo);
        if (updated) {
            res.json({ message: 'Miembro updated successfully' });
        } else {
            res.status(404).json({ message: 'Miembro not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMiembro = async (req, res) => {
    try {
        const { codigo } = req.params;
        const deleted = await miembroModel.deleteMiembroByCodigo(codigo);
        if (deleted) {
            res.json({ message: 'Miembro deleted successfully' });
        } else {
            res.status(404).json({ message: 'Miembro not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllMiembros,
    getMiembroByCodigo,
    createMiembro,
    updateMiembro,
    deleteMiembro,
};
