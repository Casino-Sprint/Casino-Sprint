import React, {useState, useEffect} from 'react';
import Slots from './Slots'
export default function SlotBoard ({slotOptions, updateStateSpeed, gameOn}) {

  console.log('slot Options is ', slotOptions);

    // sets current state to yellow(default speed)
    const [slotsArr, setSlotsArr] = useState([2, 2, 2]);
    
    // function randomizes the boxes
    const randomize = () =>{
      const arr = [];
      let newSpeed = 0;
      for (let i = 0; i < 3; i++){
        let rand = Math.floor(Math.random() * 5);
        // if the bomb gets selected rerun the randomizer again
        // bomber will have a 10percent chance of spawning
        if (rand === 4){
          rand = Math.floor(Math.random() * 5)
        }
        arr.push(rand);
        newSpeed += slotOptions[rand].value;
      }
      // set new state to the randomized array
      setSlotsArr(arr);
      //updates State with new speed
      updateStateSpeed(newSpeed);
    }
    //renders 3 slots based off their position in the slotOptions array
    //randomized by function above
    return (
        <div>
            <div id="slotWrapper">
                { slotOptions && <><img id="slot" src= {slotOptions[slotsArr[0]].img}/>
                <img id="slot" src= {slotOptions[slotsArr[1]].img}/>
                <img id="slot" src= {slotOptions[slotsArr[2]].img}/></>}
            </div>
            {gameOn && <><button className="gameButton" onClick = {randomize}>Click to roll</button></>}
        </div>
    )
}