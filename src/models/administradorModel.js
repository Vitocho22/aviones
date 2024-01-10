const db = require('../db/conexion');

const getAllAdministradores = async () => {
    const query = 'SELECT * FROM administrador';
    const [rows] = await db.query({ sql: query, rowsAsArray: false });
    return rows;
};

const getAdministradorById = async (id) => {
    const query = 'SELECT * FROM administrador WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result[0];
};

const insertAdministrador = async (email, contrasena, username, role) => {
    const query = 'INSERT INTO administrador (email, contrasena, username, role) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [email, contrasena, username, role]);
    return result.insertId;
};

const updateAdministrador = async (id, email, contrasena, username, role) => {
    const query = 'UPDATE administrador SET email = ?, contrasena = ?, username = ?, role = ? WHERE id = ?';
    const [result] = await db.query(query, [email, contrasena, username, role, id]);
    return result.affectedRows;
};

const deleteAdministradorById = async (id) => {
    const query = 'DELETE FROM administrador WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
};

module.exports = {
    getAllAdministradores,
    getAdministradorById,
    insertAdministrador,
    updateAdministrador,
    deleteAdministradorById,
};

