import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshNotes = () => setRefresh(!refresh);

return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-200">
      <h1 className="text-3xl custom-cursive text-center">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🕊️Welcome to Naws Notes🕊️~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
      <NoteForm selectedNote={selectedNote} refreshNotes={refreshNotes} />
      <NoteList onEdit={setSelectedNote} refresh={refresh} />
    </div>
  );
}

export default App;
