"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const modal_1 = require("../../context/modal");
const transform_1 = require("../../context/transform");
function OpenChestModal({ modalComponent, // component to render inside the modal
buttonText, // text of the button that opens the modal
onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
onModalClose, // optional: callback function that will be called once the modal is closed
buttonClassName }) {
    const { setModalContent, setOnModalClose } = (0, modal_1.useModal)();
    const { transform, setTransform, setStart, setChest, setScroll, setDragon, setKnight, setWizard } = (0, transform_1.useTransform)();
    const onClick = () => {
        const newTransform = {
            x: 0,
            y: 360,
        };
        setTransform(newTransform);
        setChest("hide");
        if (onModalClose)
            setOnModalClose(onModalClose);
        if (transform.x === 0 && transform.y === 360) {
            setModalContent(modalComponent);
        }
        else {
            setStart("hide");
            setWizard("hide");
            setScroll("hide");
            setKnight("hide");
            setDragon("hide");
            setTimeout(() => {
                setModalContent(modalComponent);
            }, 1000);
        }
        if (onButtonClick)
            onButtonClick();
    };
    return (react_1.default.createElement("button", { className: `modal-button-${buttonClassName}`, onClick: onClick },
        react_1.default.createElement("img", { className: 'chest', src: process.env.PUBLIC_URL + '/chest.png' }),
        react_1.default.createElement("div", { className: 'button-text' }, buttonText)));
}
exports.default = OpenChestModal;
