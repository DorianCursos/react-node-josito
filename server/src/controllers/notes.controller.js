import { createNote, createReport, getAllNotes } from '../services/notes.service.js';

const controller = {};

controller.getAllNotes = async (req, res) => {
  try {
    const allNotes = getAllNotes();
    return res.status(200).json(allNotes);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.createReport = async (req, res) => {
  try {
    const report = await createReport();
    return res.status(200).json(report);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.createNote = async (req, res) => {
  try {
    const newNote = createNote({ ...req.body });
    return res.status(201).json(newNote);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating note.' + err });
  }
};

export default controller;
