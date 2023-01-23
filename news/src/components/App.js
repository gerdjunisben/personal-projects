import "./app.css";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreatePost from "./CreatePost";
import {useState} from 'react';
import MailchimpFormContainer from "./MailChimpFormContainer";

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("uid"))
  return (
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        {isAuth!=="xAYFj0KBidRW3AB1yCcGRYhfW692"?(<Link to="/login" className="link">Login</Link>):(<Link to="/create" className="link">Create</Link>)}
        <Link to="/signup" className="link">Sign Up</Link>
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
