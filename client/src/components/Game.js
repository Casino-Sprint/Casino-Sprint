import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import '../styles.css';
import RaceBoard from "./RaceBoard";
import SlotBoard from "./SlotBoard";

export const Game = ({ gameState, manageGame, slotOptions, updateStateSpeed}) => {
  return(
    <Box className="container game">
      { gameState.winner && <> 
        <div className="winnerOverlay">
          <div className="cloud">
            {gameState.winner} is the winner!
          </div>
        </div> 
      </> }
      <h1>Go Yoshi Racers!</h1>
      <RaceBoard gameState={gameState} />
      <SlotBoard gameOn={gameState.gameOn} slotOptions={slotOptions} updateStateSpeed={updateStateSpeed} />
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
