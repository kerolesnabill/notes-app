import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <ul className="note__list">
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
    </ul>
  );
};

export default NotesList;
