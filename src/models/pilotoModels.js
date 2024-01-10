const db = require('../db/conexion');

const getAllPilotos = async () => {
    const query = 'SELECT * FROM piloto';
    const [rows] = await db.query({ sql: query, rowsAsArray: false });
    return rows;
};

const getPilotoByCodigo = async (codigo) => {
    const query = 'SELECT * FROM piloto WHERE codigo = ?';
    const [result] = await db.query(query, [codigo]);
    return result[0];
};

const insertPiloto = async (codigo, horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo) => {
    const query = 'INSERT INTO piloto (codigo, horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [codigo, horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo]);
    return result.insertId;
};

const updatePiloto = async (codigo, horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo) => {
    const query = 'UPDATE piloto SET horas_vuelo = ?, licencia = ?, fecha_certificacion = ?, nacionalidad = ?, email = ?, telefono = ?, base_codigo = ? WHERE codigo = ?';
    const [result] = await db.query(query, [horas_vuelo, licencia, fecha_certificacion, nacionalidad, email, telefono, base_codigo, codigo]);
    return result.affectedRows;
};

const deletePilotoByCodigo = async (codigo) => {
    const query = 'DELETE FROM piloto WHERE codigo = ?';
    const [result] = await db.query(query, [codigo]);
    return result.affectedRows;
};

module.exports = {
    getAllPilotos,
    getPilotoByCodigo,
    insertPiloto,
    updatePiloto,
    deletePilotoByCodigo,
};