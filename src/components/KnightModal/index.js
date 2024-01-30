"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnightModal = void 0;
const modal_1 = require("../../context/modal");
const react_1 = __importDefault(require("react"));
require("./knightModal.css");
const KnightModal = () => {
    const { closeModal } = (0, modal_1.useModal)();
    const openLiveLink = () => {
        window.open("https://mango-music-4c4k.onrender.com", "_blank");
    };
    const openGithub = () => {
        window.open("https://github.com/Mango-WorldWide/Mango-Music", "_blank");
    };
    return (react_1.default.createElement("article", { className: "Project" },
        react_1.default.createElement("button", { className: "close-button", onClick: closeModal },
            react_1.default.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        react_1.default.createElement("div", { className: "image-link" },
            react_1.default.createElement("img", { className: 'MangoSplash', src: process.env.PUBLIC_URL + '/MangoMusicThumb.PNG' }),
            react_1.default.createElement("div", { className: "link-github-icon" },
                react_1.default.createElement("a", { href: "https://mango-music-4c4k.onrender.com", rel: "noreferrer", target: "_blank" },
                    react_1.default.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                react_1.default.createElement("a", { href: "https://github.com/Mango-WorldWide/Mango-Music", rel: "noreferrer", target: "_blank" },
                    react_1.default.createElement("i", { className: "fa-brands fa-github" })))),
        react_1.default.createElement("h3", null, "Mango Music"),
        react_1.default.createElement("p", null, "Mango Music draws inspiration from Apple Music and employs JavaScript, React, Redux, Python, Flask, SQLAlchemy, AWS S3, HTML, and CSS. It features a persistent global player, and an integration with AWS S3 for storing and serving .mp4 files."),
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
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }))));
};
exports.KnightModal = KnightModal;
