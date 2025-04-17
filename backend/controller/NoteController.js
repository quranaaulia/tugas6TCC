import Note from "../model/NoteModel.js";

// Ambil semua catatan
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ambil satu catatan berdasarkan ID
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) res.json(note);
    else res.status(404).json({ message: "Note not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tambah catatan baru
export const createNote = async (req, res) => {
  try {
    const { nama, title, content } = req.body;
    const newNote = await Note.create({ nama, title, content });
    res.status(201).json({ message: "Note created", note: newNote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Perbarui catatan
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      const { nama, title, content } = req.body;
      await note.update({ nama, title, content });
      res.json({ message: "Note updated", note });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Hapus catatan
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.destroy();
      res.json({ message: "Note deleted" });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
