import React, { useState } from "react";
import NavB from "./Components/NavBar/NavBar";
import CreatePost from "./Components/CreatePostForm/CreatePostForm";

function App() {

  const [posts, setposts] = useState([{}])

  return (
    <div>
       <NavB />
       <CreatePost />
    </div>
   
  );
}

export default App;
