const db = require('../db/conexion');

const getAllMiembros = async () => {
    const query = 'SELECT * FROM miembro';
    const [rows] = await db.query(query);
    return rows;
};

const getMiembroByCodigo = async (codigo) => {
    const query = 'SELECT * FROM miembro WHERE codigo = ?';
    const [rows] = await db.query(query, [codigo]);
    return rows[0];
};

const insertMiembro = async (codigo, funcion, fecha_ingreso, idiomas, email, telefono, base_codigo) => {
    const query = 'INSERT INTO miembro (codigo, funcion, fecha_ingreso, idiomas, email, telefono, base_codigo) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [codigo, funcion, fecha_ingreso, idiomas, email, telefono, base_codigo]);
    return result.insertId;
};

const updateMiembro = async (codigo, funcion, fecha_ingreso, idiomas, email, telefono, base_codigo) => {
    const query = 'UPDATE miembro SET funcion = ?, fecha_ingreso = ?, idiomas = ?, email = ?, telefono = ?, base_codigo = ? WHERE codigo = ?';
    const [result] = await db.query(query, [funcion, fecha_ingreso, idiomas, email, telefono, base_codigo, codigo]);
    return result.affectedRows;
};

const deleteMiembroByCodigo = async (codigo) => {
    const query = 'DELETE FROM miembro WHERE codigo = ?';
    const [result] = await db.query(query, [codigo]);
    return result.affectedRows;
};

module.exports = {
    getAllMiembros,
    getMiembroByCodigo,
    insertMiembro,
    updateMiembro,
    deleteMiembroByCodigo,
};
