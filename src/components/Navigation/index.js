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

    return (
        <>
              <div className={start}>
                <div className="talktext">
                  <p>
                    Yoohooo! My name is Alan Nguyen and I am a Software Engineer! Click on the scroll and start the journey to learn more about me!
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
              buttonText='EarthBnB Project'
              buttonClassName='dragon'
              modalComponent={<DragonModal/>}
            >
            </OpenDragonModal>

            <OpenKnightModal
              buttonText='Mango Music Project'
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
