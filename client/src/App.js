import React, {useState} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import './styles.css';

// import components
import {Login} from "./components/Login";
import {Game} from "./components/Game";
import {ReadyUp} from "./components/ReadyUp";

export default function App () {

    // add a useEffect to query DB to get userID

    // for getting redirects, refer to res.location

    const [userState, setUserState] = useState({
        isLoggedIn : false,
        userId : ""
    });

    const [gameState, setGameState] = useState({
        players: [],
        slots: {
            slotCount: 3,
            slotOptions: [
                {
                    name: 'red',
                    value: 100,
                    img: ''    
                },
                {
                    name: 'blue',
                    value: 50,
                    img: ''    
                },
                {
                    name: 'yellow',
                    value: 0,
                    img: ''    
                },
                {
                    name: 'black',
                    value: -25,
                    img: ''    
                },

            ]
        },
        gameSettings: {
            difficulty: '',
            defaultSpeed: 10
        },
        gameTime: 0,
        State: 'readyUp',
        winner: ''
    })

    return (
        <div className="mainContainer">
            <header className="app-header">
                <h1 className="game-title">Yoshi Racers</h1>
            </header>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/readyup" element={<ReadyUp playerList={gameState.players}/>} />
                    <Route exact path="/game" element={<Game/>} />
                </Routes>
            </Router>
        </div>
    )
}