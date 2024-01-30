"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = require("../../context/transform");
const ChestModal_1 = require("../ChestModal");
const chestButton_1 = __importDefault(require("../ChestModal/chestButton"));
const DragonModal_1 = require("../DragonModal");
const dragonButton_1 = __importDefault(require("../DragonModal/dragonButton"));
const KnightModal_1 = require("../KnightModal");
const knightButton_1 = __importDefault(require("../KnightModal/knightButton"));
const ScrollModal_1 = require("../ScrollModal");
const scrollButton_1 = __importDefault(require("../ScrollModal/scrollButton"));
const WizardModal_1 = require("../WizardModal");
const wizardButton_1 = __importDefault(require("../WizardModal/wizardButton"));
require("./navigation.css");
const react_1 = __importDefault(require("react"));
function Navigation() {
    // const [transform, setTransform] = useState({ x: 20, y: 0})
    const { transform, setTransform, start, setStart, scroll, setScroll, knight, setKnight, wizard, setWizard, dragon, setDragon, chest, setChest } = (0, transform_1.useTransform)();
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("img", { className: 'landscape', src: process.env.PUBLIC_URL + '/landscape.jpg' }),
        react_1.default.createElement("div", { className: "testmap" },
            react_1.default.createElement("div", { className: start },
                react_1.default.createElement("div", { className: "talktext" },
                    react_1.default.createElement("p", null, "Yoohooo! My name is Alan Nguyen and I am a Software Engineer! Click on the scroll and start the journey to learn more about me!"))),
            react_1.default.createElement("div", { className: scroll },
                react_1.default.createElement("div", { className: "talktext" },
                    react_1.default.createElement("p", null, "Click on the Wizard to check out my latest project: Gibberish!"))),
            react_1.default.createElement("div", { className: wizard },
                react_1.default.createElement("div", { className: "talktext" },
                    react_1.default.createElement("p", null, "Click on the knight to check out my collaborative project: Mango Music!"))),
            react_1.default.createElement("div", { className: knight },
                react_1.default.createElement("div", { className: "talktext" },
                    react_1.default.createElement("p", null, "Click on the dragon to check out my first project: EarthBnB!"))),
            react_1.default.createElement("div", { className: dragon },
                react_1.default.createElement("div", { className: "talktext" },
                    react_1.default.createElement("p", null, "Click on the chest to discover ways to connect as well as download my resume!"))),
            react_1.default.createElement("div", { className: chest },
                react_1.default.createElement("div", { className: "talktext" },
                    react_1.default.createElement("p", null, "Thanks for taking the time to know me!"))),
            react_1.default.createElement("img", { className: "me-avatar", src: process.env.PUBLIC_URL + '/me.png', style: {
                    transform: `translate(${transform.x}px, ${transform.y}px)`
                } }),
            react_1.default.createElement("button", { onClick: handleStart, className: "start" }, "Start"),
            react_1.default.createElement(chestButton_1.default, { buttonText: 'Contact', buttonClassName: 'chest', modalComponent: react_1.default.createElement(ChestModal_1.ChestModal, null) }),
            react_1.default.createElement(dragonButton_1.default, { buttonText: 'EarthBnB Project', buttonClassName: 'dragon', modalComponent: react_1.default.createElement(DragonModal_1.DragonModal, null) }),
            react_1.default.createElement(knightButton_1.default, { buttonText: 'Mango Music Project', buttonClassName: 'knight', modalComponent: react_1.default.createElement(KnightModal_1.KnightModal, null) }),
            react_1.default.createElement(wizardButton_1.default, { buttonText: 'Gibberish Project', buttonClassName: 'wizard', modalComponent: react_1.default.createElement(WizardModal_1.WizardModal, null) }),
            react_1.default.createElement(scrollButton_1.default, { buttonText: 'About Me', buttonClassName: 'scroll', modalComponent: react_1.default.createElement(ScrollModal_1.ScrollModal, null) }))));
}
exports.default = Navigation;
