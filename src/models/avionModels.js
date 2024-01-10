const db = require('../db/conexion');

const getAllAviones = async () => {
    const query = 'SELECT * FROM avion';
    const [rows] = await db.query({ sql: query, rowsAsArray: false });
    return rows;
};

const getAvionByCodigo = async (codigo) => {
    const query = 'SELECT * FROM avion WHERE codigo = ?';
    const [result] = await db.query(query, [codigo]);
    return result[0];
};

const insertAvion = async (codigo, tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo) => {
    const query = 'INSERT INTO avion (codigo, tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [codigo, tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo]);
    return result.insertId;
};

const updateAvion = async (codigo, tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo) => {
    const query = 'UPDATE avion SET tipo = ?, modelo = ?, capacidad = ?, año_fabricacion = ?, ultima_revision = ?, base_codigo = ? WHERE codigo = ?';
    const [result] = await db.query(query, [tipo, modelo, capacidad, año_fabricacion, ultima_revision, base_codigo, codigo]);
    return result.affectedRows;
};

const deleteAvionByCodigo = async (codigo) => {
    const query = 'DELETE FROM avion WHERE codigo = ?';
    const [result] = await db.query(query, [codigo]);
    return result.affectedRows;
};

module.exports = {
    getAllAviones,
    getAvionByCodigo,
    insertAvion,
    updateAvion,
    deleteAvionByCodigo,
};
