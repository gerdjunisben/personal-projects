import "./app.css";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SubmitArt from "./SubmitArt"
import CreatePost from "./CreatePost";
import {useState} from 'react';
import leia from "./leia.png";
import MailchimpFormContainer from "./MailChimpFormContainer";

function App() {

  const [isAuth,setIsAuth] = useState(localStorage.getItem("uid"))
  const [isInvis,setInvis] = useState("invisLink");



  return (
    <Router>
      <nav>
        <div className="menu">
          <Link className="link img" onClick={()=>{isInvis==="link"?setInvis("invisLink"):setInvis("link")}}><img src={leia} className="funnyDog" alt="rotund dog"></img></Link>
          
          <h1 className="welcome" >Welcome to Benezuela.net</h1>
        </div>
        <Link to="/" className={isInvis}>Home</Link>
        {isAuth===null?(<Link to="/login" className={isInvis}>Login</Link>):(<link></link>)}
        <Link to="/signup" className={isInvis}>Sign Up</Link>
        <Link to="/submit" className={isInvis}>Submit</Link>
        {isAuth==="xAYFj0KBidRW3AB1yCcGRYhfW692"?(<Link to="/create" className={isInvis}>Create</Link>):(<link></link>)}
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
