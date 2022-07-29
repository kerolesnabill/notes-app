import UseInput from "../hooks/useInput";

const AddNoteForm = ({ onAddNote }) => {
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    valueBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: enteredContent,
    isValid: enteredContentIsValid,
    hasError: contentInputHasError,
    valueChangeHandler: contentChangeHandler,
    valueBlurHandler: contentBlurHandler,
    reset: resetContentInput,
  } = UseInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredTitleIsValid && enteredContentIsValid) formIsValid = true;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const note = {
      id: new Date(),
      title: enteredTitle,
      content: enteredContent,
    };

    onAddNote(note);
    resetTitleInput();
    resetContentInput();
  };

  const titleClasses = titleInputHasError ? "title invalid" : "title";
  const contentClasses = contentInputHasError ? "content invalid" : "content";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="note__form">
        <input
          className={titleClasses}
          type="text"
          placeholder="Title"
          value={enteredTitle}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        <textarea
          className={contentClasses}
          placeholder="Take a note..."
          rows="8"
          maxLength="500"
          value={enteredContent}
          onChange={contentChangeHandler}
          onBlur={contentBlurHandler}
        ></textarea>
        {titleInputHasError && (
          <p className="text__error">Title must not be empty.</p>
        )}
        {contentInputHasError && (
          <p className="text__error">Note must not be empty.</p>
        )}

        <button className="btn" disabled={!formIsValid}>
          <span>+</span>
        </button>
      </div>
    </form>
  );
};

export default AddNoteForm;
