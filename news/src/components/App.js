import "./app.css";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreatePost from "./CreatePost";
import {useState} from 'react';
import MailchimpFormContainer from "./MailChimpFormContainer";

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        {!isAuth?(<Link to="/login">Login</Link>):(<Link to="/create">Create</Link>)}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePost isAuth = {isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/>
        <Route path="/signup" element={<MailchimpFormContainer/>}/>
      </Routes>
    </Router>);

}

export default App;
