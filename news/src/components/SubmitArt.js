import React, {useState } from "react";
import {addDoc,collection} from "firebase/firestore"
import {db,storage} from "../firebase-config";
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";

function SubmitArt({isAuth}){
    const [title,setTitle] = useState("");
    const [name,setName] = useState("");
    const [image,setImage] = useState(null);
    const [percent,setPercent] = useState(0);
   

    const handleUpload = async (f)=> {
        if (!f) {
            alert("Please choose a file first!")
        }
        else if((f.size/(1024*1024)) > 2)
        {
            alert("File too big, try to keep that shit under 2 MB")
        }
        else
        {
        const storageRef = ref(storage,`/files/${f.name}`)
        const uploadTask = uploadBytesResumable(storageRef, f);
        uploadTask.on("state_changed",(snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                await addDoc(postsCollectionRef,{
                    name,
                    title,
                    url,
                    date:{month:(new Date().getMonth()+1),year:new Date().getFullYear()}
                });
            });
        }
        );
        }
    }
        

    const postsCollectionRef=collection(db,"art");

    const createPost = async ()=>{
        handleUpload(image); 
    }

    return( 
    <div>
        <h1>Rules</h1>
        <div>
            <p>1.Do not upload porn or gore unless it is tasteful</p>
            <p>2.Do not upload hateful media</p>
            <p>3.The artist name sent will be the one I use to credit you</p>
            <p>4.You may upload videos, pictures or articles</p>
            <p>5.Sending something in doesn't mean it will get into the next newsletter or any</p>
            <p>6.Hi Kevin</p>
        </div>
        <h1>Submit Art</h1>
        <div className='inputContainer'>
            <div className='input'>
                <label>Artist Name</label>
                <input type={"text"} onChange={(e)=>{
                    setName(e.target.value);
                }}/>
            </div>
            <div className='input'>
                <label>Art Title</label>
                <input type={"text"} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
            </div>
            <div className='input'>
                <label>File</label>
                <input type={"file"} onChange={(e)=>{
                    setImage(e.target.files[0]);
                }}/>
            </div>
        </div>
        <button onClick={createPost}>Submit Post</button>
        <p>upload percent:{percent}</p>
        
    </div>);

}

export default SubmitArt;