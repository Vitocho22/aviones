const db = require('../db/conexion');

const getAllBases = async () => {
    const query = 'SELECT * FROM base';
    const [rows] = await db.query(query);
    return rows;
};

const getBaseByNombre = async (nombre) => {
    const query = 'SELECT * FROM base WHERE nombre = ?';
    const [results] = await db.query(query, [nombre]);
    return results[0];
};

const insertBase = async (nombre, ubicacion, capacidad, facilidades) => {
    const query = 'INSERT INTO base (nombre, ubicacion, capacidad, facilidades) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [nombre, ubicacion, capacidad, facilidades]);
    return result.insertId;
};

const updateBase = async (nombre, ubicacion, capacidad, facilidades) => {
    const query = 'UPDATE base SET ubicacion = ?, capacidad = ?, facilidades = ? WHERE nombre = ?';
    const [result] = await db.query(query, [ubicacion, capacidad, facilidades, nombre]);
    return result.affectedRows;
};

const deleteBaseByNombre = async (nombre) => {
    const query = 'DELETE FROM base WHERE nombre = ?';
    const [result] = await db.query(query, [nombre]);
    return result.affectedRows;
};

module.exports = {
    getAllBases,
    getBaseByNombre,
    insertBase,
    updateBase,
    deleteBaseByNombre,
};
