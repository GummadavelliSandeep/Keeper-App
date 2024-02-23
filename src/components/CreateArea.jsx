import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function handleSubmit(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Write a note..."
          rows="3"
        />
        <button onClick={handleSubmit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
