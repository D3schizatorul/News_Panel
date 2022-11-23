import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import { Navbar, Feed, AddNews } from "./components";

function App() {
  const [openAddNews, setOpenAddNews] = useState(false);
  const [fetchNews, setFetchNews] = useState(0);

  return (
    <div className="">
      <Navbar openAddNews={openAddNews} setOpenAddNews={setOpenAddNews} />
      <CSSTransition
        in={openAddNews}
        appear={true}
        timeout={500}
        classNames="add-news"
        exit={true}
        unmountOnExit
      >
        <AddNews
          setOpenAddNews={setOpenAddNews}
          openAddNews={openAddNews}
          setFetchNews={setFetchNews}
        />
      </CSSTransition>
      <Feed fetchNews={fetchNews} setFetchNews={setFetchNews}/>
    </div>
  );
}

export default App;
