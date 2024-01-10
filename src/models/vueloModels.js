const db = require('../db/conexion');

const getAllVuelos = async () => {
    const query = 'SELECT * FROM vuelo';
    const [rows] = await db.query({ sql: query, rowsAsArray: false });
    return rows;
};

const getVueloByNumVuelo = async (num_vuelo) => {
    const query = 'SELECT * FROM vuelo WHERE num_vuelo = ?';
    const [result] = await db.query(query, [num_vuelo]);
    return result[0];
};

const insertVuelo = async (num_vuelo, origen, destino, hora, fecha, avion_codigo, piloto_codigo) => {
    const query = 'INSERT INTO vuelo (num_vuelo, origen, destino, hora, fecha, avion_codigo, piloto_codigo) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [num_vuelo, origen, destino, hora, fecha, avion_codigo, piloto_codigo]);
    return result.insertId;
};

const updateVuelo = async (num_vuelo, origen, destino, hora, fecha, avion_codigo, piloto_codigo) => {
    const query = 'UPDATE vuelo SET origen = ?, destino = ?, hora = ?, fecha = ?, avion_codigo = ?, piloto_codigo = ? WHERE num_vuelo = ?';
    const [result] = await db.query(query, [origen, destino, hora, fecha, avion_codigo, piloto_codigo, num_vuelo]);
    return result.affectedRows;
};

const deleteVueloByNumVuelo = async (num_vuelo) => {
    const query = 'DELETE FROM vuelo WHERE num_vuelo = ?';
    const [result] = await db.query(query, [num_vuelo]);
    return result.affectedRows;
};

module.exports = {
    getAllVuelos,
    getVueloByNumVuelo,
    insertVuelo,
    updateVuelo,
    deleteVueloByNumVuelo,
};
