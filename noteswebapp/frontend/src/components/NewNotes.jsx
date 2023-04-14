import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios"


export const NewNotes = (props) => {
  const [note, setNotes] = useState({
    heading: "",
    content: "",
  });

  const InputEventHandler = (event) => {
    const { name, value } = event.target;
    setNotes((lastData) => {
      return {
        ...lastData,
        [name]: value,
      };
    });
  };
  
  // const appendNotes= async()=>{
    
    // try {
    //   await axios.post("http://localhost:5000/create")
    // } catch (error) {
    //   console.log(error)
    // }
  // }

  const addEventHandler = async() => {
    props.propsNotes(note);
    setNotes({
      heading: "",
      content: "",
    });
  };


  return (
    <div>
      <form className="form_container">
        <input
          type="text"
          placeholder="Take A Note"
          name="heading"
          value={note.heading}
          onChange={InputEventHandler}
          autoComplete="off"
        />
        <br />
        <textarea
          name="content"
          placeholder="Note Details"
          value={note.content}
          onChange={InputEventHandler}
        ></textarea>
        <br />
        <button onClick={addEventHandler}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};
