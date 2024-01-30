"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollModal = void 0;
const modal_1 = require("../../context/modal");
require("./scrollModal.css");
const react_1 = __importDefault(require("react"));
const ScrollModal = () => {
    const { closeModal } = (0, modal_1.useModal)();
    return (react_1.default.createElement("div", { className: "scroll-modal" },
        react_1.default.createElement("button", { className: "close-button", onClick: closeModal },
            react_1.default.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        react_1.default.createElement("div", { className: "profile-pic" },
            react_1.default.createElement("img", { className: 'frame', src: process.env.PUBLIC_URL + '/frame.png' }),
            react_1.default.createElement("img", { className: 'profile', src: process.env.PUBLIC_URL + '/profile.png' })),
        react_1.default.createElement("div", { className: "about-me" },
            react_1.default.createElement("p", null, "My name is Alan Nguyen and I'm a software engineer with a Bachelor's degree in Mathematics and 4+ years of work experience in data analytics."),
            react_1.default.createElement("p", null, "I've spent the past few years dissecting datasets, deriving insights, and building data-driven solutions that have provided valuable information to stakeholders. During this time, I discovered my passion for coding."),
            react_1.default.createElement("p", null, "My journey into software engineering started with self-guided learning, where I built upon my knowledge of Excel with VBA and my knowledge of Alteryx with SQL to automate and create efficient reports. From there, I took the next step and joined App Academy, a coding bootcamp where I learned to build applications and hone my coding skills."),
            react_1.default.createElement("p", null, "I'm actively seeking software engineering positions where I can contribute my unique background as a data analyst and my growing coding skills to help build innovative software products.")),
        react_1.default.createElement("h3", null, "Skills"),
        react_1.default.createElement("div", { className: "skills-img" },
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }))));
};
exports.ScrollModal = ScrollModal;
