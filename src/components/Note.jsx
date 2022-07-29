const Note = ({ title, content, id, onDelete }) => {
  return (
    <li className="note">
      <h4 className="title">{title}</h4>
      <p className="content">{content}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Note;
