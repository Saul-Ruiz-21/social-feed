import React, { useState } from "react";
import NavB from "./Components/NavBar/NavBar";
import CreatePost from "./Components/CreatePostForm/CreatePostForm";
import PostList from "./Components/PostList/PostList";

function App() {

  const [posts, setPosts] = useState([
    {
      name: 'Saul',
      post: 'Food'
    }
  ])

  function addNewPost(post){
    let tempPosts = [...posts, post]

    setPosts(tempPosts);
  }

  return (
    <div>
       <NavB />
       <CreatePost addNewPostProperty={addNewPost}/>
       <div>
         <PostList parentEntries={posts} />
       </div>
    </div>
   
  );
}

export default App;
