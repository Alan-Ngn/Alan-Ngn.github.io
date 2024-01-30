import React, { useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { useTransform } from './transform.js';
const ModalContext = React.createContext(undefined);
export const ModalProvider = ({ children }) => {
    const { transform, setScroll, setWizard, setKnight, setDragon, setChest } = useTransform();
    const modalRef = useRef(null);
    const [modalContent, setModalContent] = useState(null);
    // callback function that will be called when modal is closing
    const [onModalClose, setOnModalClose] = useState(null);
    const closeModal = () => {
        setModalContent(null); // clear the modal contents
        // If callback function is truthy, call the callback function and reset it
        // to null:
        if (transform.x === 0 && transform.y === 900) {
            setScroll("scroll-bubble talk-bubble tri-right left-in");
        }
        if (transform.x === -200 && transform.y === 900) {
            setWizard("wizard-bubble talk-bubble tri-right left-in");
        }
        if (transform.x === 20 && transform.y === 650) {
            setKnight("knight-bubble talk-bubble tri-left right-in");
        }
        if (transform.x === -40 && transform.y === 450) {
            setDragon("dragon-bubble talk-bubble tri-right left-in");
        }
        if (transform.x === 0 && transform.y === 360) {
            setChest("chest-bubble talk-bubble tri-right left-in");
        }
        if (typeof onModalClose === 'function') {
            setOnModalClose(null);
            onModalClose();
        }
    };
    const contextValue = {
        modalRef, // reference to modal div
        modalContent, // React component to render inside modal
        setModalContent, // function to set the React component to render inside modal
        setOnModalClose, // function to set the callback function called when modal is closing
        closeModal, // function to close the modal
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ModalContext.Provider, { value: contextValue }, children),
        React.createElement("div", { ref: modalRef })));
};
export const Modal = () => {
    const { modalRef, modalContent, closeModal } = useContext(ModalContext) || {};
    // If there is no div referenced by the modalRef or modalContent is not a
    // truthy value, render nothing:
    if (!modalRef || !modalRef.current || !modalContent)
        return null;
    // Render the following component to the div referenced by the modalRef
    return ReactDOM.createPortal(React.createElement("div", { id: "modal" },
        React.createElement("div", { id: "modal-background", onClick: closeModal }),
        React.createElement("div", { id: "modal-content" }, modalContent)), modalRef.current);
};
// export const useModal = () => useContext(ModalContext);
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
