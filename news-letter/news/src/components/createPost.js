import React, { useEffect, useState } from "react";
import {addDoc,collection} from "firebase/firestore"
import {db,storage} from "../firebase-config";
import { useNavigate } from "react-router-dom";
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";

function CreatePost({isAuth}){
    const [title,setTitle] = useState("");
    const [file,setFile] = useState(null);
    const [percent,setPercent] = useState(0);
   

    const handleUpload = async (f)=> {
        if (!f) {
            alert("Please choose a file first!")
        }
        const storageRef = ref(storage,`/files/${f.name}`)
        const uploadTask = uploadBytesResumable(storageRef, f);
        uploadTask.on("state_changed",(snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                await addDoc(postsCollectionRef,{
                    title,
                    url,
                    date:{month:(new Date().getMonth()+1),year:new Date().getFullYear()}
                });
            });
        }
        );
    }
        
 

    const postsCollectionRef=collection(db,"posts");
    let navigate = useNavigate();
    useEffect(()=>{
        if(!isAuth)
           navigate("login");
    });

    const createPost = async ()=>{
        handleUpload(file);  
        navigate("/");
    }

    return( 
    <div>
        <h1>Create Post</h1>
        <div>
            <div>
                <label>Title</label>
                <input type={"text"} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
            </div>
            <div>
                <label>pdf</label>
                <input type={"file"} onChange={(e)=>{
                    setFile(e.target.files[0]);
                }}/>
            </div>
        </div>
        <button onClick={createPost}>Submit Post</button>
        <p>{percent}</p>
    </div>);

}

export default CreatePost;