import React from 'react';
import { Box } from '@mui/material';
// import Lane f
import {Lane} from "./Lane";


export default function RaceBoard ({gameState}) {
  const racers = gameState.players;
  
  const lanes = racers.map(racer=>{
    return(
      <Lane racer = {racer}/>
    )
  });

  return(
    <div className="raceBoard">
      {lanes}
    </div>
  )
}