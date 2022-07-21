const Note = ({ title, content }) => {
  return (
    <li className="note">
      <h4 className="title">{title}</h4>
      <p className="content">{content}</p>
    </li>
  );
};

export default Note;
