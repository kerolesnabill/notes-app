import { useCallback, useEffect, useState } from "react";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNotesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-js-notes-app-default-rtdb.firebaseio.com/notes.json"
      );
      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();
      const loadedNotes = [];

      for (const key in data) {
        loadedNotes.push({
          id: data[key].id,
          title: data[key].title,
          content: data[key].content,
        });
      }
      setNotes(loadedNotes);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getNotesHandler();
  }, [getNotesHandler]);

  const addNoteHandler = async (note) => {
    await fetch(
      "https://react-js-notes-app-default-rtdb.firebaseio.com/notes.json",
      {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getNotesHandler();
  };

  let pageContent = <p>Found no notes</p>;

  if (isLoading) pageContent = <p>Loading...</p>;
  else if (notes.length > 0) pageContent = <NotesList notes={notes} />;
  else if (error) pageContent = <p>{error}</p>;

  return (
    <>
      <section>
        <AddNoteForm onAddNote={addNoteHandler} />
      </section>
      <section className="page__content">{pageContent}</section>
    </>
  );
}

export default App;
