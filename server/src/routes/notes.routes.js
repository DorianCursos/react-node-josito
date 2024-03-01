import express from 'express';
import notesController from '../controllers/notes.controller.js';
const notesRoutes = express.Router();

notesRoutes.get('/', notesController.getAllNotes);
notesRoutes.get('/report', notesController.createReport);
notesRoutes.post('/', notesController.createNote);

export default notesRoutes;
