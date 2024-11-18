import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function modalVisibleHandler() {
    setModalIsVisible((prevState) => !prevState);
  }

  return (
    <>
      <MainHeader onCreatePost={modalVisibleHandler}></MainHeader>
      <main>
        <PostsList
          isVisible={modalIsVisible}
          onHidePost={modalVisibleHandler}
        ></PostsList>
      </main>
    </>
  );
}

export default App;
