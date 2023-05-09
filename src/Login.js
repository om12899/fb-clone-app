import React from 'react'
import "./login.css"
import { Button } from '@mui/material'
import {auth, provider} from "./firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {

    

    const auth = getAuth();
    

        const signIn=()=>{
            //sign in..
            signInWithPopup(auth, provider)
            .then((result)=>{
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(result);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
              });
            
        }    
  return (
    <div className='login'>
       <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png'
        alt=''
        />
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg' className='fbtextlogo'
        alt='FB Text Logo'
        />
        </div>
       
        <Button type='submit' onClick={signIn}>
            Sign In</Button>
       
    </div>
  )
}

export default Login
