import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import Pokedex from 'pokedex-promise-v2';
import axios from 'axios';
import ReactDOM from 'react-dom'


function Home(props){
    
    const [pokeList,setPokeList] = useState([0,0,0,0,0,0,0,0,0]);
    const [pokeCounter, setPokeCounter] = useState(0);
    const [genCounter, setGenCounter] = useState(0);
    const [pokeImg, setPokeImg] = useState();
    const [pokeName, setPokeName] = useState("Refresh to start");
    const [pokeURL, setPokeURL] = useState("");
    const P = new Pokedex();
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const navigate =useNavigate();
    

    useEffect(()=>{
        loadTheThing();
    })

    function loadTheThing()
    {
        const elem = (<div>
            <div>
                <h1>{pokeName}</h1>
                <img src={pokeImg}></img>
            </div>
           <div>
            <button onClick={onGood}>Good</button>
            <button onClick={onBad}>Bad</button>
           </div>
       
        
        </div>)
        loadMon();
        root.render(elem);

    }

    

    const nextMon = async ()=>{
        
        setPokeCounter(pokeCounter+1);
        if(pokeCounter === 1011)
        {
            props.send(pokeList);
            navigate("/graph");
        }
        loadMon()
        if(pokeCounter === 151 || pokeCounter === 251 
            || pokeCounter === 386 || pokeCounter === 493
            || pokeCounter === 649 || pokeCounter === 721
            || pokeCounter === 809 || pokeCounter === 905)
        {
            setGenCounter(genCounter +1);
        }
        
    }

    const loadMon = async ()=>{
        setPokeURL("https://pokeapi.co/api/v2/pokemon/" + pokeCounter)
        console.log(pokeURL)
        await axios.get(pokeURL).then((res)=>{
            setPokeName(res.data.name);
            setPokeImg(res.data.sprites.front_default);
        });
    }
   
    const onGood = async ()=>{
        nextMon();
        let arr = pokeList;
        arr[genCounter]++;
        
        setPokeList(arr);
        console.log(pokeList);
    }

    const onBad = async ()=>{
        nextMon();
    }

    return(<div></div>);
}

export default Home;