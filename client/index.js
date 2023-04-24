import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'
import App from './src/App.js'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';


const root = createRoot(document.getElementById('root'));
const clientID = '997505656977-fk615lvga4j9mnv3lv09q6ius5prtcet.apps.googleusercontent.com'
root.render(
  // <StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </GoogleOAuthProvider>
  // </StrictMode>
);


