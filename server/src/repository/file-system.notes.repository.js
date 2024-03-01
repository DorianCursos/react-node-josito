import fs from 'fs/promises';
import { v4 } from 'uuid';

const filePath = new URL('data.json', import.meta.url);

const promisifiedReadFile = async () => {
  try {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    throw new Error('Error al leer el archivo de usuarios');
  }
};

const promisifiedWriteFile = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
    return await fs.readFile(filePath);
  } catch (err) {
    throw new Error('Error al guardar el archivo de usuarios');
  }
};

// Uso de las funciones promisificadas
const create = async note => {
  try {
    const notes = await promisifiedReadFile(filePath);

    const newNote = {
      id: v4(),
      ...note
    };

    notes.push(newNote);

    await promisifiedWriteFile(filePath, notes);

    return newNote;
  } catch (err) {
    throw new Error('Error al leer el archivo de notas');
  }
};

const getAll = async () => {
  throw new Error('Método not implemented, güey');
};

export { create };
