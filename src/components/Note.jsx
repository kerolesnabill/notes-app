import { useState } from "react";
import EditingForm from "./EditingForm";

const Note = ({ id, title, content, onDelete, onEdit }) => {
  const [noteIsShowen, setNoteIsShowen] = useState(false);

  const showNoteHandler = () => {
    setNoteIsShowen(true);
  };

  const hideNoteHandler = () => {
    setNoteIsShowen(false);
  };

  return (
    <>
      <li className="note" onClick={showNoteHandler}>
        <h4 className="title">{title}</h4>
        <p className="content">{content}</p>
      </li>

      {noteIsShowen && (
        <EditingForm
          onClose={hideNoteHandler}
          id={id}
          title={title}
          content={content}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    </>
  );
};

export default Note;
