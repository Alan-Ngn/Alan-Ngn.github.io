"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardModal = void 0;
const modal_1 = require("../../context/modal");
require("./wizardModal.css");
const react_1 = __importDefault(require("react"));
const WizardModal = () => {
    const { closeModal } = (0, modal_1.useModal)();
    const openLiveLink = () => {
        window.open("https://gibberish-z0ju.onrender.com", "_blank");
    };
    const openGithub = () => {
        window.open("https://github.com/Alan-Ngn/Gibberish", "_blank");
    };
    return (react_1.default.createElement("article", { className: "Project" },
        react_1.default.createElement("button", { className: "close-button", onClick: closeModal },
            react_1.default.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        react_1.default.createElement("div", { className: "image-link" },
            react_1.default.createElement("img", { className: 'GibberishSplash', src: process.env.PUBLIC_URL + '/GibberishSplashPage.PNG' }),
            react_1.default.createElement("div", { className: "link-github-icon" },
                react_1.default.createElement("a", { href: "https://gibberish-z0ju.onrender.com", rel: "noreferrer", target: "_blank" },
                    react_1.default.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                react_1.default.createElement("a", { href: "https://github.com/Alan-Ngn/Gibberish", rel: "noreferrer", target: "_blank" },
                    react_1.default.createElement("i", { className: "fa-brands fa-github" })))),
        react_1.default.createElement("h3", null, "Gibberish"),
        react_1.default.createElement("p", null, "Gibberish is a Slack-inspired website that utilizes JavaScript, React, Redux, Python, Flask, SQLAlchemy, SocketIO, HTML, and CSS. It integrates real-time communication through sockets for all CRUD operations and optimizes rendering by building relationships with multiple tables and utilizing one reducer."),
        react_1.default.createElement("h3", null, "Skills"),
        react_1.default.createElement("div", { className: "skills-img" },
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" }))));
};
exports.WizardModal = WizardModal;
// export default WizardModal
