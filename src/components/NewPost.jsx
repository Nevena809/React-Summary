import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancle, onAddPost }) {
  const [changeBody, setChangeBody] = useState("");
  const [changeAuthor, setChangeAuthor] = useState("");

  function changeBodyHandler(event) {
    setChangeBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setChangeAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: changeBody,
      author: changeAuthor,
    };
    onAddPost(postData);
    onCancle();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancle}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
