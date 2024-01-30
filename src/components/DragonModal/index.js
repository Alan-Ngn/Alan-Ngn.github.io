"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonModal = void 0;
const modal_1 = require("../../context/modal");
require("./dragonModal.css");
const react_1 = __importDefault(require("react"));
const DragonModal = () => {
    const { closeModal } = (0, modal_1.useModal)();
    return (react_1.default.createElement("article", { className: "Project" },
        react_1.default.createElement("button", { className: "close-button", onClick: closeModal },
            react_1.default.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        react_1.default.createElement("div", { className: "image-link" },
            react_1.default.createElement("img", { className: 'EarthBnBSplash', src: process.env.PUBLIC_URL + '/EarthbnbSplashPage.PNG' }),
            react_1.default.createElement("div", { className: "link-github-icon" },
                react_1.default.createElement("a", { href: "https://earthbnb-xzrt.onrender.com", rel: "noreferrer", target: "_blank" },
                    react_1.default.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                react_1.default.createElement("a", { href: "https://github.com/Alan-Ngn/API-project", rel: "noreferrer", target: "_blank" },
                    react_1.default.createElement("i", { className: "fa-brands fa-github" })))),
        react_1.default.createElement("h3", null, "EarthBnB"),
        react_1.default.createElement("p", null, "EarthBnB is a JavaScript, React, Redux, and Express-based clone of Airbnb. It achieves dynamic mapping of vacation rentals on the splash page and enhances scalability through Object-Oriented Programming (OOP) and component-based architecture."),
        react_1.default.createElement("h3", null, "Skills"),
        react_1.default.createElement("div", { className: "skills-img" },
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" }),
            react_1.default.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" }))));
};
exports.DragonModal = DragonModal;
