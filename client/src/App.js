import React, {useState} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'



export default function App () {
  // default state
  const [userState, setUserState] = useState({
    isLoggedIn : false,
    userId : ""
  });
  
  const endSession = (email) => {
    // reset state to default
    // revoke token?
    google.accounts.id.revoke(email, done => {
    console.log('consent revoked');
  });

    // redirect to logged out page?
  }
  const checkPost = () => {
    fetch('/api',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        hello:"yoshi racers"
    })
    })
  }

  const successfulGoogleResponse = (credentialResponse) => {

    console.log(credentialResponse);
    const userInfo = jwt_decode(credentialResponse.credential)
    console.log(userInfo);
    
    //fetch to /api, post request, userInfo
    fetch('/api',{
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
      setUserState({isLoggedIn: true, userId: res.body})
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  
  return(
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => successfulGoogleResponse(credentialResponse)}
        onError={() => {
          console.log('Login Failed');
        }}
      />;

      <button onClick={() => endSession(userState.userId)}>Log Out</button>
      <button onClick={checkPost}>POST REQ</button>
      <h1>ITS YOSHI RACER TIME MFKERSS5555SSS</h1>
      <h4>more like small mike</h4>
      <h6>tinyMike</h6>
      <div>NEW FEATURE</div>
      <h1>Big Mike Indeed</h1>
      <h2> again!</h2>
    </div>
  )
}
