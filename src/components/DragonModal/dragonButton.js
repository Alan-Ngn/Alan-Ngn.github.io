"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const modal_1 = require("../../context/modal");
const transform_1 = require("../../context/transform");
function OpenDragonModal({ modalComponent, // component to render inside the modal
buttonText, // text of the button that opens the modal
onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
onModalClose, // optional: callback function that will be called once the modal is closed
buttonClassName }) {
    const { setModalContent, setOnModalClose } = (0, modal_1.useModal)();
    const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon } = (0, transform_1.useTransform)();
    const onClick = () => {
        const newTransform = {
            x: -40,
            y: 450,
        };
        setTransform(newTransform);
        setDragon("hide");
        if (onModalClose)
            setOnModalClose(onModalClose);
        if (transform.x === -40 && transform.y === 450) {
            setModalContent(modalComponent);
        }
        else {
            setStart("hide");
            setWizard("hide");
            setScroll("hide");
            setKnight("hide");
            setChest("hide");
            setTimeout(() => {
                setModalContent(modalComponent);
            }, 1200);
        }
        if (onButtonClick)
            onButtonClick();
    };
    return (react_1.default.createElement("button", { className: `modal-button-${buttonClassName}`, onClick: onClick },
        react_1.default.createElement("img", { className: 'dragon', src: process.env.PUBLIC_URL + '/dragon.png' }),
        react_1.default.createElement("div", { className: 'button-text' }, buttonText)));
}
exports.default = OpenDragonModal;
