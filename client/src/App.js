import React, {useState, useEffect, useRef} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Route, Link, Routes, redirect, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import './styles.css';

// import components
import {Login} from "./components/Login";
import {Game} from "./components/Game";
import {ReadyUp} from "./components/ReadyUp";
import { red } from '@mui/material/colors';

// import music
import myAudioResource from './assets/backgroundMusic.wav';
const backgroundMusic = new Audio(myAudioResource);
backgroundMusic.volume = .25;


// App Component functionality
export default function App () {

    // need to declare these hooks before any functionality
    const navigate = useNavigate();
    const renderIntervalID = useRef(null);
    
    // set initial state w/ useState hook
    const [userState, setUserState] = useState({
        isLoggedIn : false,
        userId : ""
    });

    const [gameState, setGameState] = useState({
        slots: {
            slotCount: 3,
            slotOptions: [
                {
                    name: 'star',
                    value: .5,
                    // img: 'https://preview.redd.it/v2f2u6rvavj41.jpg?width=640&crop=smart&auto=webp&v=enabled&s=d4711f1d85b38d74270c632797240b9c4a6051bc'
                    img: 'https://mario.wiki.gallery/images/thumb/8/8a/New_Super_Mario_Bros._U_Deluxe_Super_Star.png/1600px-New_Super_Mario_Bros._U_Deluxe_Super_Star.png'    
                },
                {
                    name: 'mushroom',
                    value:.25,
                    img: 'https://static.wikia.nocookie.net/mario/images/9/94/MushroomMarioKart8.png'    
                },
                {
                    name: 'boo',
                    value: 0,
                    img: 'https://static.wikia.nocookie.net/mario/images/3/3f/MPS_Boo_Artwork.png'    
                },
                {
                    name: 'thwomp',
                    value: -.5,
                    img: 'https://mario.wiki.gallery/images/thumb/3/34/NSMBU_Thwomp_Artwork.png/280px-NSMBU_Thwomp_Artwork.png'
                },
                {
                    name: 'cooked',
                    value: -10,
                    img: 'https://static.wikia.nocookie.net/mario/images/e/e2/MPSR_King_Bob_omb.png'
                }
            ]
        },
        gameSettings: {
            difficulty: '',
            defaultSpeed: .5
        },
        gameOn: false,
        gameTime: 0,
        State: 'readyUp',
        winner: null
    })

    // play music callback
    const playMusic = ()=>{
        backgroundMusic.play();
    }

    // method that invokes react router navigate method, (had to declare navigate on line 16)
    const readyUpRedirect = () => {
        navigate('/readyup');
    }
    
    // function to update our state w/ only permitted updates
    const intializeUserState = (userData) => {
        const userStateObj = {
            isLoggedIn : true,
            userId : userData.email
        }
        setUserState(userStateObj);
    }
    
    // function to update our state w/ only permitted updates
    const initializeGameState = (userData) => {
        const initialPlayersObj = {
            playerName: userData.firstName,
            positionOnScreen: 0,
            speed: .5,
            isBot: false,
            img: userData.picture,
            color: "",
        };

        const botObj = {
            playerName: 'bot1',
            positionOnScreen: 0,
            speed: .5,
            isBot: true,
            img: 'https://www.savepng.com/file/thumb/2020-06/87251-mario-yoshi-green-go-touch-world-line-thumb.png',
            color: "",
          };
        
        const gameStateObj = {
            ...gameState,
            players: [initialPlayersObj, botObj]
        }

        setGameState(gameStateObj);
    }
    
    // on loading App component, run fetch request to see if user has a valid session if they do they get directed to login page. if not they get directed to login page
    useEffect (() => {
        fetch('/isLoggedIn')
        .then(res => res.json())
        .then(res => {
            //if user has an active session in database server respose
            //res object is gonna look like {loggedIn: bool, body:User Document obj from mongodb}
            if(res.isLoggedIn){
                intializeUserState(res.body) // update userState w/ session info
                initializeGameState(res.body) // update playerlist inside GameState
                navigate(res.location);
            } else {
                navigate('/login');
            }
        })
    },[]);

    // game logic/engine
    const manageGame = (action) => {
        
        if (action==='start') {
            setGameState(prev=>{
                return{...prev, gameOn:true}
            })
            renderIntervalID.current = setInterval(renderTick, 50);
        }
        if (action==='stop') {
            console.log('stop1!!!!');
            setGameState(prev=>{
                return{...prev, gameOn:false}
            })
            clearInterval(renderIntervalID.current); 
        }
    }

    const updateStateSpeed = (newSpeed) =>{
        console.log(`setting new speed of ${newSpeed}`);

        setGameState(prev=>{
            const newPlayersArr = prev.players.slice();

            newPlayersArr[0].speed = newSpeed;

            return{...prev, players:newPlayersArr}
        })
    }

    // restart game, basically reset positions, gameOn, and winner keys
    const resetGame = () => {
        setGameState((prevGameState)=>{
            // update state for each player, update racerpositiononscreen
            const newPlayersArr = prevGameState.players.slice();
            const arr = newPlayersArr.map(player => {                
                return({
                    ...player,
                    positionOnScreen : 0,
                    speed: .5
                })
            })
            return {...prevGameState, winner: '', players:arr}
        }) 
    }

    const renderTick = () => {

        setGameState((prevGameState)=>{
            // update state for each player, update racerpositiononscreen
            const newPlayersArr = prevGameState.players.slice();
            // console.log(newPlayersArr);
            let winnerName = null;

            const arr = newPlayersArr.map(player => {
                // console.log('initial position: ', player.positionOnScreen);
                let newPosition = player.positionOnScreen + player.speed;
                // the user goes back to the start; set speed to move foward
                if (newPosition < 0) {
                    newPosition = 0;
                    player.speed = .1;
                // if user goes over 100 set position to finish line
                } else if (newPosition >= 100 && prevGameState.winner === null) {
                    newPosition = 100;
                    //WINNER - update winnerName, stop game
                    winnerName = player.playerName;
                    manageGame('stop');
                } 

                return({
                    ...player,
                    positionOnScreen : newPosition
                })
            }) 

            return {...prevGameState, winner: winnerName, players:arr}
        })
        //check if win state gets triggered
    }
    function updatePlayerImg(imgUrl){
     setGameState(prev=>{
        const newPlayersArr = prev.players.slice();
        newPlayersArr[0] = {...newPlayersArr[0],img:imgUrl};
        return {...prev,players:newPlayersArr};
     })
    }
    return (
        <div className="mainContainer">
            <header className="app-header">
                <span className="headerLetter y">Y</span>
                <span className="headerLetter o">o</span>
                <span className="headerLetter s">s</span>
                <span className="headerLetter h">h</span>
                <span className="headerLetter i">i</span>
                
                <span className="headerLetter r">R</span>
                <span className="headerLetter a">a</span>
                <span className="headerLetter c">c</span>
                <span className="headerLetter e">e</span>
                <span className="headerLetter r">r</span>
                <span className="headerLetter s">s</span>
            </header>
                <Routes>
                    <Route exact path="/login" element={
                        <Login 
                            // prop drill these components
                            intializeUserState={intializeUserState} 
                            readyUpRedirect={readyUpRedirect}
                            initializeGameState = {initializeGameState}
                            />
                    }/>
                    <Route exact path="/readyup" element={<ReadyUp  playerList={gameState.players} updatePlayerImg={updatePlayerImg} playMusic={playMusic} />} />
                    <Route exact path="/game" element={<Game resetGame={resetGame} slotOptions={gameState.slots.slotOptions} gameState={gameState} manageGame={manageGame} updateStateSpeed={updateStateSpeed} playMusic={playMusic} />} />
                </Routes>
        </div>
    )
}