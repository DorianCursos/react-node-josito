import cookieParser from 'cookie-parser';
import express from 'express';

import dotenv from 'dotenv';
import notesRoutes from './routes/notes.routes.js';

const app = express();

dotenv.config();

// Rutas

// Middlewares para cliente
app.use(express.json());
app.use(cookieParser());

// Uso de rutas
app.use('/api/notes', notesRoutes);

const startServer = () => {
  app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
};

startServer();
