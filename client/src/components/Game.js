import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import '../styles.css';
import RaceBoard from "./RaceBoard";
export const Game = ({ gameState, manageGame}) => {
  return(
    <Box className="container game">
      <h1>Game</h1>
      <RaceBoard gameState={gameState}/>

      <Button onClick={() => manageGame('start')}>Start Game</Button>
      <Button onClick={() => manageGame('stop')}>Stop Game</Button>

      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/">Login</Link>
      </Button>

      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/readyup">Ready Up</Link>
      </Button>


    </Box>
  )
}
