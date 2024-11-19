import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as loadingPosts } from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as actionNewPost } from "./components/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails, {
  loader as loaderPostDetails,
} from "./components/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <App />,
        loader: loadingPosts,
        children: [
          { path: "create-post", element: <NewPost />, action: actionNewPost },
          { path: ":id", element: <PostDetails />, loader: loaderPostDetails },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
