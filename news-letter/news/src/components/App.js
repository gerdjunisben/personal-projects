import "./app.css";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreatePost from "./CreatePost";
import {useState} from 'react';

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        {!isAuth?(<Link to="/login">Login</Link>):(<Link to="/create">Create</Link>)}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/>
      </Routes>
    </Router>);

}

export default App;
