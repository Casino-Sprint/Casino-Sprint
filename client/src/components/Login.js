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
    
    //fetch to /login checks if user has a current session open. if they do they proceed to the readyup page, if not they get sent to the login page. final response from logged in user is:
    //{
    //  isLoggedIn:res.locals.isLoggedIn,
    //  body:res.locals.user,
    //  location:res.locals.location
    //}

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
      <h1>Login with Google Oauth (very cool!)</h1>
      <div className="googleLogin">
      <GoogleLogin
        onSuccess={(credentialResponse) => successfulGoogleResponse(credentialResponse)}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      </div>
      {/* <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/readyup">Login with Google</Link>
      </Button> */}
    </div>
  )
}