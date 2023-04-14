import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export const NotesBox = (props) => {
  const deleteHandler = () => {
    props.deleteItem(props.id);
    // try {
    //   await axios.delete("http://localhost:5000/delete/id")
    // } catch (error) {
    //   console.log(error)
    // }
  };
  return (
    <div className="notes_Box">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <button onClick={deleteHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
};
