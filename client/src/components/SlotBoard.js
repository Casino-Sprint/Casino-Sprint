import React, {useState, useEffect} from 'react';
import Slots from './Slots'
export default function SlotBoard ({slotOptions}) {

    const [playerSpeed, setPlayerSpeed] = useState(slotOptions[2])


    // sets current to yellow(default speed)
    const [slotsArr, setSlotsArr] = useState([2, 2, 2]);
    
    // function randomizes the boxes
    const randomize = () =>{
      const arr = [];
      for (let i = 0; i < 3; i++){
        let rand = Math.floor(Math.random() * 4);
        arr.push(rand)
      }
      // set new state to the randomized array
      setSlotsArr(arr)
    }
    //renders 3 slots based off their position in the slotOptions array
    //randomized by function above
    return (
        <div>
            <div id="slotWrapper">
                <img id="slot" src= {slotOptions[slotsArr[0]].img}/>
                <img id="slot" src= {slotOptions[slotsArr[1]].img}/>
                <img id="slot" src= {slotOptions[slotsArr[2]].img}/>
            </div>
            <button onClick = {randomize}>Click to roll</button>
        </div>
    )
}