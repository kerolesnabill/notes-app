import { useRef } from "react";

const AddNoteForm = ({ onAddNote }) => {
  const titleRef = useRef("");
  const contentRef = useRef("");

  const title = titleRef.current.value;
  const content = contentRef.current.value;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const note = {
      title,
      content,
    };

    onAddNote(note);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="note__form">
        <input
          className="title"
          ref={titleRef}
          type="text"
          placeholder="Title"
        />
        <textarea
          className="content"
          ref={contentRef}
          placeholder="Take a note..."
          rows="8"
          maxLength="500"
        ></textarea>
        <button type="submit" className="btn">
          <span>+</span>
        </button>
      </div>
    </form>
  );
};

export default AddNoteForm;
