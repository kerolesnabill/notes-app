import Note from "./Note";

const NotesList = ({ notes, onDelete, onEdit }) => {
  return (
    <ul className="note__list">
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          id={note.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default NotesList;
