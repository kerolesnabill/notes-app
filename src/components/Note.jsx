import { useState } from "react";
import EditingForm from "./EditingForm";
import { ReactComponent as Pen } from "../assets/pen.svg";

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
        <Pen className="pen" />
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
