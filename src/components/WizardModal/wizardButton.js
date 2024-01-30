import React from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform.js';
function OpenWizardModal({ modalComponent, // component to render inside the modal
buttonText, // text of the button that opens the modal
onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
onModalClose, // optional: callback function that will be called once the modal is closed
buttonClassName }) {
    const { setModalContent, setOnModalClose } = useModal();
    const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon } = useTransform();
    const onClick = () => {
        const newTransform = {
            x: -200,
            y: 900,
        };
        setTransform(newTransform);
        setWizard("hide");
        if (onModalClose)
            setOnModalClose(onModalClose);
        if (transform.x === -200 && transform.y === 900) {
            setModalContent(modalComponent);
        }
        else {
            setStart("hide");
            setChest("hide");
            setScroll("hide");
            setKnight("hide");
            setDragon("hide");
            setTimeout(() => {
                setModalContent(modalComponent);
            }, 1200);
        }
        if (onButtonClick)
            onButtonClick();
    };
    return (React.createElement("button", { className: `modal-button-${buttonClassName}`, onClick: onClick },
        React.createElement("img", { className: 'wizard', src: process.env.PUBLIC_URL + '/wizard.png' }),
        React.createElement("div", { className: 'button-text' }, buttonText)));
}
export default OpenWizardModal;
