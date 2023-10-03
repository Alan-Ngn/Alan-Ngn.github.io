import { useTransform } from "../../context/transform";
import ChestModal from "../ChestModal";
import OpenChestModal from "../ChestModal/chestButton";
import DragonModal from "../DragonModal";
import OpenDragonModal from "../DragonModal/dragonButton";
import KnightModal from "../KnightModal";
import OpenKnightModal from "../KnightModal/knightButton";
import ScrollModal from "../ScrollModal";
import OpenScrollModal from "../ScrollModal/ScrollButton";
import WizardModal from "../WizardModal";
import OpenWizardModal from "../WizardModal/WizardButton";
import "./navigation.css";
import React, { useState } from 'react';
function Navigation(){
    // const [transform, setTransform] = useState({ x: 20, y: 0})
    const {transform, setTransform, start, setStart} = useTransform()
    // const [start, setStart] = useState("talk-bubble tri-right left-in")

    const handleStart = (e) => {
        const newTransform = {
          x: 20,
          y: 1180,
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
          x: 10,
          y: 10,
        };

        setTransform(newTransform);
        setStart("hide");


      };

      // const chatClassName = "talk-bubble tri-right left-in" + (transform.x !== 20 || transform.y !== 0 ? " hide" : "")
    return (
        <>





              <div className={start}>
                <div className="talktext">
                  <p>
                    Yoohooo! My name is Alan Nguyen and I am a Software Engineer! Take this journey to learn more about what I can do!
                  </p>
                </div>
              </div>

              <img className='landscape' src={process.env.PUBLIC_URL + '/landscape.jpg'}/>
              <div className="testmap">
              <img className="me-avatar" src={process.env.PUBLIC_URL + '/me.png'}
                  style={{
                      transform: `translate(${transform.x}px, ${transform.y}px)`
                  }}
              />
              {/* <button onClick={handleWizardMove}>
                <img  className='wizard' src={process.env.PUBLIC_URL + '/wizard.png'}/>
                Wizard
              </button> */}
{/*
              <button onClick={handleDragonMove}>
                  <img  className='dragon' src={process.env.PUBLIC_URL + '/dragon.png'}/>
                Dragon
              </button>

              <button onClick={handleChestMove}>
                <img  className='chest' src={process.env.PUBLIC_URL + '/chest.png'}/>
                Chest
              </button>

              <button onClick={handleKnightMove}>
              <img  className='knight' src={process.env.PUBLIC_URL + '/knight.png'}/>
              Knight
            </button> */}

            {/* <button onClick={handleScrollMove}>
              <img  className='scroll' src={process.env.PUBLIC_URL + '/scroll.png'}/>
              Scroll
            </button> */}

            <button
                onClick={handleStart}
                className="start"
            >
                Start
            </button>


            <OpenChestModal
              buttonText='Contact'
              buttonClassName='chest'
              modalComponent={<ChestModal/>}
            >
            </OpenChestModal>

            <OpenDragonModal
              buttonText='EarthBnB'
              buttonClassName='dragon'
              modalComponent={<DragonModal/>}
            >
            </OpenDragonModal>

            <OpenKnightModal
              buttonText='Mango Music'
              buttonClassName='knight'
              modalComponent={<KnightModal/>}
            >
            </OpenKnightModal>

            <OpenWizardModal
              buttonText='Gibberish Project'
              buttonClassName='wizard'
              modalComponent={<WizardModal/>}
            >
            </OpenWizardModal>

            <OpenScrollModal
              buttonText='About Me'
              buttonClassName='scroll'
              modalComponent={<ScrollModal/>}
            >
            </OpenScrollModal>

            </div>







        </>
    )
}

export default Navigation
