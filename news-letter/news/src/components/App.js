
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import CreatePost from "./createPost";
import React,{useState} from 'react';

function App() {
 

  /*
  const [posts, setPosts] = useState([]);
  function addPost(post) {
    setPosts((prevPosts) => {
      return [...prevPosts, posts];
    });
  }

  return (
    <div>
      <Header />
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            id={index}
            title={post.title}
            content={post.content}
          />
        );
      })}

      <Footer />
    </div>
  );
  */
  const [isAuth,setIsAuth] = useState(false);
    return 
    {
      <Router>
        <nav>
          <link to="/">Home</link>
          {isAuth && <link to="/create">Create</link>}
          {!isAuth && <link to="/login">Login</link>}
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/>
        </Routes>
      </Router>
    }

}

export default App;
