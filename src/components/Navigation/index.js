import OpenModalButton from "../OpenModal";
import ProjectModal from "../ProjectModal";
import "./navigation.css";
import React, { useState } from 'react';
function Navigation(){
    const [transform, setTransform] = useState({ x: 20, y: 0})

    const handlereset = (ev) => {
        const newTransform = {
          x: 20,
          y: 0,
        };
        setTransform(newTransform);
      };
    const handleMouseMove = (ev) => {
        const newTransform = {
          x: 20,
          y: -200,
        };
        setTransform(newTransform);
      };

      const handleMouseMove1 = (ev) => {
        const newTransform = {
          x: -240,
          y: -300,
        };
        setTransform(newTransform);
      };

      const chatClassName = "talk-bubble tri-right left-in" + (transform.x !== 20 || transform.y !== 0 ? " hide" : "")
    return (
        <>
            <img className="me-avatar" src={process.env.PUBLIC_URL + '/me.png'}
                style={{
                    transform: `translate(${transform.x}px, ${transform.y}px)`
                }}
            />
            <div className={chatClassName}>
              <div className="talktext">

              <p>
                Yoohooo! My name is Alan Nguyen and I am a Software Engineer! Take this journey to learn more about what I can do!
              </p>
              </div>
            </div>
            <button
                // onMouseMove={handleMouseMove}
                onClick={handleMouseMove}
            >
                Click Me!
            </button>
            <button
                // onMouseMove={handleMouseMove}
                onClick={handleMouseMove1}
            >
                Click Me 2!
            </button>

            <button
                // onMouseMove={handleMouseMove}
                onClick={handlereset}
            >
                Reset!
            </button>
            {/* <img  className='wizard' src={process.env.PUBLIC_URL + '/wzzz.png'}/> */}
            {/* <img  className='dragon' src={process.env.PUBLIC_URL + '/dragon.png'}/> */}

            <OpenModalButton
              buttonText='testf'
              modalComponent={<ProjectModal/>}
            ></OpenModalButton>
        </>
    )
}

export default Navigation
