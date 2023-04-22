import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../styles.css';

export const Login = () => {
  return(
    <div className="container Login">
      <h1>Login</h1>

      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/readyup">Login with Google</Link>
      </Button>
    </div>
  )
}