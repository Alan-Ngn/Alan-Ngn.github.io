"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = exports.Modal = exports.ModalProvider = void 0;
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./Modal.css");
const transform_1 = require("./transform");
const ModalContext = react_1.default.createContext(undefined);
const ModalProvider = ({ children }) => {
    const { transform, setScroll, setWizard, setKnight, setDragon, setChest } = (0, transform_1.useTransform)();
    const modalRef = (0, react_1.useRef)(null);
    const [modalContent, setModalContent] = (0, react_1.useState)(null);
    // callback function that will be called when modal is closing
    const [onModalClose, setOnModalClose] = (0, react_1.useState)(null);
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ModalContext.Provider, { value: contextValue }, children),
        react_1.default.createElement("div", { ref: modalRef })));
};
exports.ModalProvider = ModalProvider;
const Modal = () => {
    const { modalRef, modalContent, closeModal } = (0, react_1.useContext)(ModalContext) || {};
    // If there is no div referenced by the modalRef or modalContent is not a
    // truthy value, render nothing:
    if (!modalRef || !modalRef.current || !modalContent)
        return null;
    // Render the following component to the div referenced by the modalRef
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { id: "modal" },
        react_1.default.createElement("div", { id: "modal-background", onClick: closeModal }),
        react_1.default.createElement("div", { id: "modal-content" }, modalContent)), modalRef.current);
};
exports.Modal = Modal;
// export const useModal = () => useContext(ModalContext);
const useModal = () => {
    const context = (0, react_1.useContext)(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
exports.useModal = useModal;
