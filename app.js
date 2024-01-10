// index.js
const express = require('express');
const cors = require('cors');
const db = require('./src/db/conexion'); // Importa la conexión a la base de datos
const administradorRoutes = require('./src/routes/administradorRoutes');
const baseRoutes = require('./src/routes/baseRoutes');
const avionRoutes = require('./src/routes/avionRoutes');
const pilotoRoutes = require('./src/routes/pilotoRoutes');
const vueloRoutes = require('./src/routes/vueloRoutes');
const miembroRoutes = require('./src/routes/miembrosRoutes');


const app = express();

// Middleware para habilitar CORS
app.use(cors());
app.use(express.json());


// Rutas
app.use('/administradores', administradorRoutes);
app.use('/base', baseRoutes);
app.use('/avion', avionRoutes);
app.use('/piloto', pilotoRoutes);
app.use('/api/aviones', vueloRoutes);
app.use('/miembro', miembroRoutes);

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
