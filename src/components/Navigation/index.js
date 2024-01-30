import { useTransform } from "../../context/transform";
import { ChestModal } from "../ChestModal";
import OpenChestModal from "../ChestModal/chestButton";
import { DragonModal } from "../DragonModal";
import OpenDragonModal from "../DragonModal/dragonButton";
import { KnightModal } from "../KnightModal";
import OpenKnightModal from "../KnightModal/knightButton";
import { ScrollModal } from "../ScrollModal";
import OpenScrollModal from "../ScrollModal/scrollButton";
import { WizardModal } from "../WizardModal";
import OpenWizardModal from "../WizardModal/wizardButton";
import "./navigation.css";
import React from 'react';
function Navigation() {
    // const [transform, setTransform] = useState({ x: 20, y: 0})
    const { transform, setTransform, start, setStart, scroll, setScroll, knight, setKnight, wizard, setWizard, dragon, setDragon, chest, setChest } = useTransform();
    // const [start, setStart] = useState("talk-bubble tri-right left-in")
    const handleStart = (e) => {
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
        setTimeout(() => {
            setStart("start-bubble talk-bubble tri-right left-in");
        }, 1000);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { className: 'landscape', src: process.env.PUBLIC_URL + '/landscape.jpg' }),
        React.createElement("div", { className: "testmap" },
            React.createElement("div", { className: start },
                React.createElement("div", { className: "talktext" },
                    React.createElement("p", null, "Yoohooo! My name is Alan Nguyen and I am a Software Engineer! Click on the scroll and start the journey to learn more about me!"))),
            React.createElement("div", { className: scroll },
                React.createElement("div", { className: "talktext" },
                    React.createElement("p", null, "Click on the Wizard to check out my latest project: Gibberish!"))),
            React.createElement("div", { className: wizard },
                React.createElement("div", { className: "talktext" },
                    React.createElement("p", null, "Click on the knight to check out my collaborative project: Mango Music!"))),
            React.createElement("div", { className: knight },
                React.createElement("div", { className: "talktext" },
                    React.createElement("p", null, "Click on the dragon to check out my first project: EarthBnB!"))),
            React.createElement("div", { className: dragon },
                React.createElement("div", { className: "talktext" },
                    React.createElement("p", null, "Click on the chest to discover ways to connect as well as download my resume!"))),
            React.createElement("div", { className: chest },
                React.createElement("div", { className: "talktext" },
                    React.createElement("p", null, "Thanks for taking the time to know me!"))),
            React.createElement("img", { className: "me-avatar", src: process.env.PUBLIC_URL + '/me.png', style: {
                    transform: `translate(${transform.x}px, ${transform.y}px)`
                } }),
            React.createElement("button", { onClick: handleStart, className: "start" }, "Start"),
            React.createElement(OpenChestModal, { buttonText: 'Contact', buttonClassName: 'chest', modalComponent: React.createElement(ChestModal, null) }),
            React.createElement(OpenDragonModal, { buttonText: 'EarthBnB Project', buttonClassName: 'dragon', modalComponent: React.createElement(DragonModal, null) }),
            React.createElement(OpenKnightModal, { buttonText: 'Mango Music Project', buttonClassName: 'knight', modalComponent: React.createElement(KnightModal, null) }),
            React.createElement(OpenWizardModal, { buttonText: 'Gibberish Project', buttonClassName: 'wizard', modalComponent: React.createElement(WizardModal, null) }),
            React.createElement(OpenScrollModal, { buttonText: 'About Me', buttonClassName: 'scroll', modalComponent: React.createElement(ScrollModal, null) }))));
}
export default Navigation;
