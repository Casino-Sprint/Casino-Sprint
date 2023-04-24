import React from "react";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../styles.css';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'


export const Login = ({intializeUserState, readyUpRedirect ,initializeGameState}) => {

  //google login function
  const successfulGoogleResponse = (credentialResponse) => {
    //decode token
    const userInfo = jwt_decode(credentialResponse.credential)
    
    //fetch to /api, post request, userInfo
    fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userInfo)
    })
    .then((res)=> res.json())

    //trigger session start
    .then((res)=>{
      console.log(res);
      //setIsLoggedIn(true);
      intializeUserState(res.body);
      initializeGameState(res.body);
      readyUpRedirect();
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  
  return(
    <div className="container Login">
      <h1>Login</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => successfulGoogleResponse(credentialResponse)}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/readyup">Login with Google</Link>
      </Button>
    </div>
  )
}