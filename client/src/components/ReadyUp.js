import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../styles.css';

export const ReadyUp = ({updatePlayerImg,playerList,playMusic}) => {
  
  const player = playerList[0];
  const playerCardMaker = () => {
    <playerCard
      playerName={playerName}
      playerScore={score}
      playerIcon={icon}
    
    />
  }

  const charIconSource = [
  'https://mario.wiki.gallery/images/thumb/d/d2/NSMB2_Invincible_Mario_Artwork.png/1200px-NSMB2_Invincible_Mario_Artwork.png',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dcfhdvb-1f3f407d-03dc-4c90-9b81-414a270dee4c.png/v1/fill/w_600,h_796/super_mario__princess_peach_run_2d_by_joshuat1306_dcfhdvb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk2IiwicGF0aCI6IlwvZlwvZWQ5OTFjZjQtN2M4Yy00NTMwLWI2YmEtYTNhYmYzYWIyZWFlXC9kY2ZoZHZiLTFmM2Y0MDdkLTAzZGMtNGM5MC05YjgxLTQxNGEyNzBkZWU0Yy5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xav71HpoepQPawB4QO40Jq1H7PQx_v63TTeC-dIKwvc',
  'https://mario.wiki.gallery/images/thumb/c/c5/BowserMP8.png/250px-BowserMP8.png'
  ];

  // const marioLink = 'https://mario.wiki.gallery/images/thumb/d/d2/NSMB2_Invincible_Mario_Artwork.png/1200px-NSMB2_Invincible_Mario_Artwork.png';
  // const princessLink = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dcfhdvb-1f3f407d-03dc-4c90-9b81-414a270dee4c.png/v1/fill/w_600,h_796/super_mario__princess_peach_run_2d_by_joshuat1306_dcfhdvb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk2IiwicGF0aCI6IlwvZlwvZWQ5OTFjZjQtN2M4Yy00NTMwLWI2YmEtYTNhYmYzYWIyZWFlXC9kY2ZoZHZiLTFmM2Y0MDdkLTAzZGMtNGM5MC05YjgxLTQxNGEyNzBkZWU0Yy5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xav71HpoepQPawB4QO40Jq1H7PQx_v63TTeC-dIKwvc';
  // const bowserLink = 'https://mario.wiki.gallery/images/thumb/c/c5/BowserMP8.png/250px-BowserMP8.png';

  const charIcons = [];
  charIconSource.forEach((el,i) =>{
    charIcons.push(<img onClick={() => updatePlayerImg(el)} className='charBtn' id='mario'src={el}/>);
  })

  return(
    <div className="container readyUp">
      <h1>Ready Up!</h1>

      <div>
        <div className='charContainer'>
          {/* <img onClick={() => updatePlayerImg(marioLink)} className='charBtn' id='mario'src={marioLink}/>
          <img onClick={() => updatePlayerImg(princessLink)} className='charBtn' id='princess'src={princessLink}/>
          <img onClick={() => updatePlayerImg(bowserLink)} className='charBtn' id='bowser' src={bowserLink}/> */}
          {charIcons}
        </div>

        <div className='playerCard'>
          <h3> Your Racer:</h3>
          <img className = "currChar" src={playerList[0].img}/>

        </div>
      </div>

      <Button onClick={()=>playMusic()}>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/game">Ready</Link>
      </Button>

      {/* <Button>
        <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/">Log In</Link>
      </Button> */}
    </div>
  )
}
