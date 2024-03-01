import { v4 } from 'uuid';

import NOTES from './data.js';

const create = async note => {
  const newNote = {
    id: v4(),
    ...note
  };
  NOTES.push(newNote);
  return newNote;
};

const getAll = async () => {
  return NOTES;
};

const getBySeverity = severity => {
  const filteredNotes = NOTES.filter(note => note.severity === severity);
  return new Promise(resolve => resolve(filteredNotes));
};

export { create, getAll, getBySeverity };
