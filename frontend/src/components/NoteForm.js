import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/util"; // Pastikan path sesuai lokasi file

const createNote = async (noteData) => {
  return await axios.post(`${BASE_URL}/notes`, noteData);
};

const updateNote = async (id, noteData) => {
  return await axios.put(`${BASE_URL}/notes/${id}`, noteData);
};

const NoteForm = ({ selectedNote, refreshNotes }) => {
  const [formData, setFormData] = useState({ nama: "", title: "", content: "" });

  useEffect(() => {
    if (selectedNote) {
      setFormData(selectedNote);
    } else {
      setFormData({ nama: "", title: "", content: "" });
    }
  }, [selectedNote]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedNote) {
      await updateNote(selectedNote.id, formData);
    } else {
      await createNote(formData);
    }
    setFormData({ nama: "", title: "", content: "" });
    refreshNotes();
  };

  return (
    <div className="container">
      <h2 className="text-xl custom-cursive">
        {selectedNote ? "Edit Catatan" : "Tambah Catatan"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nama"
          placeholder="Author"
          value={formData.nama}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md h-24 resize-none"
        />
        <input
          type="text"
          name="title"
          placeholder="Judul"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md h-24 resize-none"
        />
        <textarea
          name="content"
          placeholder="Isi catatan"
          value={formData.content}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md h-24 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          {selectedNote ? "Update" : "Tambah"}
        </button>
      </form>
    </div>
  );
};

console.log("NoteForm Component Rendered!");

export default NoteForm;
