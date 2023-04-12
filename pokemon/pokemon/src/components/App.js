
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./Home";
import Graph from "./Graph";


function App() {

  const [pokeList,setPokeList] = useState([0,0,0,0,0,0,0,0,0]);
   
  const handleList = (e) =>{
    setPokeList(e);
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home send={handleList}/>}/>
        <Route path="/graph" element={<Graph list={pokeList}/>}/>
      </Routes>
    </Router>);

}

export default App;
