import React from "react";

//${racer.positionOnScreen}

export const Racer = ({racer}) => {
    const style = {
      position: 'absolute',
      top: '30%',
      width: '25px',
      left: `${racer.positionOnScreen}%`
    }
    
    return (
        <div>
          <img src={racer.img} style={style}/>
        </div>
    )
}