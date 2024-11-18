import classes from "./Post.module.css";

export default function Post({ author, body }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.body}>{body}</p>
    </li>
  );
}