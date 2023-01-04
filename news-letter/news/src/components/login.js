import React from "react";
import {auth,provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Login(setIsAuth){
    let navigate = useNavigate();
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((res)=>{
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/");
        })
    }
    return 
    <div>
        <p>Sign in with google</p>
        <button onClick={signInWithGoogle}>sign in</button>
    </div>
}

export default Login;