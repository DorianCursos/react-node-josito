import { create } from '../repository/file-system.notes.repository.js';
import { getAll, getBySeverity } from '../repository/in-memory.notes.repository.js';

const createNote = async note => {
  const newNote = await create(note);
  return newNote;
};

const getAllNotes = async () => {
  const allNotes = await getAll();
  return allNotes;
};

const getHighSeverityNotes = () => {
  const notes = getBySeverity('high');
  return notes;
};

const getMediumSeverityNotes = () => {
  const notes = getBySeverity('medium');
  console.log(notes);
  return notes;
};

const getLowSeverityNotes = () => {
  const notes = getBySeverity('low');
  return notes;
};

const createReport = async () => {
  const highNotes = await getHighSeverityNotes();
  const mediumNotes = await getMediumSeverityNotes();
  const lowNotes = await getLowSeverityNotes();

  return { highNotesCount: highNotes.length, mediumNotesCount: mediumNotes.length, lowNotesCount: lowNotes.length };
};

export { createNote, createReport, getAllNotes };
