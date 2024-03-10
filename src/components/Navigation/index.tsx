import { useTransform } from "../../context/transform";
import { ChestModal } from "../ChestModal";
import OpenChestModal from "../ChestModal/chestButton";
import {DragonModal} from "../DragonModal";
import OpenDragonModal from "../DragonModal/dragonButton";
import {KnightModal} from "../KnightModal";
import OpenKnightModal from "../KnightModal/knightButton";
import {ScrollModal} from "../ScrollModal";
import OpenScrollModal from "../ScrollModal/scrollButton";
import { SnowGlobeModal } from "../SnowGlobeModal";
import OpenSnowGlobeModal from "../SnowGlobeModal/snowGlobeButton";
import {WizardModal} from "../WizardModal";
import OpenWizardModal from "../WizardModal/wizardButton";
import "./navigation.css";
import React, { useState } from 'react';
function Navigation(){
    // const [transform, setTransform] = useState({ x: 20, y: 0})
    const {transform, setTransform, start, setStart, scroll, setScroll, knight, setKnight, wizard, setWizard, dragon, setDragon, chest, setChest, globe, setGlobe} = useTransform()
    // const [start, setStart] = useState("talk-bubble tri-right left-in")

    const handleStart = (e:any) => {
        const newTransform = {
          x: 20,
          y: 1180,
        };
        setTransform(newTransform);
        setScroll('hide');
        setWizard("hide");
        setKnight("hide");
        setDragon("hide");
        setChest("hide");
        setGlobe("hide");
        setTimeout(()=> {
          setStart("start-bubble talk-bubble tri-right left-in")
        },1000)
      };

    return (
        <>




              <img className='landscape' src={process.env.PUBLIC_URL + '/landscape.jpg'}/>
              <div className="testmap">


              <div className={start}>
                <div className="talktext">
                  <p>
                    Yoohooo! My name is Alan Nguyen and I am a Software Engineer! Click on the scroll and start the journey to learn more about me!
                  </p>
                </div>
              </div>

                <div className={scroll}>
                  <div className="talktext">
                    <p>
                      Click on the Wizard to check out my latest project: Gibberish!
                    </p>
                  </div>
                </div>

                <div className={wizard}>
                  <div className="talktext">
                    <p>
                      Click on the knight to check out my collaborative project: Mango Music!
                    </p>
                  </div>
                </div>

                <div className={knight}>
                  <div className="talktext">
                    <p>
                      Click on the dragon to check out my first project: EarthBnB!
                    </p>
                  </div>
                </div>


                <div className={dragon}>
                  <div className="talktext">
                    <p>
                      Click on the chest to discover ways to connect as well as download my resume!
                    </p>
                  </div>
                </div>

                <div className={chest}>
                  <div className="talktext">
                    <p>
                      Thanks for taking the time to know me!
                    </p>
                  </div>
                </div>


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
                <OpenSnowGlobeModal
                  buttonText='SnowGlobe Project'
                  buttonClassName='snow'
                  modalComponent={<SnowGlobeModal/>}
                >
                </OpenSnowGlobeModal>
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
