import React, {useState, useEffect} from 'react';

export default function Slots () {

    return (
        <div >
            <h1>Slot Values</h1>
            <div className='slotsValues'>
            <img width= '50' height= '50'src='https://mario.wiki.gallery/images/thumb/8/8a/New_Super_Mario_Bros._U_Deluxe_Super_Star.png/1600px-New_Super_Mario_Bros._U_Deluxe_Super_Star.png'/>
            <p>Go Faster</p>
            <img width= '50' height= '50'src='https://static.wikia.nocookie.net/mario/images/9/94/MushroomMarioKart8.png'/>
            <p>Go Fast</p>
            <img width= '50' height= '50'src='https://static.wikia.nocookie.net/mario/images/3/3f/MPS_Boo_Artwork.png'/>
            <p>Stationary</p>
            <img width= '50' height= '50'src='https://mario.wiki.gallery/images/thumb/3/34/NSMBU_Thwomp_Artwork.png/280px-NSMBU_Thwomp_Artwork.png'/>
            <p>Big Slow</p>
            <img width= '50' height= '50'src='https://static.wikia.nocookie.net/mario/images/e/e2/MPSR_King_Bob_omb.png'/>
            <p>Cooked</p>
            </div>
        </div>
    )
}