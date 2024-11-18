import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

export default function PostsList({ isVisible, onHidePost }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPost) => [postData, ...existingPost]);
  }
  return (
    <>
      {isVisible && (
        <Modal onClose={onHidePost}>
          <NewPost onCancle={onHidePost} onAddPost={addPostHandler}></NewPost>
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>The poster is empty</h2>{" "}
        </div>
      )}
    </>
  );
}
