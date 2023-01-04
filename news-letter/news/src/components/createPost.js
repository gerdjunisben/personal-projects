import React from "react"

function CreatePost(){
    return( 
    <div>
        <h1>Create Post</h1>
        <div>
            <label>Title</label>
            <input type={"text"}/>
            <label>pdf</label>
            <input type={"file"}/>
        </div>
        <button>Submit Post</button>
    </div>);

}

export default CreatePost;