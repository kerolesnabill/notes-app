import { useCallback, useEffect, useState } from "react";
import AddNoteForm from "./components/AddNoteForm";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import api from "./api/api";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNotes = useCallback(async () => {
    setIsLoading(true);
    await api
      .get("/notes.json")
      .then((response) => {
        const data = response.data;

        const loadedNotes = [];

        for (const key in data) {
          loadedNotes.push({
            id: data[key].id,
            title: data[key].title,
            content: data[key].content,
          });
        }
        setNotes(loadedNotes);
      })
      .catch((error) => setError(error.message));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const addNoteHandler = async (note) => {
    const res = await api.post("/notes.json", note);
    const id = res.data.name;
    await api.put(`notes/${id}.json`, { ...note, id: `${id}` });
    getNotes();
  };

  const deleteNoteHandler = async (id) => {
    await api.delete(`notes/${id}.json`);
    getNotes();
  };

  let pageContent = <p>Found no notes</p>;

  if (isLoading) pageContent = <p>Loading...</p>;
  else if (notes.length > 0)
    pageContent = <NotesList notes={notes} onDelete={deleteNoteHandler} />;
  else if (error) pageContent = <p className="text__error">{error}</p>;

  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <AddNoteForm onAddNote={addNoteHandler} />
      </section>
      <section className="page__content">{pageContent}</section>
    </>
  );
}

export default App;
