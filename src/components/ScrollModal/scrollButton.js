"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const modal_1 = require("../../context/modal");
const transform_1 = require("../../context/transform");
function OpenScrollModal({ modalComponent, // component to render inside the modal
buttonText, // text of the button that opens the modal
onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
onModalClose, // optional: callback function that will be called once the modal is closed
buttonClassName }) {
    const { setModalContent, setOnModalClose } = (0, modal_1.useModal)();
    const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon } = (0, transform_1.useTransform)();
    const onClick = () => {
        const newTransform = {
            x: 0,
            y: 900,
        };
        setTransform(newTransform);
        setScroll("hide");
        if (onModalClose)
            setOnModalClose(onModalClose);
        if (transform.x === 0 && transform.y === 900) {
            setModalContent(modalComponent);
        }
        else {
            setStart("hide");
            setWizard("hide");
            setKnight("hide");
            setDragon("hide");
            setChest("hide");
            setTimeout(() => {
                setModalContent(modalComponent);
            }, 1200);
        }
        if (onButtonClick)
            onButtonClick();
    };
    return (react_1.default.createElement("button", { className: `modal-button-${buttonClassName}`, onClick: onClick },
        react_1.default.createElement("img", { className: 'scroll', src: process.env.PUBLIC_URL + '/scroll.png' }),
        react_1.default.createElement("div", { className: 'button-text' }, buttonText)));
}
exports.default = OpenScrollModal;
