import OpenModalButton from "../OpenModal";
import ProjectModal from "../ProjectModal";
import "./navigation.css";
import React, { useState } from 'react';
function Navigation(){
    const [transform, setTransform] = useState({ x: 20, y: 0})

    const handleStart = (e) => {
        const newTransform = {
          x: 20,
          y: 0,
        };
        setTransform(newTransform);
      };
    const handleDragonMove = (e) => {
        const newTransform = {
          x: 40,
          y: -700,
        };
        setTransform(newTransform);
      };

      const handleWizardMove = (e) => {
        const newTransform = {
          x: -240,
          y: -300,
        };
        setTransform(newTransform);
      };

      const handleChestMove = (e) => {
        const newTransform = {
          x: 0,
          y: -850,
        };
        setTransform(newTransform);
      };

      const handleKnightMove = (e) => {
        const newTransform = {
          x: 10,
          y: -450,
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
                onClick={handleDragonMove}
            >
                <img  className='dragon' src={process.env.PUBLIC_URL + '/dragon.png'}/>
              Dragon
            </button>
            <button onClick={handleWizardMove}>
              <img  className='wizard' src={process.env.PUBLIC_URL + '/wizard.png'}/>
              Wizard
            </button>
            <button onClick={handleChestMove}>
              <img  className='chest' src={process.env.PUBLIC_URL + '/chest.png'}/>
              Chest
            </button>
            <button onClick={handleKnightMove}>
              <img  className='knight' src={process.env.PUBLIC_URL + '/knight.png'}/>
              Knight
            </button>
            <button
                onClick={handleStart}
            >
                Start
            </button>
            <OpenModalButton
              buttonText='testf'
              modalComponent={<ProjectModal/>}
            ></OpenModalButton>
        </>
    )
}

export default Navigation
