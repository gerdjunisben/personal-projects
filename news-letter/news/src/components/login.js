import React from "react";
import {auth,provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Login(props){
    let navigate = useNavigate();
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((res)=>{
            localStorage.setItem("isAuth",true);
            props.setIsAuth(true);
            navigate("/");
        });
    };
    return( 
    <div>
        <p>Sign in with google</p>
        <button onClick={signInWithGoogle} className="login-with-google-btn">sign in</button>
    </div>);
}

export default Login;