import React from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform.js';
function OpenScrollModal({ modalComponent, // component to render inside the modal
buttonText, // text of the button that opens the modal
onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
onModalClose, // optional: callback function that will be called once the modal is closed
buttonClassName }) {
    const { setModalContent, setOnModalClose } = useModal();
    const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon } = useTransform();
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
    return (React.createElement("button", { className: `modal-button-${buttonClassName}`, onClick: onClick },
        React.createElement("img", { className: 'scroll', src: process.env.PUBLIC_URL + '/scroll.png' }),
        React.createElement("div", { className: 'button-text' }, buttonText)));
}
export default OpenScrollModal;