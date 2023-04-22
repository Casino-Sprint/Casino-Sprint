import React, {useState, useEffect} from 'react';
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

export default function App () {

    const intializeUserState = (userData) => {
        const userStateObj = {
            isLoggedIn : true,
            userId : userData.email
        }
        setUserState(userStateObj);
    }
    
    const initializeGameState = (userData) => {
        const gameStateObj = {
            ...gameState,
            players: [userData.firstName]
        }

        setGameState(gameStateObj);
    }
    
    // add a useEffect to query DB to get userID
    // useEffect (() => {
    //     fetch('/isLoggedIn')
    //     .then(res => res.json())
    //     .then(res => {
    //         //res object is gonna look like {loggedIn: bool, body:User Document obj from mongodb}
    //         console.log(res)
    //         if(res.loggedIn){
    //             intializeUserState(res.body) // update userState w/ session info
    //             initializeGameState(res.body) // update playerlist inside GameState
    //             redirect("/readyup");
    //         }
    //     })
    // },[]);

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

    const testRedirect = () => {
        console.log('test redirect');
       
    }

    return (
        <div className="mainContainer">
            <header className="app-header">
                <h1 className="game-title">Yoshi Racers</h1>
                <Button onClick={()=>{testRedirect()}}>button</Button>
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