import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../styles.css';

export const ReadyUp = (props) => {
  
  const playerCardMaker = () => {
    <playerCard
      playerName={playerName}
      playerScore={score}
      playerIcon={icon}
    
    />
  }

  return(
    <div className="container readyUp">
      <h1>Ready Up!</h1>
      <div>Player queue box holds player sprites</div>

      <div>
        Player setup boxes
        <div>
          <div>player card component</div>
        </div>
      </div>

      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/game">Game</Link>
      </Button>

      <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/">Log In</Link>
      </Button>
    </div>
  )
}