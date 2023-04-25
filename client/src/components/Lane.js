import React from "react";
import {Racer} from "./Racer";

export const Lane = ({racer}) => {
    // const style = {
    //   'background-image': 'url(background.gif)',
    //   'background-repeat': 'repeat'
    // }
    return (
      <div className="lane"> 
        < Racer racer={racer}/>
      </div>
    )
}