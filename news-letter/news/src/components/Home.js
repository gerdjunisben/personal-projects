import React, { useEffect, useState } from "react"
import {getDocs,collection} from "firebase/firestore"
import {db} from "../firebase-config"

function Home(){
    const [postLists,setPostList] = useState([]);

    useEffect(()=>{
        const getPosts = async ()=>{
            const data = await getDocs(collection(db,"posts"));
            setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
        getPosts();
    });

    return <div>
        {postLists.map((post)=>{
            return <div>
                <a href= {post.url} rel="noreferrer" target="_blank">{post.title} {post.date.month}/{post.date.year}</a>
            </div>

        })}
    </div>
}

export default Home;