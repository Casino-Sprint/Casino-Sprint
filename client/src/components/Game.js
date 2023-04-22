import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../styles.css';

export const Game = () => {
  return(
    <div className="container game">
      <h1>Game</h1>
      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/">Login</Link>
      </Button>

      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/readyup">Ready Up</Link>
      </Button>

    </div>
  )
}
