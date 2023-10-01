import "./content.css";
import React, { useState } from 'react';
function Content(){


      // const chatClassName = "talk-bubble tri-right left-in" + (transform.x !== 20 || transform.y !== 0 ? " hide" : "")
    return (
        <>
            <div>
                <img  className='frame' src={process.env.PUBLIC_URL + '/frame.png'}/>
                <img  className='profile' src={process.env.PUBLIC_URL + '/profile.png'}/>
            </div>
        </>
    )
}

export default Content
