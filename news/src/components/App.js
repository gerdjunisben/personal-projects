import "./app.css";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SubmitArt from "./SubmitArt"
import CreatePost from "./CreatePost";
import {useState} from 'react';
import MailchimpFormContainer from "./MailChimpFormContainer";

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("uid"))
  return (
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        {isAuth==="xAYFj0KBidRW3AB1yCcGRYhfW692"?(<Link to="/create" className="link">Create</Link>):(<link></link>)}
        {isAuth===null?(<Link to="/login" className="link">Login</Link>):(<link></link>)}
        <Link to="/signup" className="link">Sign Up</Link>
        <Link to="/submit" className="link">Submit</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePost isAuth = {isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/>
        <Route path="/signup" element={<MailchimpFormContainer/>}/>
        <Route path="/submit" element={<SubmitArt/>}/>
      </Routes>
    </Router>);

}

export default App;
