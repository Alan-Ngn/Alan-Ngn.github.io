import OpenModalButton from "../OpenModal";
import ProjectModal from "../ProjectModal";
import "./navigation.css";
import React, { useState } from 'react';
function Navigation(){
    const [transform, setTransform] = useState({ x: 20, y: 0})
    const [start, setStart] = useState("talk-bubble tri-right left-in")

    const handleStart = (e) => {
        const newTransform = {
          x: 20,
          y: 0,
        };
        setTransform(newTransform);
        setTimeout(()=> {
          setStart("talk-bubble tri-right left-in")
        },1000)
      };
    const handleDragonMove = (e) => {
        const newTransform = {
          x: 40,
          y: -700,
        };
        setTransform(newTransform);
        setStart("hide");
      };

      const handleWizardMove = (e) => {
        const newTransform = {
          x: -240,
          y: -300,
        };
        setTransform(newTransform);
        setStart("hide");
      };

      const handleChestMove = (e) => {
        const newTransform = {
          x: 0,
          y: -820,
        };
        setTransform(newTransform);
        setStart("hide");
      };

      const handleKnightMove = (e) => {
        const newTransform = {
          x: 10,
          y: -450,
        };
        setTransform(newTransform);
        setStart("hide");
      };
      const handleScrollMove = (e) => {
        const newTransform = {
          x: -50,
          y: -325,
        };

        setTransform(newTransform);
        setStart("hide");


      };

      // const chatClassName = "talk-bubble tri-right left-in" + (transform.x !== 20 || transform.y !== 0 ? " hide" : "")
    return (
        <>
            <img className="me-avatar" src={process.env.PUBLIC_URL + '/me.png'}
                style={{
                    transform: `translate(${transform.x}px, ${transform.y}px)`
                }}
            />
            <div className={start}>
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
            <button onClick={handleScrollMove}>
              <img  className='scroll' src={process.env.PUBLIC_URL + '/scroll.png'}/>
              Scroll
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
