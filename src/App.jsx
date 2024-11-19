import { Outlet } from "react-router-dom";
import PostsList from "./components/PostsList";

function App() {
  return (
    <>
      <Outlet></Outlet>
      <main>
        <PostsList></PostsList>
      </main>
    </>
  );
}

export default App;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
